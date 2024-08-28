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
    public class WishlistController : ControllerBase
    {
        private readonly IWishlist _int1;
        public WishlistController(IWishlist icontext)
        {
            _int1 = icontext;
        }

        // GET: api/<WishlistController>
        [HttpGet]
        public IEnumerable<Wishlist> Get()
        {
            return _int1.GetWishlist();
        }

        // GET api/<WishlistController>/5
        [HttpGet("{id}")]
        public Wishlist Get(int id)
        {
            return _int1.GetWishlistById(id);
        }

        // POST api/<WishlistController>
        [HttpPost]
        public void Post([FromBody] Wishlist value)
        {
            _int1.AddWishlist(value);
        }

        // PUT api/<WishlistController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Wishlist value)
        {
            _int1.UpdateWishlist(id, value);
        }

        // DELETE api/<WishlistController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteWishlist(id);
        }
    }
}
