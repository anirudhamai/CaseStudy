using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class DiscountType : ObjectType<Discount>
    {
        protected override void Configure(IObjectTypeDescriptor<Discount> descriptor)
        {
            descriptor
                .Field(d => d.DiscountId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(d => d.ProductId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(d => d.DiscountPercentage)
                .Type<NonNullType<DecimalType>>(); // Use a custom scalar if necessary

            descriptor
                .Field(d => d.Product)
                .Type<NonNullType<ProductType>>();
        }
    }
}

