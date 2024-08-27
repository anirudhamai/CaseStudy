/*var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();*/


using Microsoft.EntityFrameworkCore;
using ProjectGraphQL.Models;
using ProjectGraphQL.Queries;
using ProjectGraphQL.Types;
using System.Security.AccessControl;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContextFactory<ShopeaseContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Constr")));

builder.Services
        .AddGraphQLServer()
        .AddQueryType<Query>()
        .AddMutationType<Mutation>()
        .AddType<ProductType>() // Register all types
        .AddType<CategoryType>()
        .AddType<CustomerType>()
        .AddType<OrderType>()
        .AddType<ReviewType>()
        .AddType<CartType>()
        .AddType<CartItemType>()
        .AddType<DiscountType>()
        .AddType<InventoryType>()
        .AddType<ShipmentType>()
        .AddType<WishlistType>()
        .AddType<WishlistItemType>()
        .AddFiltering()
        .AddSorting()
        .AddProjections();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
});

app.Run();
