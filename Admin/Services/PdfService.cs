/*using Admin.Models;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using System.IO;

namespace Admin.Services
{
    public class PdfService
    {
        public byte[] GenerateOrderBill(Order order)
        {
            using var ms = new MemoryStream();
            using (var writer = new PdfWriter(ms))
            {
                using (var pdf = new PdfDocument(writer))
                {
                    var document = new Document(pdf);

                    document.Add(new Paragraph($"Order ID: {order.OrderId}"));
                    document.Add(new Paragraph($"Date: {order.OrderDate.ToShortDateString()}"));

                    document.Add(new Paragraph("Order Items:"));
                    foreach (var item in order.OrderItems)
                    {
                        document.Add(new Paragraph($"- {item.Product.Name}: {item.Quantity} x {item.UnitPrice:C}"));
                    }
                }
            }
            return ms.ToArray();
        }
    }
}*/

using Admin.Models;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;
using System.IO;
using System.Linq;

namespace Admin.Services
{
    public class PdfService
    {
        public byte[] GenerateOrderBill(Order order, Customer customer)
        {
            using var ms = new MemoryStream();
            using (var writer = new PdfWriter(ms))
            {
                using (var pdf = new PdfDocument(writer))
                {
                    var document = new Document(pdf);

                    // Add Customer Information
                    document.Add(new Paragraph($"Customer Name: {customer.UserName}"));
                    document.Add(new Paragraph($"Address: {customer.Addresses.FirstOrDefault()?.AddressLine1 ?? "N/A"}")); // Assuming single address for simplicity
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
                    decimal totalAmount = 0;
                    foreach (var item in order.OrderItems)
                    {
                        var itemTotal = item.Quantity * item.UnitPrice;
                        totalAmount += itemTotal;

                        table.AddCell(item.Product.Name);
                        table.AddCell(item.Quantity.ToString());
                        table.AddCell(item.UnitPrice.ToString("C"));
                        table.AddCell(itemTotal.ToString("C"));
                    }

                    // Add Table to Document
                    document.Add(table);

                    // Add Total Amount
                    document.Add(new Paragraph($"Total Amount : {totalAmount:C}"));
                }
            }
            return ms.ToArray();
        }
    }
}

