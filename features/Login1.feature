Feature: Run with multiple test data

@Regression
Scenario Outline: Placking the Order
Given   Given a login to Ecommerce Application with "<username>" and "<password">


Examples:
    | username             | password |
    | rishi7196@gmail.com  | rishi12345 |
    | rishi7196@gmail.com  | rishi12345 |
    | rishi7196@gmail.com  | rishi12345 |

   