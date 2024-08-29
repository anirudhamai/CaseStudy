using System;
using System.Collections.Generic;

namespace DBLibrary.Models;

public partial class CartItem
{
    public int CartItemId { get; set; }

    public int CartId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }

    public virtual Cart? Carts { get; set; } = null!;

    public virtual Product? Product { get; set; } = null!;
}
