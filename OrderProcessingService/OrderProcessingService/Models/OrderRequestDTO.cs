namespace OrderProcessingService.Models
{
    public class OrderRequestDTO
    {
        public int UserId { get; set; }
        public PaymentDTO Payment { get; set; }
        public ShipmentDTO Shipment { get; set; }
        public List<OrderItemDTO>? OrderItems { get; set; }
    }
}
