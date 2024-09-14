using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Models
{
    public class OrderRequestDTO
    {
        public int UserId { get; set; }
        public int AddressId { get; set; }
        public string? Carrier { get; set; }
        public DateOnly? ShipmentDate { get; set; }
        public string? Status { get; set; }
        public string PaymentMethod { get; set; }
        public decimal Amount { get; set; }
        public IEnumerable<OrderItem> OrderItemlist { get; set; }

    }
}
