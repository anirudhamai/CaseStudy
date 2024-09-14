using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface ICustomer
    {
        public IEnumerable<Customer> GetCustomer();
        public Customer GetCustomerById(int id);
        public int AddCustomer(Customer c);
        public void UpdateCustomer(int id, Customer c);
        public void DeleteCustomer(int id);
    }
}
