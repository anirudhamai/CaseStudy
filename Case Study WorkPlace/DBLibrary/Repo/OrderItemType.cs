using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class OrderItemType: IOrderItem
    {
        private readonly ShopeaseContext _context;
        public OrderItemType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<OrderItem> GetOrderItem()
        {
            return _context.OrderItems
//                .Include(o => o.Order)
                .Include(o => o.Product)
                .ToList();
        }

        public OrderItem GetOrderItemById(int id)
        {
            return _context.OrderItems
                //                .Include(o => o.Order)
                .Include(o => o.Product)
                .ToList()
                .Find(o => o.OrderItemId==id);
        }
        public void AddOrderItem(OrderItem w)
        {
            _context.OrderItems.Add(w);
            _context.SaveChanges();
        }
        public void DeleteOrderItem(int id)
        {
            OrderItem ca = _context.OrderItems.Find(id);
            _context.OrderItems.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateOrderItem(int id, OrderItem w)
        {
            _context.OrderItems.Update(w);
            _context.SaveChanges();
        }
    }
}
