using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class PaymentType: IPayment
    {
        private readonly ShopeaseContext _context;
        public PaymentType(ShopeaseContext context)
        {
            _context = context;
        }

        public IEnumerable<Payment> GetPayment()
        {
            return _context.Payments
                .Include(p => p.Order)
                .ToList();
        }
        public Payment GetPaymentById(int id)
        {
            return _context.Payments
                .Include(p => p.Order)
                .ToList()
                .Find(p => p.PaymentId==id);
        }
        public void AddPayment(Payment w)
        {
            _context.Payments.Add(w);
            _context.SaveChanges();
        }
        public void DeletePayment(int id)
        {
            Payment ca = _context.Payments.Find(id);
            _context.Payments.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdatePayment(int id, Payment w)
        {
            _context.Payments.Update(w);
            _context.SaveChanges();
        }
    }
}
