using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IWishlist
    {
        public IEnumerable<Wishlist> GetWishlist();
        public Wishlist GetWishlistById(int id);
        public void AddWishlist(Wishlist c);
        public void UpdateWishlist(int id, Wishlist c);
        public void DeleteWishlist(int id);
    }
}
