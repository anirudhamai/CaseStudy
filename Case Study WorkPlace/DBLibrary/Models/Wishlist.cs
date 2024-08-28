using System;
using System.Collections.Generic;

namespace DBLibrary.Models;

public partial class Wishlist
{
    public int WishlistId { get; set; }

    public int UserId { get; set; }

    public virtual Customer? User { get; set; }

    public virtual ICollection<WishlistItem>? WishlistItems { get; set; } = new List<WishlistItem>();
}
