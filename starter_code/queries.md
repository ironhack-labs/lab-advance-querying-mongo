![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
{name: { $eq: 'Babelgum' } }
{name: 1}
<!-- Your Code Goes Here -->
   
### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
{ number_of_employees : { $gt: 5000 } }
{number_of_employees: 1}
limit: 20;
<!-- Your Code Goes Here -->

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.
{ $and: [ { founded_year: { $gt: 2000} }, { founded_year: { $lt: 2005 } } ] }
{founded_year: 1, name: 1}
<!-- Your Code Goes Here -->

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
{ $and: [ { "ipo.valuation_amount": { $gt: 100000000 } }, { founded_year: { $lt: 2010 } } ] }
{name: 1, ipo: 1}
<!-- Your Code Goes Here -->

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
{ $and: [ { number_of_employees: { $lt: 1000} }, { founded_year: { $lt: 2005 } } ] }
{number_of_employees: 1, founded_year: 1}
{number_of_employees: 1}
<!-- Your Code Goes Here -->

### 6. All the companies that don't include the `partners` field.
{partners: {$eq: null}}
{partners: 1
<!-- Your Code Goes Here -->

### 7. All the companies that have a null type of value on the `category_code` field.
{category_code: {$eq: null}}
{category_code: 1}
<!-- Your Code Goes Here -->

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
{ number_of_employees: { $gt: 100, $lt: 1000 } }
{name: 1, number_of_employees:1}
<!-- Your Code Goes Here -->

### 9. Order all the companies by their IPO price descendently.
{ipo: 1}
<!-- Your Code Goes Here -->

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`
{number_of_employees: -1}
<!-- Your Code Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
{founded_month: {$gt: 6, $lt: 12}}
limit: 1000
<!-- Your Code Goes Here -->

### 12. All the companies that have been 'deadpooled' after the third year.
{deadpooled_year: {$gt: 3}}
<!-- Your Code Goes Here -->

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
{ $and: [ { founded_year: { $lt: 2000} }, { "acquisitions.price_amount": { $gt: 10000000 } } ] }
<!-- Your Code Goes Here -->

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.
{"acquisitions.acquired_year": { $gt: 2015} }
{name: 1, acquisition:1}
{"acquisitions.price_amount": 1}
<!-- Your Code Goes Here -->

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
{name: 1, founded_year:1}
{founded_year: 1}
<!-- Your Code Goes Here -->

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.
{founded_day: {$eq: 7}}
{"acquisitions.price_amount": -1}
limit: 10
<!-- Your Code Goes Here -->

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
{category_code:"web", number_of_employees: {$gt: 4000}}
{number_of_employees: 1}
<!-- Your Code Goes Here -->

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
{ $and: [ { "acquisitions.price_amount": { $gt: 10000000} }, { "acquisitions.price_currency_code": { $eq: 'EUR' } } ] }
<!-- Your Code Goes Here -->

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
{"acquisitions.acquired_month":{$lte: 4}}
{name:1, acquisition:1}
<!-- Your Code Goes Here -->

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
{ $and: [ { founded_year: { $gte: 2000, $lte: 2010} }, { "acquisitions.acquired_year": { $lte: 2011 } } ] }
<!-- Your Code Goes Here -->
