using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPayment _int1;
        public PaymentController(IPayment icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<PaymentController>
        [HttpGet]
        public IEnumerable<Payment> Get()
        {
            return _int1.GetPayment();
        }

        // GET api/<PaymentController>/5
        [HttpGet("{id}")]
        public Payment Get(int id)
        {
            return _int1.GetPaymentById(id);
        }

        // POST api/<PaymentController>
        [HttpPost]
        public void Post([FromBody] Payment value)
        {
            _int1.AddPayment(value);
        }

        // PUT api/<PaymentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Payment value)
        {
            _int1.UpdatePayment(id, value);
        }

        // DELETE api/<PaymentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeletePayment(id);
        }
    }
}
