using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class InventoryType : ObjectType<Inventory>
    {
        protected override void Configure(IObjectTypeDescriptor<Inventory> descriptor)
        {
            descriptor
                .Field(i => i.ProductId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(i => i.StockQuantity)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(i => i.Product)
                .Type<NonNullType<ProductType>>();
        }
    }
}
