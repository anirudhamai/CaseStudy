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
        public IEnumerable<OrderDTO> GetOrderByUserId(int id);
        public Order GetOrderById(int id);
        public int AddOrder(OrderRequestDTO c);
        public void CancelOrder(int id);
        public void addBill(Order o);
        public void DeleteOrder(int id);

    }
}
