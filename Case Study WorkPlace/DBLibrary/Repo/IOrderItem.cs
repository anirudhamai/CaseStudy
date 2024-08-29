using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IOrderItem
    {
        public IEnumerable<OrderItem> GetOrderItem();
        public OrderItem GetOrderItemById(int id);
        public void AddOrderItem(OrderItem c);
        public void UpdateOrderItem(int id, OrderItem c);
        public void DeleteOrderItem(int id);
    }
}
