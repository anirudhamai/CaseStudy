using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class WishlistItemType: IWishlistItem
    {
        private readonly ShopeaseContext _context;
        public WishlistItemType(ShopeaseContext context)
        {
            _context = context;
        }

        public IEnumerable<WishlistItem> GetWishlistItem()
        {
            return _context.WishlistItems
                .Include(w => w.Product)
                .ThenInclude(w => w.Category)
                .Include(w => w.Product.Reviews)
                //                .Include(w => w.Wishlist)
                .ToList();
        }

        public IEnumerable<WishlistItemDTO> GetWishlistItemById(int id)
        {
            return _context.WishlistItems
                .Select(w => new WishlistItemDTO
                {
                    WishlistItemId = w.WishlistItemId,
                    WishlistId = w.WishlistId,
                    ProductId = w.ProductId,
                    Product = new WLProductDTO
                    {
                        ProductId = w.ProductId,
                        Name = w.Product.Name,
                        CategoryId = w.Product.CategoryId,
                        Price = w.Product.Price,
                        Image = w.Product.Image,
                        Reviews = w.Product.Reviews,
                        Category = new CategoryDTO
                        {
                            CategoryId = w.Product.CategoryId,
                            CategoryName = w.Product.Category.CategoryName
                        }
                        
                    }
                })
                .Where(c => c.WishlistId == id)
                .ToList();
        }

        public WishlistItem GetWishlistItemByCompositeId(int pid, int wid)
        {
            return _context.WishlistItems
                .ToList()
                .Find(c => c.ProductId == pid && c.WishlistId == wid);
        }

        public void AddWishlistItem(WishlistItem w)
        {
            _context.WishlistItems.Add(w);
            _context.SaveChanges();
        }
        public void DeleteWishlistItem(int id)
        {
            WishlistItem ca = _context.WishlistItems.ToList().Find(w => w.ProductId == id);
            _context.WishlistItems.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateWishlistItem(int id, WishlistItem w)
        {
            _context.WishlistItems.Update(w);
            _context.SaveChanges();
        }

    }
}
