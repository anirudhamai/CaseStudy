using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public interface IPaymentService
    {
        Task<bool> ProcessPaymentAsync(Payment payment);
        Task<Payment?> GetPaymentDetailsAsync(int paymentId);
    }
}
