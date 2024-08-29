using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IShipment
    {
        public IEnumerable<Shipment> GetShipment();
        public Shipment GetShipmentById(int id);
        public void AddShipment(Shipment c);
        public void UpdateShipment(int id, Shipment c);
        public void DeleteShipment(int id);
    }
}
