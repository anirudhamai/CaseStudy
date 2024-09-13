﻿using DBLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public interface IProduct
    {
        public IEnumerable<ProductDTO> GetProduct();
        public Product GetProductById(int id);
        public IEnumerable<Product> GetProductByCategory(int catId);
        public void AddProduct(Product c);
        public void UpdateProduct(int id, Product c);
        public void AddImage(int id, string url);
        public void DeleteProduct(int id);
    }
}
