﻿namespace OrderProcessingService.Models
{
    public class OrderDTO
    {
        public int UserId { get; set; }
        public List<OrderItemDTO> ?OrderItems { get; set; }
       
    }
}
