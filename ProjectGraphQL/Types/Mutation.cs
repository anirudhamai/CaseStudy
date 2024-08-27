using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Queries
{
    public class Mutation
    {
        private readonly ShopeaseContext _context;

        public Mutation(ShopeaseContext context)
        {
            _context = context;
        }

        [UseDbContext(typeof(ShopeaseContext))]
        public async Task<Customer> UpdateUserProfile(
            int userId,
            string email,
            string address,
            [ScopedService] ShopeaseContext context)
        {
            var customer = await context.Customers
                .Include(c => c.Addresses)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (customer == null)
            {
                throw new GraphQLException("Customer not found");
            }

            customer.Email = email;

            var addressToUpdate = customer.Addresses.FirstOrDefault();
            if (addressToUpdate != null)
            {
                addressToUpdate.AddressLine1 = address;
            }

            await context.SaveChangesAsync();

            return customer;
        }
    }
}
