using HotChocolate;
using HotChocolate.Types;
using ProjectGraphQL.Models;

namespace ProjectGraphQL.Types
{
    public class CategoryType : ObjectType<Category>
    {
        protected override void Configure(IObjectTypeDescriptor<Category> descriptor)
        {
            descriptor
                .Field(c => c.CategoryId)
                .Type<NonNullType<IdType>>();

            descriptor
                .Field(c => c.CategoryName)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(c => c.Products)
                .Type<NonNullType<ListType<ProductType>>>();
        }
    }
}
