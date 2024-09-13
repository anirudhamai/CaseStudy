using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface ICartItem
    {
        public IEnumerable<CartItem> GetCartItem();
        public IEnumerable<CartItem> GetCartItemById(int id);
        public void AddCartItem(CartItem c);
        public void UpdateCartItem( CartItem c);
        public void DeleteCartItem(int id);
        public void DeleteMultiCartItem(int id);
    }
}
