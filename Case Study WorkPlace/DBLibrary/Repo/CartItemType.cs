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
                .Include(c => c.Product.Inventory)
                .ToList();
        }

        public IEnumerable<CartItem> GetCartItemById(int id)
        {
            return _context.CartItems
                .Include(c => c.Product)
                .Include(c => c.Product.Inventory)
                .Where(c => c.CartId == id)
                .ToList();
        }

        public void AddCartItem(CartItem c)
        {
            _context.CartItems.Add(c);
            var inventoryObj = _context.Inventories.Where(i => i.ProductId == c.ProductId).First();
            inventoryObj.StockQuantity = inventoryObj.StockQuantity - c.Quantity;
            _context.Inventories.Update(inventoryObj);
            _context.SaveChanges();
        }
        public void DeleteCartItem(int id)
        {
            CartItem c = _context.CartItems.Find(id);
            _context.CartItems.Remove(c);
            _context.SaveChanges();
        }

        public void DeleteMultiCartItem(int id)
        {
            IEnumerable<CartItem> c = _context.CartItems.Where( c => c.CartId == id).ToList();
            foreach (CartItem item in c)
            {
                _context.CartItems.Remove(item);
                _context.SaveChanges();
            }
            
        }

        public void UpdateCartItem(CartItem c)
        {
            _context.CartItems.Update(c);
            //var inventoryObj = _context.Inventories.Where(i => i.ProductId == c.ProductId).First();
            //inventoryObj.StockQuantity = inventoryObj.StockQuantity - c.Quantity;
            //_context.Inventories.Update(inventoryObj);
            _context.SaveChanges();
        }

    }
}
