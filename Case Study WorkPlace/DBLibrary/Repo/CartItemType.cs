using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class CartItemType: ICartItem
    {
        private readonly ShopeaseContext _context;
        public CartItemType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<CartItem> GetCartItem()
        {
            return _context.CartItems
//                .Include(c => c.Carts)
                .Include(c => c.Product)
                .ToList();
        }

        public CartItem GetCartItemById(int id)
        {
            return _context.CartItems
                //                .Include(c => c.Carts)
                .Include(c => c.Product)
                .ToList()
                .Find(c => c.CartItemId == id);
        }

        public void AddCartItem(CartItem c)
        {
            _context.CartItems.Add(c);
            _context.SaveChanges();
        }
        public void DeleteCartItem(int id)
        {
            CartItem c = _context.CartItems.Find(id);
            _context.CartItems.Remove(c);
            _context.SaveChanges();
        }
        public void UpdateCartItem(int id, CartItem c)
        {
            _context.CartItems.Update(c);
            _context.SaveChanges();
        }

    }
}
