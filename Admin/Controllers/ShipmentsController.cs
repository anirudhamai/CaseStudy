using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Admin.Models;
using OfficeOpenXml; // Add this at the top for EPPlus usage
using System.IO;// For memory stream

namespace Admin.Controllers
{
    public class ShipmentsController : Controller
    {
        private readonly ShopeaseContext _context;

        public ShipmentsController(ShopeaseContext context)
        {
            _context = context;
        }

        // GET: Shipments
        public async Task<IActionResult> Index()
        {
            var shopeaseContext = _context.Shipments.Include(s => s.Address).Include(s => s.Order);
            return View(await shopeaseContext.ToListAsync());
        }

        // GET: Shipments/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var shipment = await _context.Shipments
                .Include(s => s.Address)
                .Include(s => s.Order)
                .FirstOrDefaultAsync(m => m.ShipmentId == id);
            if (shipment == null)
            {
                return NotFound();
            }

            return View(shipment);
        }

        // GET: Shipments/Create
        public IActionResult Create()
        {
            ViewData["AddressId"] = new SelectList(_context.Addresses, "AddressId", "AddressId");
            ViewData["OrderId"] = new SelectList(_context.Orders, "OrderId", "OrderId");
            return View();
        }

        // POST: Shipments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ShipmentId,OrderId,AddressId,Carrier,ShipmentDate,Status")] Shipment shipment)
        {
            if (ModelState.IsValid)
            {
                _context.Add(shipment);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AddressId"] = new SelectList(_context.Addresses, "AddressId", "AddressId", shipment.AddressId);
            ViewData["OrderId"] = new SelectList(_context.Orders, "OrderId", "OrderId", shipment.OrderId);
            return View(shipment);
        }

        // GET: Shipments/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var shipment = await _context.Shipments.FindAsync(id);
            if (shipment == null)
            {
                return NotFound();
            }
            ViewData["AddressId"] = new SelectList(_context.Addresses, "AddressId", "AddressId", shipment.AddressId);
            ViewData["OrderId"] = new SelectList(_context.Orders, "OrderId", "OrderId", shipment.OrderId);
            return View(shipment);
        }

        // POST: Shipments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ShipmentId,OrderId,AddressId,Carrier,ShipmentDate,Status")] Shipment shipment)
        {
            if (id != shipment.ShipmentId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(shipment);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ShipmentExists(shipment.ShipmentId))
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
            ViewData["AddressId"] = new SelectList(_context.Addresses, "AddressId", "AddressId", shipment.AddressId);
            ViewData["OrderId"] = new SelectList(_context.Orders, "OrderId", "OrderId", shipment.OrderId);
            return View(shipment);
        }

        // GET: Shipments/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var shipment = await _context.Shipments
                .Include(s => s.Address)
                .Include(s => s.Order)
                .FirstOrDefaultAsync(m => m.ShipmentId == id);
            if (shipment == null)
            {
                return NotFound();
            }

            return View(shipment);
        }

        // POST: Shipments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var shipment = await _context.Shipments.FindAsync(id);
            if (shipment != null)
            {
                _context.Shipments.Remove(shipment);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ShipmentExists(int id)
        {
            return _context.Shipments.Any(e => e.ShipmentId == id);
        }

        ///////////////////////
        public async Task<IActionResult> ExportToExcel()
        {
            // Set the EPPlus LicenseContext to NonCommercial
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            // Get the shipment data
            var shipments = await _context.Shipments
                .Include(s => s.Address)
                .Include(s => s.Order)
                .ToListAsync();

            // Create a new Excel package using EPPlus
            using (var package = new ExcelPackage())
            {
                var worksheet = package.Workbook.Worksheets.Add("Shipments");

                // Add headers
                worksheet.Cells[1, 1].Value = "ShipmentId";
                worksheet.Cells[1, 2].Value = "OrderId";
                worksheet.Cells[1, 3].Value = "AddressId";
                worksheet.Cells[1, 4].Value = "Carrier";
                worksheet.Cells[1, 5].Value = "ShipmentDate";
                worksheet.Cells[1, 6].Value = "Status";

                // Add the shipment data
                for (int i = 0; i < shipments.Count; i++)
                {
                    var shipment = shipments[i];
                    worksheet.Cells[i + 2, 1].Value = shipment.ShipmentId;
                    worksheet.Cells[i + 2, 2].Value = shipment.OrderId;
                    worksheet.Cells[i + 2, 3].Value = shipment.AddressId;
                    worksheet.Cells[i + 2, 4].Value = shipment.Carrier;
                    worksheet.Cells[i + 2, 5].Value = shipment.ShipmentDate?.ToString("yyyy-MM-dd");
                    worksheet.Cells[i + 2, 6].Value = shipment.Status;
                }

                // Auto-fit the columns
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                // Convert the package into a byte array
                var stream = new MemoryStream(package.GetAsByteArray());

                // Define the file name and content type
                string fileName = "Shipments.xlsx";
                string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

                // Return the file as a download
                return File(stream, contentType, fileName);
            }
        }
        /////////////////
        public JsonResult GetShipmentStatusData()
        {
            // Get the status count for each type
            var statusCounts = _context.Shipments
                .GroupBy(s => s.Status)
                .Select(g => new
                {
                    Status = g.Key,
                    Count = g.Count()
                })
                .ToList();

            return new JsonResult(statusCounts);
        }
        //////////////////
        public JsonResult GetCarrierData()
        {
            // Get the count of shipments for each carrier
            var carrierCounts = _context.Shipments
                .GroupBy(s => s.Carrier)
                .Select(g => new
                {
                    Carrier = g.Key,
                    Count = g.Count()
                })
                .ToList();

            return new JsonResult(carrierCounts);
        }

        public IActionResult Analysis()
        {
            return View();
        }

    }
}
