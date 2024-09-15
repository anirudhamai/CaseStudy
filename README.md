# CaseStudy
How to run:

Step 1: Start the microservices Server
> Goto: "Case Study Workplace > CaseStudy > DBLibrary > Double click on DBLibrary.soln
>This will run the complete solution, with Repo layer library and rest api

Step 2: Start the api Gateway

Step 3: Start react app
> Goto ecommerce-frontend
> Run npm i
> Run npm start to start the server
Step 4: Access from browser ()usually on port 3000 or 3001).
> sample landing page url: localhost:3000/login

Features:

> Email service
> PDF Integration
> Clean coding practices
> Repository Layer



Repo of all the documentation for Ecommerce Retail application case study

Jira Project Scrum link : https://kfayazuddin09219-1722272372955.atlassian.net/jira/software/projects/SCRUM/boards/1
Scrum and Product Backlog excel file has 4 sheets:
1. Product Backlog
2. Scrum-1 Backlog
3. Scrum-2 Backlog
4. Scrum-3 Backlog
excel link: https://docs.google.com/spreadsheets/d/1_yXx35lYSPSUMfKzT6BUkoywXWFsCIMxE_FlWJPXGl0/edit?usp=sharing




Queries for graphql:
---------------------
-User Story1:User Story 1: Querying Product Data
Given I have a list of product IDs,
When I create a GraphQL query to fetch product details,
Then I should receive only the product name, price, and category fields.
-------------------------------------------------------------------
query GetProductsByIds{
  products {
    name
    price
    category {
      categoryName
    }
  }
}

-User Story2:User Story 2: Mutating User Profile Information
Given I need to update a user's email and address,
When I write a GraphQL mutation for updating user profile information,
Then the system should update the user details and return the updated information.
----------------------------------------------------------------------------------
mutation UpdateUserProfile($userId: Int!, $email: String!, $address: String!) {
  updateUserProfile(userId: $userId, email: $email, address: $address) {
    userId
    userName
    email
    createdAt
    addresses {
      addressId
      addressLine1
    }
  }
}

------------------------------------------------------------------------------------------
{
  "userId": 1,
  "email": "newemail@example.com",
  "address": "123 New Address"
}

-User Story5:User Story 5: Combining Multiple Data Sources
Given I want to see product reviews and ratings together,
When I use GraphQL to query data from both reviews and products,
Then I should receive a combined view of the product's feedback and ratings in a single response.
These user stories are straightforward and designed to guide your participants through basic GraphQL operations.
-----------------------------------------------------------------------------------
query GetProductReviewsAndRatings {
  products{
    name
    price
    reviews {
      reviewId
      rating
      comment
      reviewDate
    }
  }
}

