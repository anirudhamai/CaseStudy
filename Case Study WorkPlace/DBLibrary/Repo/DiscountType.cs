using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class DiscountType: IDiscount
    {
        private readonly ShopeaseContext _context;
        public DiscountType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Discount> GetDiscount()
        {
            return _context.Discounts
                .Include(d => d.Product)
                .ToList();
        }
        public Discount GetDiscountById(int id)
        {
            return _context.Discounts
                .Include(d => d.Product)
                .ToList().Find(d => d.DiscountId ==id);
        }
        public void AddDiscount(Discount c)
        {
            _context.Discounts.Add(c);
            _context.SaveChanges();
        }
        public void DeleteDiscount(int id)
        {
            Discount ca = _context.Discounts.Find(id);
            _context.Discounts.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateDiscount(int id, Discount c)
        {
            _context.Discounts.Update(c);
            _context.SaveChanges();
        }
    }
}
