Feature: End to End Ecomm Validation

      Scenario: Placing the Order 
      Given a login to Ecommerce Application with "rishi7196@gmail.com" and "rishi12345"
      When Add "Zara coat 3" to Cart
      Then  Verify "zara coat 3" is displayed in the cart
      When Enter valid details and place the Order
      Then Veirfy order in present in the OrderHistory
