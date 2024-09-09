using System;
using System.Collections.Generic;

namespace OrderProcessingService.Models;
using System.Text.Json.Serialization;

public partial class IActionResultr
{
    public int OrderId { get; set; }

    public int UserId { get; set; }

    public DateTime OrderDate { get; set; }

    public string Status { get; set; } 

    public decimal TotalAmount { get; set; }

    
    public virtual ICollection<OrderItem>? OrderItems { get; set; } = new List<OrderItem>();
    [JsonIgnore]
    public virtual ICollection<Payment>? Payments { get; set; } = new List<Payment>();
    [JsonIgnore]
    public virtual ICollection<Shipment>? Shipments { get; set; } = new List<Shipment>();
    [JsonIgnore]
    public virtual Customer? User { get; set; } = null!;
}
