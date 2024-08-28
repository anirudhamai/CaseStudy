using System;
using System.Collections.Generic;

namespace RevServicemicro.Models;

public partial class Wishlist
{
    public int WishlistId { get; set; }

    public int UserId { get; set; }

    public virtual Customer User { get; set; } = null!;

    public virtual ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
}
