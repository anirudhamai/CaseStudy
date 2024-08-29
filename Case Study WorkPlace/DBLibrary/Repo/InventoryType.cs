using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{

    public class InventoryType: IInventory
    {
        private readonly ShopeaseContext _context;
        public InventoryType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Inventory> GetInventory()
        {
            return _context.Inventories.Include( i => i.Product).ToList();
        }
        public Inventory GetInventoryById(int id)
        {
            return _context.Inventories.Include(i => i.Product).ToList().Find(i => i.ProductId ==id);
        }
        public void AddInventory(Inventory c)
        {
            _context.Inventories.Add(c);
            _context.SaveChanges();
        }
        public void DeleteInventory(int id)
        {
            Inventory ca = _context.Inventories.Find(id);
            _context.Inventories.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateInventory(int id, Inventory c)
        {
            _context.Inventories.Update(c);
            _context.SaveChanges();
        }
    }
}
