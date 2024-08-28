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
                .Include(w => w.Wishlist)
                .ToList();
        }

        public WishlistItem GetWishlistItemById(int id)
        {
            return _context.WishlistItems
                .Include(w => w.Product)
                .ToList()
                .Find(c => c.WishlistItemId == id);
        }
        public void AddWishlistItem(WishlistItem w)
        {
            _context.WishlistItems.Add(w);
            _context.SaveChanges();
        }
        public void DeleteWishlistItem(int id)
        {
            WishlistItem ca = _context.WishlistItems.Find(id);
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
