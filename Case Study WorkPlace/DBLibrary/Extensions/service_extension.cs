using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Extensions
{
    public static class service_extension
    {
        public static IServiceCollection AddDBLibrary(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<ShopeaseContext>(options =>
                options.UseSqlServer(connectionString));
            // Register repositories
            services.AddScoped<IAddress, AddressType>();
            services.AddScoped<ICart, CartType>();
            services.AddScoped<ICartItem, CartItemType>();
            services.AddScoped<ICategory, CategoryType>();
            services.AddScoped<ICustomer, CustomerType>();
            services.AddScoped<IDiscount, DiscountType>();
            services.AddScoped<IInventory, InventoryType>();
            services.AddScoped<IOrder, OrderType>();
            services.AddScoped<IOrderItem, OrderItemType>();
            services.AddScoped<IPayment, PaymentType>();
            services.AddScoped<IProduct, ProductType>();
            services.AddScoped<IReview, ReviewType>();
            services.AddScoped<IShipment, ShipmentType>();
            services.AddScoped<IWishlist, WishlistType>();
            services.AddScoped<IWishlistItem, WishlistItemType>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IPdfService, PdfService>();
            return services;
        }
    }
}
