using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IDiscount
    {
        public IEnumerable<Discount> GetDiscount();
        public Discount GetDiscountById(int id);
        public void AddDiscount(Discount c);
        public void UpdateDiscount(int id, Discount c);
        public void DeleteDiscount(int id);
    }
}
