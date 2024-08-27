using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class CustomerType : ObjectType<Customer>
    {
        protected override void Configure(IObjectTypeDescriptor<Customer> descriptor)
        {
            descriptor
                .Field(c => c.UserId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(c => c.UserName)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(c => c.Email)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(c => c.CreatedAt)
                .Type<NonNullType<DateType>>();

            descriptor
                .Field(c => c.Addresses)
                .Type<NonNullType<ListType<AddressType>>>();

            descriptor
                .Field(c => c.Carts)
                .Type<NonNullType<ListType<CartType>>>();

            descriptor
                .Field(c => c.Orders)
                .Type<NonNullType<ListType<OrderType>>>();

            descriptor
                .Field(c => c.Reviews)
                .Type<NonNullType<ListType<ReviewType>>>();

            descriptor
                .Field(c => c.Wishlists)
                .Type<NonNullType<ListType<WishlistType>>>();
        }
    }
}
