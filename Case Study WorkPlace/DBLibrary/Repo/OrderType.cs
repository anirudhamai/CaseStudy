using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class OrderType: IOrder
    {
        private readonly ShopeaseContext _context;
        public OrderType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Order> GetOrder()
        {
            return _context.Orders
                .Include(o => o.Payments)
                .Include(o => o.Shipments)
                .Include(o => o.OrderItems)
                .ToList();
        }
        public IEnumerable<OrderDTO> GetOrderByUserId(int id)
        {
            return _context.Orders
                .Where(o => o.UserId == id)
                .Select(o => new OrderDTO
                {
                    OrderId = o.OrderId,
                    UserId = o.UserId,
                    OrderDate = o.OrderDate,
                    Status = o.Status,
                    TotalAmount = o.TotalAmount,
                    Payments = o.Payments,
                    Shipments = o.Shipments,
                    OrderItems = o.OrderItems.Select( oi => new OrderItemDTO
                    {
                        OrderItemId = oi.OrderId,
                        OrderId = oi.OrderId,
                        ProductId = oi.ProductId,
                        Quantity = oi.Quantity,
                        UnitPrice = oi.UnitPrice,
                        Name = oi.Product.Name
                    })
                })
                .ToList();
        }
        public Order GetOrderById(int id)
        {
            return _context.Orders.Include(p=> p.User).ToList().Find(p => p.OrderId == id);
        }
        public int AddOrder(OrderRequestDTO w)
        {
            var order = new Order
            {
                UserId = w.UserId,
                Status = "Processing",
                TotalAmount = w.Amount 
            };
            _context.Orders.Add(order);
            _context.SaveChanges();

            var payment = new Payment
            {
                OrderId = order.OrderId,
                PaymentMethod = w.PaymentMethod,
                Amount = w.Amount,
            };

            _context.Payments.Add(payment);
            _context.SaveChanges();

            var shipment = new Shipment
            {
                OrderId = order.OrderId, 
                AddressId = w.AddressId,
                Carrier = w.Carrier ?? "Yet to assign",
                ShipmentDate = DateOnly.FromDateTime(DateTime.Now),
                Status = "Processing",
            };
            _context.Shipments.Add(shipment);
            _context.SaveChanges();
            return order.OrderId;
        }
        public void DeleteOrder(int id)
        {
            Order ca = _context.Orders.Find(id);
            _context.Orders.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateOrder(int id, Order w)
        {
            _context.Orders.Update(w);
            _context.SaveChanges();
        }
    }
}
