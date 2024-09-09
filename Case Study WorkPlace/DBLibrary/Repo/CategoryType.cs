using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;

namespace DBLibrary.Repo
{
    public class CategoryType: ICategory
    {
        private readonly ShopeaseContext _context;
        public CategoryType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<Category> GetCategory()
        {
            return _context.Categories.ToList();
        }
        public Category GetCategoryById(int id)
        {
            return _context.Categories
                .Include(c => c.Products)
                .ToList()
                .Find(c => c.CategoryId==id);
        }
        public IEnumerable<Category> GetTop5Category()
        {
            return _context.Categories
                .Include(c => c.Products)
                .ToList();
        }
        public void AddCategory(Category c)
        {
            _context.Categories.Add(c);
            _context.SaveChanges();
        }
        public void DeleteCategory(int id)
        {
            Category ca = _context.Categories.Find(id);
            _context.Categories.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateCategory(int id, Category c)
        {
            _context.Categories.Update(c);
            _context.SaveChanges();
        }

    }
}
