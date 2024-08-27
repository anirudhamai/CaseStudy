using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class ShipmentType : ObjectType<Shipment>
    {
        protected override void Configure(IObjectTypeDescriptor<Shipment> descriptor)
        {
            descriptor
                .Field(s => s.ShipmentId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(s => s.OrderId)
                .Type<IntType>(); // Nullable field

            descriptor
                .Field(s => s.AddressId)
                .Type<IntType>(); // Nullable field

            descriptor
                .Field(s => s.Carrier)
                .Type<StringType>(); // Nullable field

            descriptor
                .Field(s => s.ShipmentDate)
                .Type<DateType>(); // Nullable field; Ensure you have a DateType scalar for DateOnly

            descriptor
                .Field(s => s.Status)
                .Type<StringType>(); // Nullable field

            descriptor
                .Field(s => s.Address)
                .Type<AddressType>(); // Nullable type

            descriptor
                .Field(s => s.Order)
                .Type<OrderType>(); // Nullable type
        }
    }
}
