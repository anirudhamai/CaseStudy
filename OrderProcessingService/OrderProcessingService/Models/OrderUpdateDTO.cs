namespace OrderProcessingService.Models
{
    public class OrderUpdateDTO
    {
        public string Status { get; set; } = null!;
        public decimal TotalAmount { get; set; }
        public List<OrderItemDTO>? OrderItems { get; set; }
    }
}
