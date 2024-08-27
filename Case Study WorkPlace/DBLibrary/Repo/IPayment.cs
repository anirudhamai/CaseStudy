using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IPayment
    {
        public IEnumerable<Payment> GetPayment();
        public Payment GetPaymentById(int id);
        public void AddPayment(Payment c);
        public void UpdatePayment(int id, Payment c);
        public void DeletePayment(int id);
    }
}
