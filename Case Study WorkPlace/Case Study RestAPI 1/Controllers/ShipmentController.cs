﻿using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Mvc;


namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipmentController : ControllerBase
    {
        private readonly IShipment _int1;
        public ShipmentController(IShipment icontext)
        {
            _int1 = icontext;
        }
        // GET: api/<ShipmentController>
        [HttpGet]
        public IEnumerable<Shipment> Get()
        {
            return _int1.GetShipment();
        }

        // GET api/<ShipmentController>/5
        [HttpGet("{id}")]
        public Shipment Get(int id)
        {
            return _int1.GetShipmentById(id);
        }

        // POST api/<ShipmentController>
        [HttpPost]
        public void Post([FromBody] Shipment value)
        {
            _int1.AddShipment(value);
        }

        // PUT api/<ShipmentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Shipment value)
        {
            _int1.UpdateShipment(id, value);
        }

        // DELETE api/<ShipmentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteShipment(id);
        }
    }
}
