using Microsoft.AspNetCore.Mvc;
using OrderProcessingService.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderProcessingService.Services
{
    public interface IOrderService
    {
        Task<IEnumerable<IActionResultr>> GetOrdersAsync();
        Task<IEnumerable<IActionResultr>> GetOrdersByUserIdAsync(int userId);
        Task<int> CreateOrderAsync(OrderRequestDTO orderRequest);
        Task<IActionResultr> GetOrderByIdAsync(int orderId);
        Task <bool>UpdateOrderAsync(int orderId, OrderUpdateDTO orderUpdate);
        Task<bool> DeleteOrderAsync(int orderId);
    }
}
