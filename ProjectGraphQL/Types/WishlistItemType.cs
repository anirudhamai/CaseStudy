using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class WishlistItemType : ObjectType<WishlistItem>
    {
        protected override void Configure(IObjectTypeDescriptor<WishlistItem> descriptor)
        {
            descriptor
                .Field(wi => wi.WishlistItemId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(wi => wi.WishlistId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(wi => wi.ProductId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(wi => wi.Product)
                .Type<NonNullType<ProductType>>();

            descriptor
                .Field(wi => wi.Wishlist)
                .Type<NonNullType<WishlistType>>();
        }
    }
}
