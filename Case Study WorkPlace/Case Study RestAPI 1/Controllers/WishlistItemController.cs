using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
<<<<<<< Updated upstream
=======
    //[Authorize]
>>>>>>> Stashed changes
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistItemController : ControllerBase
    {
        private readonly IWishlistItem _int1;
        public WishlistItemController(IWishlistItem icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<WishlistItemController>
        [HttpGet]
        public IEnumerable<WishlistItem> Get()
        {
            return _int1.GetWishlistItem();
        }

        // GET api/<WishlistItemController>/5
        [HttpGet("{id}")]
        public WishlistItem Get(int id)
        {
            return _int1.GetWishlistItemById(id);
        }

        // POST api/<WishlistItemController>
        [HttpPost]
        public void Post([FromBody] WishlistItem value)
        {
            _int1.AddWishlistItem(value);
        }

        // PUT api/<WishlistItemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] WishlistItem value)
        {
            _int1.UpdateWishlistItem(id, value);
        }

        // DELETE api/<WishlistItemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteWishlistItem(id);
        }
    }
}
