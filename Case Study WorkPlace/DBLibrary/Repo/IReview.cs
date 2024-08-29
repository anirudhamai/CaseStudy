using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IReview
    {
        public IEnumerable<Review> GetReview();
        public Review GetReviewById(int id);
        public void AddReview(Review c);
        public void UpdateReview(int id, Review c);
        public void DeleteReview(int id);
    }
}
