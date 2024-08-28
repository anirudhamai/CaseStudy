using System;
using System.Collections.Generic;

namespace RevServicemicro.Models;

public partial class Discount
{
    public int DiscountId { get; set; }

    public int ProductId { get; set; }

    public decimal DiscountPercentage { get; set; }

    public virtual Product Product { get; set; } = null!;
}
