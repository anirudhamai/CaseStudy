﻿namespace OrderProcessingService.Models
{
    public class OrderItemDTO
 
   {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}

