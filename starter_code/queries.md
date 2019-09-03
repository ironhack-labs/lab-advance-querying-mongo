![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

<!-- FEITO -->
### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
<!-- Your Code Goes Here --> 
query:{name: {$eq:"Babelgum"}}
project:{name:1} 


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
<!-- Your Code Goes Here -->{
query:{number_of_employees: {$gt:5000}}
limit:20
sort:{number_of_employees:1}
### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
<!-- Your Code Goes Here -->
query:{founded_year: {$gte:2000,$lte:2005}}
project: {name:1,founded_year:1}


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
query:{$and:[{"ipo.valuation_amount": {$gt:100000000}},{founded_year:{$lt:2010}}]}
project: {name:1,ipo:1}
<!-- Your Code Goes Here -->

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

query: {$and:[{number_of_employees:{$lte:1000}},{founded_year:{$lte:2005}}]}
sort:{number_of_employees:1}
limit:10
<!-- Your Code Goes Here -->

### 6. All the companies that don't include the `partners` field.
{partners:{$exist:false}}
<!-- Your Code Goes Here -->

### 7. All the companies that have a null type of value on the `category_code` field.
{category_code:null}
<!-- Your Code Goes Here -->

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
query:number_of_employees:{$gte:100,$lte:1000}}
project:{name:1,number_of_employees:1}
<!-- Your Code Goes Here -->

### 9. Order all the companies by their IPO price descendently.
sort:{"ipo.valuation_amount":-1}
<!-- Your Code Goes Here -->

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`
limit: 10
sort: {number_of_employees:-1}
<!-- Your Code Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
query: {founded_month:{$gte:6}}
limit:1000
<!-- Your Code Goes Here -->

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

<!-- Your Code Goes Here -->

### 12. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
query: {$and:[{"acquisition.price_amount": {$gt:10000000}},{founded_year:{$lte:2000}}]}
<!-- Your Code Goes Here -->

### 13. All the companies that have been acquired after 2000, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.
query: {"acquisition.acquired_year":{$gt:2000}}
project: {name:1,acquisition: 1}
sort: {"acquisition.price_amount":1}
<!-- Your Code Goes Here -->

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
proj: {name:1,founded_year:1}
sort: {founded_year:1}
<!-- Your Code Goes Here -->

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` descendently. Limit the search to 10 documents.
query:{founded_day:{$lte:7}}
limit: 10
sort: {"acquisition.price_amount":-1}
<!-- Your Code Goes Here -->

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
query:{$and:[{category_code: {$eq:"web"}},{number_of_employees:{$gte:4000}}]}
sort: {number_of_employees:-1}
<!-- Your Code Goes Here -->

### 17. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
query: 
{$and:[{"acquisitions.price_amount": {$gte:10000000}},{"acquisition.price_currency_code":{$eq:"EUR"}}]}
<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
query:{"acquisition.acquired_month":{$lte:3}}
limit:10
project: {name:1,acquisition:1}
<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

query: {$and:[{founded_year: {$gte:2000,$lte:2005}},{"acquisitions.acquired_year":{$lt:2010}}]}


<!-- Your Code Goes Here -->
