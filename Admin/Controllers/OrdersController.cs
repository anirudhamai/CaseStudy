/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Admin.Models;

namespace Admin.Controllers
{
    public class OrdersController : Controller
    {
        private readonly ShopeaseContext _context;

        public OrdersController(ShopeaseContext context)
        {
            _context = context;
        }

        // GET: Orders
        public async Task<IActionResult> Index()
        {
            var shopeaseContext = _context.Orders.Include(o => o.User);
            return View(await shopeaseContext.ToListAsync());
        }

        // GET: Orders/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders
                .Include(o => o.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }

        // GET: Orders/Create
        public IActionResult Create()
        {
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId");
            return View();
        }

        // POST: Orders/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("OrderId,UserId,OrderDate,Status,TotalAmount")] Order order)
        {
            if (ModelState.IsValid)
            {
                _context.Add(order);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // GET: Orders/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // POST: Orders/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("OrderId,UserId,OrderDate,Status,TotalAmount")] Order order)
        {
            if (id != order.OrderId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(order);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!OrderExists(order.OrderId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // GET: Orders/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders
                .Include(o => o.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }

        // POST: Orders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order != null)
            {
                _context.Orders.Remove(order);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}*/


/////////////////
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Admin.Models;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using Admin.Services;

namespace Admin.Controllers
{
    public class OrdersController : Controller
    {
        private readonly ShopeaseContext _context;

        private readonly PdfService _pdfService;

        public OrdersController(ShopeaseContext context , PdfService pdfService)
        {
            _context = context;
            _pdfService = pdfService;
        }


        // GET: Orders
        public async Task<IActionResult> Index()
        {
            var shopeaseContext = _context.Orders.Include(o => o.User);
            return View(await shopeaseContext.ToListAsync());
        }

        // GET: Orders/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders
                .Include(o => o.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }

        // GET: Orders/Create
        public IActionResult Create()
        {
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId");
            return View();
        }

        // POST: Orders/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("OrderId,UserId,OrderDate,Status,TotalAmount")] Order order)
        {
            if (ModelState.IsValid)
            {
                _context.Add(order);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // GET: Orders/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // POST: Orders/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("OrderId,UserId,OrderDate,Status,TotalAmount")] Order order)
        {
            if (id != order.OrderId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(order);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!OrderExists(order.OrderId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Customers, "UserId", "UserId", order.UserId);
            return View(order);
        }

        // GET: Orders/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = await _context.Orders
                .Include(o => o.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }

        // POST: Orders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order != null)
            {
                _context.Orders.Remove(order);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        // Export Orders to Excel
        /*public async Task<IActionResult> ExportToExcel()
        {
            // Set the EPPlus LicenseContext to NonCommercial
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            // Get the order data
            var orders = await _context.Orders
                .Include(o => o.User)
                .ToListAsync();

            // Create a new Excel package using EPPlus
            using (var package = new ExcelPackage())
            {
                var worksheet = package.Workbook.Worksheets.Add("Orders");

                // Add headers
                worksheet.Cells[1, 1].Value = "OrderId";
                worksheet.Cells[1, 2].Value = "UserId";
                worksheet.Cells[1, 3].Value = "OrderDate";
                worksheet.Cells[1, 4].Value = "Status";
                worksheet.Cells[1, 5].Value = "TotalAmount";

                // Add the order data
                for (int i = 0; i < orders.Count; i++)
                {
                    var order = orders[i];
                    worksheet.Cells[i + 2, 1].Value = order.OrderId;
                    worksheet.Cells[i + 2, 2].Value = order.UserId;
                    worksheet.Cells[i + 2, 3].Value = order.OrderDate.ToString("yyyy-MM-dd");
                    worksheet.Cells[i + 2, 4].Value = order.Status;
                    worksheet.Cells[i + 2, 5].Value = order.TotalAmount;
                }

                // Auto-fit the columns
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                // Convert the package into a byte array
                var stream = new MemoryStream(package.GetAsByteArray());

                // Define the file name and content type
                string fileName = "Orders.xlsx";
                string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

                // Return the file as a download
                return File(stream, contentType, fileName);
            }
        }*/
        public async Task<IActionResult> ExportToExcel()
        {

           ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            var orders = await _context.Orders
                .Include(o => o.User)
                .ToListAsync();

            using (var package = new ExcelPackage())
            {
                var worksheet = package.Workbook.Worksheets.Add("Orders");

                // Add headers
                worksheet.Cells[1, 1].Value = "Order ID";
                worksheet.Cells[1, 2].Value = "User ID";
                worksheet.Cells[1, 3].Value = "Order Date";
                worksheet.Cells[1, 4].Value = "Status";
                worksheet.Cells[1, 5].Value = "Total Amount";

                var row = 2;

                foreach (var order in orders)
                {
                    worksheet.Cells[row, 1].Value = order.OrderId;
                    worksheet.Cells[row, 2].Value = order.UserId;
                    worksheet.Cells[row, 3].Value = order.OrderDate.ToShortDateString();
                    worksheet.Cells[row, 4].Value = order.Status;
                    worksheet.Cells[row, 5].Value = order.TotalAmount;

                    // Apply red color for "Cancelled" status
                    if (order.Status.Equals("Cancelled", StringComparison.OrdinalIgnoreCase))
                    {
                        for (int col = 1; col <= 5; col++)
                        {
                            worksheet.Cells[row, col].Style.Fill.PatternType = ExcelFillStyle.Solid;
                            worksheet.Cells[row, col].Style.Fill.BackgroundColor.SetColor(System.Drawing.Color.Red);
                            worksheet.Cells[row, col].Style.Font.Color.SetColor(System.Drawing.Color.White);
                        }
                    }

                    row++;
                }

                var stream = new MemoryStream();
                package.SaveAs(stream);
                stream.Position = 0;
                var fileName = "Orders.xlsx";
                return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
            }
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
        ///////////////////////////
        // GET: Orders/Analysis
        public async Task<IActionResult> Analysis()
        {
            var orders = await _context.Orders.ToListAsync();
            var statusCounts = orders
                .GroupBy(o => o.Status)
                .Select(g => new { Status = g.Key, Count = g.Count() })
                .ToList();

            return View(statusCounts);
        }


        // GET: Orders/GenerateBill/5
        /*public async Task<IActionResult> GenerateBill(int id)
        {
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.OrderId == id);

            if (order == null)
            {
                return NotFound();
            }

            var customer = await _context.Customers
                .Include(c => c.Addresses)
                .FirstOrDefaultAsync(c => c.UserId == order.UserId);

            if (customer == null)
            {
                return NotFound();
            }

            var pdfBytes = await _pdfService.GenerateOrderBillPdfAsync(order, customer, order.OrderItems);

            var fileName = $"Order_{order.OrderId}_Bill.pdf";
            return File(pdfBytes, "application/pdf", fileName);
        }*/

        /*[HttpPost]
        public async Task<IActionResult> GenerateBill(int orderId)
        {
            // Retrieve the order details from the database
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order == null)
            {
                return NotFound();
            }

            // Generate the PDF bill
            var pdfBytes = _pdfService.GenerateOrderBill(order);

            // Return the PDF file as a download
            return File(pdfBytes, "application/pdf", $"Order_{orderId}_Bill.pdf");
        }*/


        /////
        /*[HttpPost]
        public async Task<IActionResult> GenerateBill(int orderId)
        {
            // Retrieve the order details from the database
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order == null)
            {
                return NotFound();
            }

            // Retrieve the customer details
            var customer = await _context.Customers
                .Include(c => c.Addresses)  // Assuming customer has addresses
                .FirstOrDefaultAsync(c => c.Orders.Any(o => o.OrderId == orderId));

            if (customer == null)
            {
                return NotFound("Customer not found for this order.");
            }

            // Generate the PDF bill
            var pdfBytes = _pdfService.GenerateOrderBill(order, customer);

            // Return the PDF file as a download
            return File(pdfBytes, "application/pdf", $"Order_{orderId}_Bill.pdf");
        }*/

        //Generating pdf bill
        [HttpPost]
        public async Task<IActionResult> GenerateBill(int orderId)
        {
            // Retrieve the order details from the database
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order == null)
            {
                return NotFound();
            }

            // Retrieve the customer details
            var customer = await _context.Customers
                .FirstOrDefaultAsync(c => c.Orders.Any(o => o.OrderId == orderId));

            if (customer == null)
            {
                return NotFound("Customer not found for this order.");
            }

            // Generate the PDF bill
            var pdfBytes = _pdfService.GenerateOrderBill(order, customer);

            // Store the PDF in the database
            order.Pdf = pdfBytes;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();

            // Return the PDF file as a download
            return File(pdfBytes, "application/pdf", $"Order_{orderId}_Bill.pdf");
        }

        //When order is placed
        public async Task<IActionResult> PlaceOrder(Order order,Customer customer)
        {
            // Validate and save the order to the database first
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Generate the PDF bill
            var pdfBytes = _pdfService.GenerateOrderBill(order, customer);

            // Update the order with the PDF data
            order.Pdf = pdfBytes;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();

            // Return a success response or redirect as needed
            return RedirectToAction("OrderConfirmation", new { id = order.OrderId });
        }

    }


}