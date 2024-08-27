using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IWishlistItem
    {
        public IEnumerable<WishlistItem> GetWishlistItem();
        public WishlistItem GetWishlistItemById(int id);
        public void AddWishlistItem(WishlistItem c);
        public void UpdateWishlistItem(int id, WishlistItem c);
        public void DeleteWishlistItem(int id);
    }
}
