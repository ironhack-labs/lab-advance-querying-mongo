![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers
query:
proyection : 
sortf:
skip:
limit:
### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

query : {name:"Babelgum"}
proyect {"name":1,"_id":0};

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

query:   {number_of_employees:{$gt:5000}}
proyection : 
sort: {number_of_employees:1}
skip:
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

query: {$and:[{founded_year:{$gte:2000}},{founded_year:{$lte:2005}}]}
proyection : {"name":1,"founded_year":1}
sort:
skip:
limit:n

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
query:  {$and:[{"ipo.valuation_amount":{$gt:100000000}},{founded_year:{$lt:2010}}]}
proyection : {name:1,ipo:1}
sortf:
skip:
limit:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

query: {$and:[{number_of_employees:{$lt:1000}},{founded_year:{$lt:2005}}]}
proyection : 
sortf: {number_of_employees:-1}
skip:
limit:10

### 6. All the companies that don't include the `partners` field.

query:{"partners":[]}
proyection : 
sortf:
skip:
limit:

### 7. All the companies that have a null type of value on the `category_code` field.

query:  {"category_code":null }
proyection : 
sortf:
skip:
limit:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

query:  {$and:[{number_of_employees:{$gt:100}},{number_of_employees:{$lt:1000}}]}
proyection : {name:1,number_of_employees:1}
sortf:
skip:
limit:

### 9. Order all the companies by their IPO price in a descending order.

query:
proyection : 
sortf:
skip:
limit:

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

query:
proyection :  {number_of_employees:1,name:1}
sortf:    {number_of_employees:-1}
skip:
limit:

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

query:    {founded_month:{$gt:6}}
proyection : 
sortf:
skip:
limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

query:  {$and:[{"founded_year":{$lt:2000}},{"acquisition.price_amount":{$gt:10000000}}]}
proyection : 
sortf:
skip:
limit:

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

query:  {"acquisition.acquired_year":{$gt:2010}}
proyection : 
sortf:  {"acquisition.price_amount":-1}
skip:
limit:

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

query:
proyection :  {founded_year:1,name:1}
sortf:  {founded_year:-1}
skip:
limit:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

query:  {"founded_day":{$lte:7}}
proyection : 
sortf:  {"acquisitions.price_amount":-1}
skip:
limit:

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

query:  {$and:[{"category_code":{$eq:"web"}},{"number_of_employees":{$gt:4000}}]}
proyection :   {"category_code":1,"name":1,"number_of_employees":1}
sortf:  {"number_of_employees":1}
skip:
limit:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

query:  {$and:[{"acquisition.price_currency_code":{$eq:"EUR"}},{"acquisition.price_amount":{$gt:10000000}}]}
proyection : 
sortf:
skip:
limit:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

query:  {$and:[{"acquisition.acquired_month":{$gte:1}},{"acquisition.acquired_month":{$lte:3}}]}
proyection :  {"name":1,"acquisition.acquired_month":1}
sortf:
skip:
limit: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

query:  {$and:[{founded_year:{$gte:2000}},{founded_year:{$lte:2010}},{"acquisition.acquired_year":{$gt:2011}}]}
proyection : {"name":1,"founded_year":1,"acquisition.acquired_year":1}
sortf:
skip:
limit:
