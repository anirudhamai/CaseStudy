using DBLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class ProductType: IProduct
    {
        private readonly ShopeaseContext _context;
        public ProductType(ShopeaseContext context)
        {
            _context = context;
        }
        public IEnumerable<ProductDTO> GetProduct()
        {
            return _context.Products
                .Select( p => new ProductDTO
                {
                    ProductId = p.ProductId,
                    Name = p.Name,
                    CategoryId = p.CategoryId,
                    Category = p.Category,
                    CategoryName = p.Category.CategoryName,
                    Price = p.Price,
                    Image = p.Image,
                    CartItems = p.CartItems,
                    Discounts = p.Discounts,
                    Inventory = p.Inventory,
                    WishlistItems = p.WishlistItems,
                    Reviews = p.Reviews,
                    OrderItems = p.OrderItems
                })
                .ToList();
        }
        public IEnumerable<Product> GetProductByCategory(int catId)
        {
            return _context.Products
                .AsNoTracking()
                .Include(p => p.Inventory)
                .Include(p => p.Discounts)
                .Include(p => p.CartItems)
                .Include(p => p.WishlistItems)
                .Include(p => p.Reviews)
                .Where(p => p.CategoryId == catId)
                .ToList();
        }


        public Product GetProductById(int id)
        {
            return _context.Products
                .AsNoTracking()
                .Include(p => p.Category)
                .Include(p => p.Inventory)
                .Include(p => p.Discounts)
                .Include(p => p.CartItems)
                .Include(p => p.WishlistItems)
                .Include(p => p.Reviews)
                .ToList()
                .Find(p => p.ProductId==id);
        }
        public void AddProduct(Product w)
        {
            _context.Products.Add(w);
            _context.SaveChanges();
        }
        public void DeleteProduct(int id)
        {
            Product ca = _context.Products.Find(id);
            _context.Products.Remove(ca);
            _context.SaveChanges();
        }
        public void UpdateProduct(int id, Product w)
        {
            _context.Products.Update(w);
            _context.SaveChanges();
        }

        public void AddImage(int id, string url)
        {
            var sql = "UPDATE Product SET Image = (SELECT BulkColumn FROM OPENROWSET(BULK "+ url + "SINGLE_BLOB) AS ImageFile WHERE ProductId = "+ id ;
            var rowsAffected = _context.Database.ExecuteSqlRaw(sql);
        }
    }
}
