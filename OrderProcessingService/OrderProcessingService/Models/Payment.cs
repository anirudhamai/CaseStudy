using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace OrderProcessingService.Models;

public partial class Payment
{
    [JsonIgnore]
    public int PaymentId { get; set; }
    [JsonIgnore]
    public int OrderId { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public decimal Amount { get; set; }
   
    [JsonIgnore]
    public virtual IActionResultr Order { get; set; } = null!;
}
