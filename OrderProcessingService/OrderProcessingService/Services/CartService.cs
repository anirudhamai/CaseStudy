using Microsoft.EntityFrameworkCore;
using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public class CartService : ICartService
    {
        private readonly ShopeaseContext _context;

        public CartService(ShopeaseContext context)
        {
            _context = context;
        }

        // Get the cart for a specific user
        public async Task<Cart?> GetCartByUserIdAsync(int userId)
        {
            // Fetch cart by userId
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);

            // Return the result, possibly null
            return cart;
        }


        // Add an item to the cart
        public async Task AddItemToCartAsync(int userId, CartItem cartItem)
        {
            // Fetch the cart by user ID
            var cart = await GetCartByUserIdAsync(userId);

            // Check if the cart exists
            if (cart == null)
            {
                throw new InvalidOperationException("Cart not found.");
            }

            // Add the item to the cart
            cart.CartItems.Add(cartItem);
            await _context.SaveChangesAsync();
        }


        // Remove an item from the cart
        public async Task RemoveItemFromCartAsync(int userId, int cartItemId)
        {
            // Fetch the cart by user ID
            var cart = await GetCartByUserIdAsync(userId);

            // Check if the cart exists
            if (cart == null)
            {
                throw new InvalidOperationException("Cart not found.");
            }

            // Find the item to remove from the cart
            var itemToRemove = cart.CartItems.FirstOrDefault(i => i.CartItemId == cartItemId);

            // Remove the item if it exists
            if (itemToRemove != null)
            {
                cart.CartItems.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }

        // Clear all items from the cart
        public async Task ClearCartAsync(int cartId)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.CartId == cartId);
            if (cart != null)
            {
                cart.CartItems.Clear();
                await _context.SaveChangesAsync();
            }
        }

        // Get the total cost of all items in the cart
        public async Task<decimal> GetCartTotalAsync(int cartId)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .ThenInclude(ci => ci.Product)
                                           .FirstOrDefaultAsync(c => c.CartId == cartId);
            return cart.CartItems.Sum(ci => ci.Product.Price * ci.Quantity); // Assuming Product has a Price property
        }
    }
}
