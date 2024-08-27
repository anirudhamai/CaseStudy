using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class OrderItemType : ObjectType<OrderItem>
    {
        protected override void Configure(IObjectTypeDescriptor<OrderItem> descriptor)
        {
            descriptor
                .Field(oi => oi.OrderItemId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(oi => oi.OrderId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(oi => oi.ProductId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(oi => oi.Quantity)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(oi => oi.UnitPrice)
                .Type<NonNullType<DecimalType>>(); // Use a custom scalar if necessary

            descriptor
                .Field(oi => oi.Order)
                .Type<NonNullType<OrderType>>();

            descriptor
                .Field(oi => oi.Product)
                .Type<NonNullType<ProductType>>();
        }
    }
}
