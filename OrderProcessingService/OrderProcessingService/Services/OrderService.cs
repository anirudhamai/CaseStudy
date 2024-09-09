using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.EntityFrameworkCore;
using OrderProcessingService.Models;
using System;

namespace OrderProcessingService.Services
{
    public class OrderService : IOrderService
    {
        private readonly ShopeaseContext _context;

        public OrderService(ShopeaseContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<IActionResultr>> GetOrdersAsync()
        {
            return await _context.Orders
                .Include(o => o.OrderItems)
                .Include(o => o.Payments)
                .Include(o => o.Shipments)
                .ToListAsync();
        }

        public async Task<IEnumerable<IActionResultr>> GetOrdersByUserIdAsync(int userId)
        {
            return await _context.Orders
          .Include(o => o.OrderItems)
              .ThenInclude(oi => oi.Product)
                  .ThenInclude(p => p.Inventory)  // Include the related Category entity
              
          .Include(o => o.Payments)
          .Include(o => o.Shipments)
          .Where(o => o.UserId == userId)
          .ToListAsync();
        }

        public async Task<int> CreateOrderAsync(OrderRequestDTO orderRequest)
        {
            // Create a new Order entity
            var order = new IActionResultr
            {
                UserId = orderRequest.UserId,
                OrderDate = DateTime.Now,
                Status = "Pending",  // Default status
                TotalAmount = orderRequest.Payment?.Amount ?? 0,  // Assuming this is the total amount
            };

            // Add the new order to the database
            _context.Orders.Add(order);
            await _context.SaveChangesAsync(); // Save to get the OrderId

            // Create a Payment entity based on the PaymentDTO
            var payment = new Payment
            {
                OrderId = order.OrderId, // Link payment to the created order
                PaymentMethod = orderRequest.Payment?.PaymentMethod ?? "DefaultMethod",
                Amount = orderRequest.Payment?.Amount ?? 0,
            };

            // Add the payment to the database
            _context.Payments.Add(payment);

            // Create a Shipment entity based on the ShipmentDTO
            var shipment = new Shipment
            {
                OrderId = order.OrderId, // Link shipment to the created order
                AddressId = orderRequest.Shipment?.AddressId ?? 0,
                Carrier = orderRequest.Shipment?.Carrier ?? "DefaultCarrier",
                ShipmentDate = orderRequest.Shipment?.ShipmentDate
                              ?? DateOnly.FromDateTime(DateTime.Now),
                Status = orderRequest.Shipment?.Status ?? "Pending",
            };


            // Add the shipment to the database
            _context.Shipments.Add(shipment);

            // Save all changes
            await _context.SaveChangesAsync();

            // Return only the orderId
            return order.OrderId;
        }




        public async Task<bool> DeleteOrderAsync(int orderId)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
            {
                return false;
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IActionResultr> GetOrderByIdAsync(int orderId)
        {
            return await _context.Orders
               .Include(o => o.OrderItems)
               .Include(o => o.Payments)
               .Include(o => o.Shipments)
               .FirstOrDefaultAsync(o => o.OrderId == orderId);
        }

        

        

        

       public async Task<bool> UpdateOrderAsync(int orderId, OrderUpdateDTO orderUpdate)
        {
            var existingOrder = await _context.Orders.FindAsync(orderId);
            if (existingOrder == null)
            {
                return false;
            }

            // Update the order fields based on the OrderUpdateDTO
            existingOrder.Status = orderUpdate.Status;
            existingOrder.TotalAmount = orderUpdate.TotalAmount;

            // Update the order items if provided
            if (orderUpdate.OrderItems != null)
            {
                // Remove existing order items
                _context.OrderItems.RemoveRange(existingOrder.OrderItems);

                // Add the updated order items
                existingOrder.OrderItems = orderUpdate.OrderItems
                    .Select(oi => new OrderItem
                    {
                        ProductId = oi.ProductId,
                        Quantity = oi.Quantity,
                        UnitPrice = oi.UnitPrice
                    }).ToList();
            }

            _context.Orders.Update(existingOrder);
            await _context.SaveChangesAsync();
            return true;
        }

       
    }
    }
    


       
