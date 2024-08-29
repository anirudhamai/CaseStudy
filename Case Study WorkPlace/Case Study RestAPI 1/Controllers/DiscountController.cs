using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountController : ControllerBase
    {
        private readonly IDiscount _int1;
        public DiscountController(IDiscount icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<DiscountController>
        [HttpGet]
        public IEnumerable<Discount> Get()
        {
            return _int1.GetDiscount();
        }

        // GET api/<DiscountController>/5
        [HttpGet("{id}")]
        public Discount Get(int id)
        {
            return _int1.GetDiscountById(id);
        }

        // POST api/<DiscountController>
        [HttpPost]
        public void Post([FromBody] Discount value)
        {
            _int1.AddDiscount(value);
        }

        // PUT api/<DiscountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Discount value)
        {
            _int1.UpdateDiscount(id, value);
        }

        // DELETE api/<DiscountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteDiscount(id);
        }
    }
}
