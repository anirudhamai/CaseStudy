using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class ShipmentType: IShipment
    {
        private readonly ShopeaseContext _context;
        public ShipmentType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Shipment> GetShipment()
        {
            return _context.Shipments
                .Include(s => s.Address)
                .Include(s => s.Order)
                .ToList();
        }
        public Shipment GetShipmentById(int id)
        {
            return _context.Shipments
                .Include(s => s.Address)
                .Include(s => s.Order)
                .ToList().Find(s => s.ShipmentId == id);
        }
        public void AddShipment(Shipment w)
        {
            _context.Shipments.Add(w);
            _context.SaveChanges();
        }
        public void DeleteShipment(int id)
        {
            Shipment ca = _context.Shipments.Find(id);
            _context.Shipments.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateShipment(int id, Shipment w)
        {
            _context.Shipments.Update(w);
            _context.SaveChanges();
        }
    }
}
