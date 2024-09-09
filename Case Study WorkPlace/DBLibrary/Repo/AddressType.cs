using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class AddressType: IAddress
    {
        private readonly ShopeaseContext _context;
        public AddressType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Address> GetAddress()
        {
            return _context.Addresses
            .Include(a => a.Shipments)
            .Include(a => a.User)
            .ToList(); 
        }

        public IEnumerable<Address> GetAddressById(int id)
        {
            return _context.Addresses
            .Include(a => a.Shipments)
            .Include(a => a.User)
            .Where(a => a.UserId == id)
            .ToList();
        }
        public void AddAddress(Address a)
        {
            _context.Addresses.Add(a);
            _context.SaveChanges();
        }
        public void DeleteAddress(int id)
        {
            Address a = _context.Addresses.Find(id);
            _context.Addresses.Remove(a);
            _context.SaveChanges();
        }
        public void UpdateAddress(int id, Address a)
        {
            _context.Addresses.Update(a);
            _context.SaveChanges();
        }

    }
}
