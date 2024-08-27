using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class WishlistType : ObjectType<Wishlist>
    {
        protected override void Configure(IObjectTypeDescriptor<Wishlist> descriptor)
        {
            descriptor
                .Field(w => w.WishlistId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(w => w.UserId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(w => w.User)
                .Type<NonNullType<CustomerType>>();

            descriptor
                .Field(w => w.WishlistItems)
                .Type<NonNullType<ListType<WishlistItemType>>>();
        }
    }
}
