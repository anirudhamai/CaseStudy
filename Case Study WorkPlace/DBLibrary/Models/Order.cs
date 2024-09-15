using System;
using System.Collections.Generic;

namespace DBLibrary.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int UserId { get; set; }

    public DateOnly OrderDate { get; set; }

    public string? Status { get; set; } = null!;

    public decimal TotalAmount { get; set; }
    public byte[]? Pdf {  get; set; }

    public virtual ICollection<OrderItem>? OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Payment>? Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Shipment>? Shipments { get; set; } = new List<Shipment>();

    public virtual Customer? User { get; set; } = null!;
}
