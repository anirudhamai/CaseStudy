using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class CartItemType : ObjectType<CartItem>
    {
        protected override void Configure(IObjectTypeDescriptor<CartItem> descriptor)
        {
            descriptor
                .Field(ci => ci.CartItemId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(ci => ci.CartId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(ci => ci.ProductId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(ci => ci.Quantity)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(ci => ci.Cart)
                .Type<NonNullType<CartType>>();

            descriptor
                .Field(ci => ci.Product)
                .Type<NonNullType<ProductType>>();
        }
    }
}

