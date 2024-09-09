using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IAddress
    {
        public IEnumerable<Address> GetAddress();
        public IEnumerable<Address> GetAddressById(int id);
        public void AddAddress(Address c);
        public void UpdateAddress(int id, Address c);
        public void DeleteAddress(int id);
    }
}
