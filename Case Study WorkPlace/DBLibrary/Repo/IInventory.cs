using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IInventory
    {
        public IEnumerable<Inventory> GetInventory();
        public Inventory GetInventoryById(int id);
        public void AddInventory(Inventory c);
        public void UpdateInventory(int id, Inventory c);
        public void DeleteInventory(int id);
    }
}
