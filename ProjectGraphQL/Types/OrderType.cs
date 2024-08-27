using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class OrderType : ObjectType<Order>
    {
        protected override void Configure(IObjectTypeDescriptor<Order> descriptor)
        {
            descriptor
                .Field(o => o.OrderId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(o => o.UserId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(o => o.OrderDate)
                .Type<NonNullType<DateType>>(); // Ensure you have a DateType scalar for DateOnly

            descriptor
                .Field(o => o.Status)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(o => o.TotalAmount)
                .Type<NonNullType<DecimalType>>(); // Use a custom scalar if necessary

            descriptor
                .Field(o => o.OrderItems)
                .Type<NonNullType<ListType<OrderItemType>>>();

            descriptor
                .Field(o => o.Payments)
                .Type<NonNullType<ListType<PaymentType>>>();

            descriptor
                .Field(o => o.Shipments)
                .Type<NonNullType<ListType<ShipmentType>>>();

            descriptor
                .Field(o => o.User)
                .Type<NonNullType<CustomerType>>();
        }
    }
}
