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
    public class CartController : ControllerBase
    {
        private readonly ICart _int1;
        public CartController(ICart icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<CartController>
        [HttpGet]
        public IEnumerable<Cart> Get()
        {
            return _int1.GetCart();
        }

        // GET api/<CartController>/5
        [HttpGet("{id}")]
        public Cart Get(int id)
        {
            return _int1.GetCartById(id);
        }

        // POST api/<CartController>
        [AllowAnonymous]
        [HttpPost("{value}")]
        
        public int Post(int value)
        {
            Cart newCart = _int1.GetCartByUserId(value);
            if (newCart == null)
            {
                newCart.UserId = value;
                var addedCart = _int1.AddCart(newCart);
                return addedCart.CartId;
            }
            else
            {
                return newCart.CartId;
            }
        }

        // PUT api/<CartController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Cart value)
        {
            _int1.UpdateCart(id, value);
        }

        // DELETE api/<CartController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteCart(id);
        }
    }
}
