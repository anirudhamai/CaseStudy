using System;
using System.Collections.Generic;

namespace OrderProcessingService.Models;

public partial class Notification
{
    public int Id { get; set; }

    public string UserId { get; set; } = null!;

    public string Type { get; set; } = null!;

    public string Content { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public bool IsSent { get; set; }
}
