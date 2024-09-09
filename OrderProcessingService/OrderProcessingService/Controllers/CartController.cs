using Microsoft.AspNetCore.Mvc;
using OrderProcessingService.Models;
using OrderProcessingService.Services;

namespace OrderProcessingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<Cart>> GetCart(int userId)
        {
            var cart = await _cartService.GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                return NotFound();
            }
            return Ok(cart);
        }

        [HttpPost("{userId}/AddItem")]
        public async Task<IActionResult> AddItemToCart(int userId, CartItem item)
        {
            await _cartService.AddItemToCartAsync(userId, item);
            return Ok();
        }

        [HttpDelete("{userId}/RemoveItem/{itemId}")]
        public async Task<IActionResult> RemoveItemFromCart(int userId, int itemId)
        {
            await _cartService.RemoveItemFromCartAsync(userId, itemId);
            return Ok();
        }
    }
}
