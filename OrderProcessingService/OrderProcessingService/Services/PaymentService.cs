using Microsoft.EntityFrameworkCore;
using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly ShopeaseContext _context;

        public PaymentService(ShopeaseContext context)
        {
            _context = context;
        }

        public async Task<Payment?> GetPaymentDetailsAsync(int paymentId)
        {
            return await _context.Payments.Include(p => p.Order)
                                          .FirstOrDefaultAsync(p => p.PaymentId == paymentId);
        }

        public async  Task<bool> ProcessPaymentAsync(Payment payment)
        {
            var order = await _context.Orders.FindAsync(payment.OrderId);
            if (order == null)
            {
                throw new InvalidOperationException("Order not found.");
            }

            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();
            return true;
        }

       
    }
    }
