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
    public class ReviewController : ControllerBase
    {
        private readonly IReview _int1;
        public ReviewController(IReview icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<ReviewController>
        [HttpGet]
        public IEnumerable<Review> Get()
        {
            return _int1.GetReview();
        }

        // GET api/<ReviewController>/5
        [HttpGet("{id}")]
        public Review Get(int id)
        {
            return _int1.GetReviewById(id);
        }

        // POST api/<ReviewController>
        [HttpPost]
        public Review Post([FromBody] Review value)
        {
            return _int1.AddReview(value);
        }

        // PUT api/<ReviewController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Review value)
        {
            _int1.UpdateReview(id, value);
        }

        // DELETE api/<ReviewController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteReview(id);
        }
    }
}
