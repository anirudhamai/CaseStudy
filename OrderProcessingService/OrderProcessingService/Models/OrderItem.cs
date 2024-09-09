﻿using System;
using System.Collections.Generic;

namespace OrderProcessingService.Models;

public partial class OrderItem
{
    public int OrderItemId { get; set; }

    public int OrderId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public virtual IActionResultr? Order { get; set; } = null!;

    public virtual Product? Product { get; set; } = null!;
}
