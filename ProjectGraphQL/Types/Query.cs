using HotChocolate;
using HotChocolate.Data;
using Microsoft.EntityFrameworkCore;
using ProjectGraphQL.Models;
using System.Linq;

namespace ProjectGraphQL.Queries
{
    public class Query
    {
        /*ScopedService create one object per request and same is used or shared among all the methods
         */
        // Query for Products
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Product> GetProducts([ScopedService] ShopeaseContext context)
        {
            return context.Products
                .Include(p => p.CartItems)
                .Include(p => p.Category)
                .Include(p => p.Discounts)
                .Include(p => p.Inventory)
                .Include(p => p.OrderItems)
                .Include(p => p.Reviews)
                .Include(p => p.WishlistItems);
        }

        // Query for Categories
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Category> GetCategories([ScopedService] ShopeaseContext context)
        {
            return context.Categories
                .Include(c => c.Products);
        }

        // Query for Customers
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Customer> GetCustomers([ScopedService] ShopeaseContext context)
        {
            return context.Customers
                .Include(c => c.Addresses)
                .Include(c => c.Carts)
                .Include(c => c.Orders)
                .Include(c => c.Reviews)
                .Include(c => c.Wishlists);
        }

        // Query for Orders
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Order> GetOrders([ScopedService] ShopeaseContext context)
        {
            return context.Orders
                .Include(o => o.OrderItems)
                .Include(o => o.Payments)
                .Include(o => o.Shipments);
        }

        // Query for Reviews
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Review> GetReviews([ScopedService] ShopeaseContext context)
        {
            return context.Reviews
                .Include(r => r.Product)
                .Include(r => r.User);
        }

        // Query for Carts
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Cart> GetCarts([ScopedService] ShopeaseContext context)
        {
            return context.Carts
                .Include(c => c.CartItems);
        }

        // Query for CartItems
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<CartItem> GetCartItems([ScopedService] ShopeaseContext context)
        {
            return context.CartItems
                .Include(ci => ci.Cart)
                .Include(ci => ci.Product);
        }

        // Query for Discounts
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Discount> GetDiscounts([ScopedService] ShopeaseContext context)
        {
            return context.Discounts
                .Include(d => d.Product);
        }

        // Query for Inventories
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Inventory> GetInventories([ScopedService] ShopeaseContext context)
        {
            return context.Inventories
                .Include(i => i.Product);
        }

        // Query for Shipments
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Shipment> GetShipments([ScopedService] ShopeaseContext context)
        {
            return context.Shipments
                .Include(s => s.Order)
                .Include(s => s.Address);
        }

        // Query for Wishlists
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<Wishlist> GetWishlists([ScopedService] ShopeaseContext context)
        {
            return context.Wishlists
                .Include(w => w.WishlistItems);
        }

        // Query for WishlistItems
        [UseDbContext(typeof(ShopeaseContext))]
        public IQueryable<WishlistItem> GetWishlistItems([ScopedService] ShopeaseContext context)
        {
            return context.WishlistItems
                .Include(wi => wi.Wishlist)
                .Include(wi => wi.Product);
        }
    }
}
