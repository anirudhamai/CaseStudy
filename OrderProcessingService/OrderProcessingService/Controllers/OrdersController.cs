using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.Blazor;
using OrderProcessingService.Models;
using OrderProcessingService.Services;

namespace OrderProcessingService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // GET api/orders
        [HttpGet]
        public async Task<IActionResult> GetOrdersAsync()
        {
            var orders = await _orderService.GetOrdersAsync();
            return Ok(orders);
        }

        // GET api/orders/user/{userId}
        [Route("user/{userId}")]
        [HttpGet]
        public async Task<IActionResult> GetOrdersByUserIdAsync(int userId)
        {
            var orders = await _orderService.GetOrdersByUserIdAsync(userId);
            return Ok(orders);
        }

        // GET api/orders/{orderId}
        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrderByIdAsync(int OrderId)
        {
            var order = await _orderService.GetOrderByIdAsync(OrderId);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // POST api/orders
        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync(OrderRequestDTO orderRequest)
        {
            // Call the service method to create the order
            var createdOrder = await _orderService.CreateOrderAsync(orderRequest);

            // Return only the orderId in the response
            return Ok(createdOrder);
        }


        // PUT api/orders/{orderId}
        [HttpPut("{orderId}")]
        public async Task<IActionResult> UpdateOrderAsync(int orderId, [FromBody] OrderUpdateDTO orderUpdate)
        {
            if (orderUpdate == null)
            {
                return BadRequest("Order update cannot be null.");
            }

            var result = await _orderService.UpdateOrderAsync(orderId, orderUpdate);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/orders/{orderId}
        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrderAsync(int orderId)
        {
            var result = await _orderService.DeleteOrderAsync(orderId);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }

}