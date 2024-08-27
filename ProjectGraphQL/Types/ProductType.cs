using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class ProductType : ObjectType<Product>
    {
        protected override void Configure(IObjectTypeDescriptor<Product> descriptor)
        {
            descriptor
                .Field(p => p.ProductId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(p => p.Name)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(p => p.CategoryId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(p => p.Price)
                .Type<NonNullType<DecimalType>>(); // Use a custom scalar if necessary

            descriptor
                .Field(p => p.CartItems)
                .Type<NonNullType<ListType<CartItemType>>>();

            descriptor
                .Field(p => p.Category)
                .Type<NonNullType<CategoryType>>();

            descriptor
                .Field(p => p.Discounts)
                .Type<NonNullType<ListType<DiscountType>>>();

            descriptor
                .Field(p => p.Inventory)
                .Type<InventoryType>(); // Nullable type, if Inventory is optional

            descriptor
                .Field(p => p.OrderItems)
                .Type<NonNullType<ListType<OrderItemType>>>();

            descriptor
                .Field(p => p.Reviews)
                .Type<NonNullType<ListType<ReviewType>>>();

            descriptor
                .Field(p => p.WishlistItems)
                .Type<NonNullType<ListType<WishlistItemType>>>();
        }
    }
}

