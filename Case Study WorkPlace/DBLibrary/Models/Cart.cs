using System;
using System.Collections.Generic;

namespace DBLibrary.Models;

public partial class Cart
{
    public int CartId { get; set; }

    public int UserId { get; set; }

    public DateOnly? CreatedAt { get; set; }

    public virtual ICollection<CartItem>? CartItems { get; set; } = new List<CartItem>();

    public virtual Customer? User { get; set; } = null!;
}
