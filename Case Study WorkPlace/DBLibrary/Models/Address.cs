using System;
using System.Collections.Generic;

namespace DBLibrary.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public int UserId { get; set; }

    public string AddressLine1 { get; set; } = null!;

    public string? AddressLine2 { get; set; }

    public string City { get; set; } = null!;

    public string? Region { get; set; }

    public string? Country { get; set; }

    public string? PostalCode { get; set; }

    public virtual ICollection<Shipment> Shipments { get; set; } = new List<Shipment>();

    public virtual Customer User { get; set; } = null!;
}
