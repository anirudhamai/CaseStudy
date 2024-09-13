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
        public IEnumerable<CartItem> Get(int id)
        {
            return _int1.GetCartItemById(id);
        }

        // POST api/<CartItemController>
        [HttpPost]
        public void Post([FromBody] CartItem value)
        {
            var ifexists = _int1.GetCartItemById(value.CartId).Where(c => c.ProductId == value.ProductId);
            Console.WriteLine("If exists: ", ifexists);
            var cartItem = ifexists;
            if (ifexists.Count() == 0)
            {
                cartItem = null;
            }

            if (cartItem != null)
            {
                cartItem.First().Quantity += value.Quantity;
                //if ( (cartItem.First().Quantity + value.Quantity ) > cartItem.First().Product.Inventory.StockQuantity )
                //{

                //}
                _int1.UpdateCartItem(cartItem.First());
            }
            else
            {
                _int1.AddCartItem(value);
            }
        }

        // PUT api/<CartItemController>/5
        [HttpPut]
        public void Put([FromBody] IEnumerable<CartItem> value)
        {
            foreach (var item in value)
            {
                _int1.UpdateCartItem( item);
            }
        }

        // DELETE api/<CartItemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteCartItem(id);
        }

        [Route("multi/{id}")]
        [HttpDelete]
        public void DeleteMulti(int id)
        {
            _int1.DeleteMultiCartItem(id);
        }
    }
}
