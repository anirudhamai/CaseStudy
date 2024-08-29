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
    public class InventoryController : ControllerBase
    {
        private readonly IInventory _int1;
        public InventoryController(IInventory icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<InventoryController>
        [HttpGet]
        public IEnumerable<Inventory> Get()
        {
            return _int1.GetInventory();
        }

        // GET api/<InventoryController>/5
        [HttpGet("{id}")]
        public Inventory Get(int id)
        {
            return _int1.GetInventoryById(id);
        }

        // POST api/<InventoryController>
        [HttpPost]
        public void Post([FromBody] Inventory value)
        {
            _int1.AddInventory(value);
        }

        // PUT api/<InventoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Inventory value)
        {
            _int1.UpdateInventory(id, value);
        }

        // DELETE api/<InventoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteInventory(id);
        }
    }
}
