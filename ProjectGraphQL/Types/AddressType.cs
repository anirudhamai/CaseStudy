using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class AddressType : ObjectType<Address>
    {
        protected override void Configure(IObjectTypeDescriptor<Address> descriptor)
        {
            descriptor
                .Field(a => a.AddressId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(a => a.UserId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(a => a.AddressLine1)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(a => a.AddressLine2)
                .Type<StringType>();

            descriptor
                .Field(a => a.City)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(a => a.Region)
                .Type<StringType>();

            descriptor
                .Field(a => a.Country)
                .Type<StringType>();

            descriptor
                .Field(a => a.PostalCode)
                .Type<StringType>();

            descriptor
                .Field(a => a.Shipments)
                .Type<NonNullType<ListType<ShipmentType>>>();

            descriptor
                .Field(a => a.User)
                .Type<NonNullType<CustomerType>>();
        }
    }
}

