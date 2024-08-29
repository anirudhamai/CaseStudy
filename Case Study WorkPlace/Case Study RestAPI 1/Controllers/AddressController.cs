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
    public class AddressController : ControllerBase
    {
        private readonly IAddress _int1;

        public AddressController(IAddress icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<AddressController>
        [HttpGet]
        public IEnumerable<Address> Get()
        {
            return _int1.GetAddress();
        }

        // GET api/<AddressController>/5
        [HttpGet("{id}")]
        public Address Get(int id)
        {
            return _int1.GetAddressById(id);
        }

        // POST api/<AddressController>
        [HttpPost]
        public void Post([FromBody] Address value)
        {
            _int1.AddAddress(value);
        }

        // PUT api/<AddressController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Address value)
        {
            _int1.UpdateAddress(id, value);
        }

        // DELETE api/<AddressController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteAddress(id);
        }
    }
}
