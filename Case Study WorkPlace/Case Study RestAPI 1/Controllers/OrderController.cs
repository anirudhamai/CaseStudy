using DBLibrary.Models;
using DBLibrary.Repo;
using iText.Layout.Borders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
   
    public class OrderController : ControllerBase
    {
        private readonly IOrder _int1;
        private readonly IOrderItem _int2;
        private readonly IEmailService _emailService;
        private readonly ICustomer _int3;
        private readonly IPdfService _pdfService;
        public OrderController(IOrder icontext, IOrderItem int2, IEmailService emailService, ICustomer customer, IPdfService pdfService)
        {
            _int1 = icontext;
            _int2 = int2;
            _emailService = emailService;
            _int3 = customer;
            _pdfService = pdfService;
        }
        // GET: api/<OrderController>
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return _int1.GetOrder();
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public IEnumerable<OrderDTO> Get(int id)
        {
            return _int1.GetOrderByUserId(id);
        }

        // POST api/<OrderController>
        [HttpPost]
        public async void Post([FromBody] OrderRequestDTO value)
        {
            var order =_int1.AddOrder(value);
            foreach (OrderItem item in value.OrderItemlist)
            {
                item.OrderId = order;
                _int2.AddOrderItem(item);
            }
            var mail = _int1.GetOrderById(order);
            byte[] pdf = _pdfService.GenerateOrderBill(order);
            await SendEmail(mail.User.Email, pdf);

        }

        // PUT api/<OrderController>/5
        [HttpPut]
        public void Put([FromBody] int id)
        {
            _int1.CancelOrder(id);
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteOrder(id);
        }


        //[HttpPut]
        //[Route("pdf")]
        //public async Task<IActionResult> GenerateBill()
        //{
        //    IEnumerable<Order> order = _int1.GetOrder();
        //    foreach (Order item in order)
        //    {
        //        var pdfBytes1 = _pdfService.GenerateOrderBill(item.OrderId);
        //    }

        //    // Store the PDF in the database
        //    var pdfBytes = _pdfService.GenerateOrderBill(1);

        //    // Return the PDF file as a download
        //    return File(pdfBytes, "application/pdf", $"Order_{order.First().OrderId}_Bill.pdf");
        //}

        [HttpPut]
        [AllowAnonymous]
        [Route("pdf/{orderId}")]
        public async Task<IActionResult> GenerateBill(int orderId)
        {
            Order order = _int1.GetOrderById(orderId);
            if(order.Pdf != null)
            {
                return File(order.Pdf, "application/pdf", $"Order_{orderId}_Bill.pdf");
            }

            var pdfBytes = _pdfService.GenerateOrderBill(orderId);

            // Store the PDF in the database


            // Return the PDF file as a download
            return File(pdfBytes, "application/pdf", $"Order_{orderId}_Bill.pdf");
        }

        private async Task SendEmail(string email, byte[] pdf)
        {
            string subject = "Order Placed!!";
            string body = $"Dear User,<br/><br/>You have successfully placed order on Shopease.<br/> Find the order details below!!<br/>. Happy Shopease!!<br/><br/>Best regards,<br/>to SHOPEASE";
            await _emailService.SendEmailAsync(email, subject, body, pdf);
        }
    }
}
