namespace OrderProcessingService.Models
{
    public class ShipmentDTO
    {
        public int AddressId { get; set; }
        public string ?Carrier { get; set; }
        public DateOnly? ShipmentDate { get; set; }
        public string ?Status { get; set; }
    }
}
