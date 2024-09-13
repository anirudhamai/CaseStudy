using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Models
{
    public class ProductDTO
    {
        public int ProductId { get; set; }

        public string Name { get; set; } = null!;

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }    

        public decimal Price { get; set; }
        public byte[]? Image { get; set; }

        public virtual ICollection<CartItem>? CartItems { get; set; } = new List<CartItem>();

        public virtual Category? Category { get; set; } = null!;

        public virtual ICollection<Discount>? Discounts { get; set; } = new List<Discount>();

        public virtual Inventory? Inventory { get; set; }

        public virtual ICollection<OrderItem>? OrderItems { get; set; } = new List<OrderItem>();

        public virtual ICollection<Review>? Reviews { get; set; } = new List<Review>();

        public virtual ICollection<WishlistItem>? WishlistItems { get; set; } = new List<WishlistItem>();
    }
}
