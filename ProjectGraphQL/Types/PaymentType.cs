using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class PaymentType : ObjectType<Payment>
    {
        protected override void Configure(IObjectTypeDescriptor<Payment> descriptor)
        {
            descriptor
                .Field(p => p.PaymentId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(p => p.OrderId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(p => p.PaymentMethod)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(p => p.Amount)
                .Type<NonNullType<DecimalType>>(); // Use a custom scalar if necessary

            descriptor
                .Field(p => p.Order)
                .Type<NonNullType<OrderType>>();
        }
    }
}
