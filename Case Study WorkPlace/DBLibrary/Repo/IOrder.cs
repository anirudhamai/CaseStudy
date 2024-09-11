using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IOrder
    {
        public IEnumerable<Order> GetOrder();
        public IEnumerable<Order> GetOrderByUserId(int id);
        public Order GetOrderById(int id);
        public void AddOrder(Order c);
        public void UpdateOrder(int id, Order c);
        public void DeleteOrder(int id);

    }
}
