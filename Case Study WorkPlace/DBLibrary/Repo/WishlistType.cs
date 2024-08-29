using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class WishlistType: IWishlist
    {
        private readonly ShopeaseContext _context;
        public WishlistType(ShopeaseContext context)
        {
            _context = context;
        }

        public IEnumerable<Wishlist> GetWishlist()
        {
            return _context.Wishlists
                .Include(w => w.User)
                .Include(w => w.WishlistItems)
                .ToList();
        }

        public Wishlist GetWishlistById(int id)
        {
            return _context.Wishlists
                .Include(w => w.User)
                .Include(w => w.WishlistItems)
                .ToList()
                .Find(c => c.WishlistId == id);
        }
        public void AddWishlist(Wishlist w)
        {
            _context.Wishlists.Add(w);
            _context.SaveChanges();
        }
        public void DeleteWishlist(int id)
        {
            Wishlist ca = _context.Wishlists.Find(id);
            _context.Wishlists.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateWishlist(int id, Wishlist w)
        {
            _context.Wishlists.Update(w);
            _context.SaveChanges();
        }


    }
}
