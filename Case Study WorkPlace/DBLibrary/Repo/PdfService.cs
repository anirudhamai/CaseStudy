using DBLibrary.Models;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLibrary.Repo
{
    public class PdfService: IPdfService
    {
        private readonly ShopeaseContext _context;
        public PdfService(ShopeaseContext context)
        {
            _context = context;
        }

        public byte[] GenerateOrderBill(int orderId)
        {
            Order order = _context.Orders.ToList().Find(o => o.OrderId == orderId);
            Customer customer = _context.Customers.ToList().Find(customer => customer.UserId == order.UserId);
            Shipment shipment = _context.Shipments.ToList().Find(shipment => shipment.OrderId == order.OrderId);
            Address address = _context.Addresses.ToList().Find(address => address.AddressId == address.AddressId);
            IEnumerable<OrderItem> orderItems = _context.OrderItems.Include(o => o.Product).Where(o => o.OrderId == orderId).ToList();

            using var ms = new MemoryStream();
            using (var writer = new PdfWriter(ms))
            {
                using (var pdf = new PdfDocument(writer))
                {
                    var document = new Document(pdf);

                    // Add Customer Information
                    document.Add(new Paragraph($"Customer Name: {customer.UserName}"));
                    document.Add(new Paragraph($"Address: {address?.AddressLine1 ?? "N/A"}")); // Assuming single address for simplicity
                    document.Add(new Paragraph($"Date: {order.OrderDate.ToShortDateString()}"));

                    // Create Table for Order Items
                    var table = new Table(UnitValue.CreatePercentArray(new float[] { 1, 2, 2, 2 }))
                        .SetWidth(UnitValue.CreatePercentValue(100));

                    // Add Table Header
                    table.AddHeaderCell("Item");
                    table.AddHeaderCell("Quantity");
                    table.AddHeaderCell("Unit Price");
                    table.AddHeaderCell("Total Price");

                    // Add Table Rows
                    foreach (var item in orderItems)
                    {
                        var itemTotal = item.Quantity * item.UnitPrice;

                        table.AddCell(item.Product.Name);
                        table.AddCell(item.Quantity.ToString());
                        table.AddCell(item.UnitPrice.ToString("C"));
                        table.AddCell(itemTotal.ToString("C"));
                    }
                    // Add Table to Document
                    document.Add(table);

                    // Add Total Amount
                    document.Add(new Paragraph($"Total Amount : {order.TotalAmount:C}"));
                }
            }

            order.Pdf = ms.ToArray();
            _context.Orders.Update(order);
            _context.SaveChanges();
            return ms.ToArray();
        }
    }
}
