using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public interface ICartService
    {
        Task<Cart> GetCartByUserIdAsync(int userId);
        Task AddItemToCartAsync(int cartId, CartItem cartItem);
        Task RemoveItemFromCartAsync(int cartId, int cartItemId);
        Task ClearCartAsync(int cartId);
        Task<decimal> GetCartTotalAsync(int cartId);
    }
}
