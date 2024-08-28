using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class CustomerType: ICustomer
    {
        private readonly ShopeaseContext _context;
        public CustomerType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Customer> GetCustomer()
        {
            return _context.Customers
                .Include(c => c.Wishlists)
                .Include(c => c.Addresses)
                .Include(c => c.Carts)
                .Include(c => c.Orders)
                .Include(c => c.Reviews)
                .ToList(); 
        }
        public Customer GetCustomerById(int id)
        {
            return _context.Customers
                .Include(c => c.Wishlists)
                .Include(c => c.Addresses)
                .Include(c => c.Carts)
                .Include(c => c.Orders)
                .Include(c => c.Reviews)
                .ToList()
                .Find(c => c.UserId == id);
        }

        public void AddCustomer(Customer c)
        {
            _context.Customers.Add(c);
            _context.SaveChanges();
        }

        public void DeleteCustomer(int id)
        {
            Customer c = _context.Customers.Find(id);
            _context.Customers.Remove(c);
            _context.SaveChanges();
        }

        public void UpdateCustomer(int id, Customer c)
        {
            _context.Customers.Update(c);
            _context.SaveChanges();
        }

    }
}
