using System;
using System.Collections.Generic;

namespace ProjectGraphQL.Models;

public partial class Shipment
{
    public int ShipmentId { get; set; }

    public int? OrderId { get; set; }

    public int? AddressId { get; set; }

    public string? Carrier { get; set; }

    public DateOnly? ShipmentDate { get; set; }

    public string? Status { get; set; }

    public virtual Address? Address { get; set; }

    public virtual Order? Order { get; set; }
}
