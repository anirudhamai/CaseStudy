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
    public class CartItemController : ControllerBase
    {
        private readonly ICartItem _int1;
        public CartItemController(ICartItem icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<CartItemController>
        [HttpGet]
        public IEnumerable<CartItem> Get()
        {
            return _int1.GetCartItem();
        }

        // GET api/<CartItemController>/5
        [HttpGet("{id}")]
        public CartItem Get(int id)
        {
            return _int1.GetCartItemById(id);
        }

        // POST api/<CartItemController>
        [HttpPost]
        public void Post([FromBody] CartItem value)
        {
            _int1.AddCartItem(value);
        }

        // PUT api/<CartItemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CartItem value)
        {
            _int1.UpdateCartItem(id, value);
        }

        // DELETE api/<CartItemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteCartItem(id);
        }
    }
}
