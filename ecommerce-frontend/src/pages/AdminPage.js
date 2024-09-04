import React, { useState } from 'react';

function AdminPage() {
  // Sample data for products and categories
  const initialProducts = [
    { id: 1, name: 'Sample Product 1', price: 29.99, quantity: 10, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Sample Product 2', price: 49.99, quantity: 5, image: 'https://via.placeholder.com/100' }
  ];

  const initialCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' }
  ];

  // State for products and categories
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);

  // State for adding products and categories
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newQuantity, setNewQuantity] = useState('');

  // Handlers for product and category management
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1, // Generating a new ID
      name,
      description,
      price: parseFloat(price),
      quantity: 0,
      image: image || 'https://via.placeholder.com/100'
    };
    setProducts([...products, newProduct]);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: parseInt(newQuantity, 10) } : product
    ));
    setNewQuantity('');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      id: categories.length + 1, // Generating a new ID
      name: categoryName
    };
    setCategories([...categories, newCategory]);
    setCategoryName('');
  };

  const handleRemoveCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Manage Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
            <p>{product.name} - ₹{product.price} (Quantity: {product.quantity})</p>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            <input
              type="number"
              placeholder="New Quantity"
              value={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
            />
            <button onClick={() => handleUpdateQuantity(product.id)}>Update Quantity</button>
          </li>
        ))}
      </ul>

      <h2>Add Category</h2>
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">Add Category</button>
      </form>

      <h2>Manage Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <p>{category.name}</p>
            <button onClick={() => handleRemoveCategory(category.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
