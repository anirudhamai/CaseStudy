using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace OrderProcessingService.Models;

public partial class Shipment
{
    public int ShipmentId { get; set; }

    public int? OrderId { get; set; }

    public int? AddressId { get; set; }

    public string? Carrier { get; set; }

    public DateOnly ShipmentDate { get; set; }

    public string? Status { get; set; }
    [JsonIgnore]
    public virtual Address? Address { get; set; }
    [JsonIgnore]
    public virtual IActionResultr? Order { get; set; }
}
