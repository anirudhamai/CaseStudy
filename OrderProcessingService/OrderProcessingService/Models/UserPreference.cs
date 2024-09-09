using System;
using System.Collections.Generic;

namespace OrderProcessingService.Models;

public partial class UserPreference
{
    public string UserId { get; set; } = null!;

    public bool ReceiveEmail { get; set; }

    public bool ReceiveSms { get; set; }

    public bool ReceiveInApp { get; set; }
}
