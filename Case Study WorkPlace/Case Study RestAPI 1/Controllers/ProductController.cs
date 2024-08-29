using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _int1;

        public ProductController(IProduct icontext)
        {
           _int1 = icontext;
        }
        // GET: api/<ProductController>
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _int1.GetProduct();
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return _int1.GetProductById(id);
        }

        // POST api/<ProductController>
        [HttpPost]
        public void Post([FromBody] Product value)
        {
            _int1.AddProduct(value);
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Product value)
        {
            _int1.UpdateProduct(id, value);
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteProduct(id);
        }
    }
}
