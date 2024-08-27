using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class ReviewType : ObjectType<Review>
    {
        protected override void Configure(IObjectTypeDescriptor<Review> descriptor)
        {
            descriptor
                .Field(r => r.ReviewId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(r => r.UserId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(r => r.ProductId)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(r => r.Rating)
                .Type<NonNullType<IntType>>();

            descriptor
                .Field(r => r.Comment)
                .Type<StringType>(); // Nullable field

            descriptor
                .Field(r => r.ReviewDate)
                .Type<NonNullType<DateType>>(); // Ensure you have a DateType scalar for DateOnly

            descriptor
                .Field(r => r.Product)
                .Type<NonNullType<ProductType>>();

            descriptor
                .Field(r => r.User)
                .Type<NonNullType<CustomerType>>();
        }
    }
}
