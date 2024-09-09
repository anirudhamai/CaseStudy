using DBLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class CartType: ICart
    {
        private readonly ShopeaseContext _context;
        public CartType(ShopeaseContext context)
        {
            _context = context;
        }


        public IEnumerable<Cart> GetCart()
        {
            return _context.Carts
                .Include(c => c.CartItems)
                .Include(c => c.User)
                .ToList();
        }

        public Cart GetCartById(int id)
        {
            return _context.Carts
                .Include(c => c.CartItems)
                .Include(c => c.User)
                .ToList()
                .Find(c => c.CartId == id);
        }

        public Cart GetCartByUserId(int id)
        {
            return _context.Carts
                .Include(c => c.CartItems)
                .Include(c => c.User)
                .ToList()
                .Find(c => c.UserId == id);
        }

        public Cart AddCart(Cart cart)
        {
            _context.Carts.Add(cart);
            _context.SaveChanges();
            return cart;
        }
        public void DeleteCart(int id)
        {
            Cart ca = _context.Carts.Find(id);
            _context.Carts.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateCart(int id, Cart c)
        {
            _context.Carts.Update(c);
            _context.SaveChanges();
        }
    }
}
