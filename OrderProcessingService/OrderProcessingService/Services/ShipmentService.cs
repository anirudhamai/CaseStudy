using Microsoft.EntityFrameworkCore;
using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public class ShipmentService : IShipmentService

    {
        private readonly ShopeaseContext _context;

        public ShipmentService(ShopeaseContext context)
        {
            _context = context;
        }
       

        public async  Task<bool> InitiateShipmentAsync(int orderId, Shipment shipment)
        {
            var order = await _context.Orders.Include(o => o.Shipments)
                                             .FirstOrDefaultAsync(o => o.OrderId == orderId);
            if (order == null)
            {
                throw new InvalidOperationException("Order not found.");
            }

            shipment.OrderId = orderId;
            _context.Shipments.Add(shipment);

            await _context.SaveChangesAsync();
            return true;
        }
        public async  Task<Shipment?> GetShipmentDetailsAsync(int shipmentId)
        {
            return await _context.Shipments.Include(s => s.Order)
                                          .FirstOrDefaultAsync(s => s.ShipmentId == shipmentId);
        }
    }
    }

