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
        public OrderController(IOrder icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<OrderController>
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return _int1.GetOrder();
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public IEnumerable<Order> Get(int id)
        {
            return _int1.GetOrderByUserId(id);
        }

        // POST api/<OrderController>
        [HttpPost]
        public void Post([FromBody] Order value)
        {
            _int1.AddOrder(value);
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
    }
}
