using OrderProcessingService.Models;

namespace OrderProcessingService.Services
{
    public interface IShipmentService
    {
        Task<bool> InitiateShipmentAsync(int orderId, Shipment shipment);
        Task<Shipment?> GetShipmentDetailsAsync(int shipmentId);
    }
}
