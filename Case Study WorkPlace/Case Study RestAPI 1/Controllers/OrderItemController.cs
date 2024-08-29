using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : ControllerBase
    {
        private readonly IOrderItem _int1;
        public OrderItemController(IOrderItem icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<OrderItemController>
        [HttpGet]
        public IEnumerable<OrderItem> Get()
        {
            return _int1.GetOrderItem();
        }

        // GET api/<OrderItemController>/5
        [HttpGet("{id}")]
        public OrderItem Get(int id)
        {
            return _int1.GetOrderItemById(id);
        }

        // POST api/<OrderItemController>
        [HttpPost]
        public void Post([FromBody] OrderItem value)
        {
            _int1.AddOrderItem(value);
        }

        // PUT api/<OrderItemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] OrderItem value)
        {
            _int1.UpdateOrderItem(id, value); 
        }

        // DELETE api/<OrderItemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteOrderItem(id);
        }
    }
}
