using DBLibrary.Models;
using DBLibrary.Repo;
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
        public OrderController(IOrder icontext, IOrderItem int2, IEmailService emailService, ICustomer customer)
        {
            _int1 = icontext;
            _int2 = int2;
            _emailService = emailService;
            _int3 = customer;
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

        //[HttpGet]
        //[Route("ordermail/{id}")]
        //public Order GetById(int id)
        //{
        //    return _int1.GetOrderById(id);
        //}

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
            await SendEmail(mail.User.Email);

        }

        // PUT api/<OrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Order value)
        {
            _int1.UpdateOrder(id, value);
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteOrder(id);
        }

        private async Task SendEmail(string email)
        {
            string subject = "Order Placed!!";
            string body = $"Dear User,<br/><br/>You have successfully placed order on Shopease.<br/> Find the order details below!!<br/>. Happy Shopease!!<br/><br/>Best regards,<br/>to SHOPEASE";
            await _emailService.SendEmailAsync(email, subject, body);
        }
    }
}
