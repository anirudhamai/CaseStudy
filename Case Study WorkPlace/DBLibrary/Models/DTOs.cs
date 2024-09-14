using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Models
{
    
    public class OrderItemDTO
    {
        public int OrderItemId { get; set; }

        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public string Name { get; set; }

    }

    public class OrderDTO
    {
        public int OrderId { get; set; }

        public int UserId { get; set; }

        public DateOnly OrderDate { get; set; }

        public string? Status { get; set; } = null!;

        public decimal TotalAmount { get; set; }

        public virtual ICollection<Payment>? Payments { get; set; } = new List<Payment>();

        public virtual ICollection<Shipment>? Shipments { get; set; } = new List<Shipment>();

        public IEnumerable<OrderItemDTO>? OrderItems { get; set; }

    }
    
    public class CategoryDTO
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; } = null!;
    }
    public class WLProductDTO
    {
        public int ProductId { get; set; }

        public string Name { get; set; } = null!;

        public int CategoryId { get; set; }

        public decimal Price { get; set; }
        public byte[]? Image { get; set; }

        public CategoryDTO Category { get; set; }
        public virtual ICollection<Review>? Reviews { get; set; } = new List<Review>();

    }

    public class WishlistItemDTO
    {
        public int WishlistItemId { get; set; }

        public int WishlistId { get; set; }

        public int ProductId { get; set; }

        public WLProductDTO Product { get; set; }
    }
}
