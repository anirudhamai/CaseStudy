using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class ReviewType: IReview
    {
        private readonly ShopeaseContext _context;
        public ReviewType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Review> GetReview()
        {
            return _context.Reviews
                .Include(r => r.User)
                .ToList();
        }
        public Review GetReviewById(int id)
        {
            return _context.Reviews
                .Include(r => r.Product)
                .Include(r => r.User)
                .ToList()
                .Find(r => r.ReviewId == id );
        }
        public void AddReview(Review w)
        {
            _context.Reviews.Add(w);
            _context.SaveChanges();
        }
        public void DeleteReview(int id)
        {
            Review ca = _context.Reviews.Find(id);
            _context.Reviews.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateReview(int id, Review w)
        {
            _context.Reviews.Update(w);
            _context.SaveChanges();
        }
    }
}
