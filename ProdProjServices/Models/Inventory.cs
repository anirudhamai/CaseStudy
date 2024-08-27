using System;
using System.Collections.Generic;

namespace ProdProjServices.Models;

public partial class Inventory
{
    public int ProductId { get; set; }

    public int StockQuantity { get; set; }

    public virtual Product Product { get; set; } = null!;
}
