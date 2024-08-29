using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface ICart
    {
        public IEnumerable<Cart> GetCart();
        public Cart GetCartById(int id);
        public void AddCart(Cart c);
        public void UpdateCart(int id, Cart c);
        public void DeleteCart(int id);
    }
}
