using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class CartType : ObjectType<Cart>
    {
        protected override void Configure(IObjectTypeDescriptor<Cart> descriptor)
        {
            descriptor
                .Field(c => c.CartId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(c => c.UserId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(c => c.CreatedAt)
                .Type<NonNullType<DateType>>();

            descriptor
                .Field(c => c.CartItems)
                .Type<NonNullType<ListType<CartItemType>>>();

            descriptor
                .Field(c => c.User)
                .Type<NonNullType<CustomerType>>();
        }
    }
}

