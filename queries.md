![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
query:{ name:'Babelgum' }
project: { name: 1 }
### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
query: {number_of_employees:{$gt:5000}}
project:
sort:{number_of_employees:-1}
limit:20
### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.
query: {founded_year:{$gte:2000, $lte:2005}}
project:{name:1, founded_year:1}
### 4. All the companies that had an IPO of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
query: {founded_year:{$lt:2005}, 'ipo.valuation_amount':{$gt:100000000}}
projection: {name:1, ipo:1}
sort:
skip:
limit: 
### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
query:{founded_year:{$lt:2005},number_of_employees:{$lt:1000}}
projection: 
sort:{number_of_employees:-1}
skip:
limit: 10
### 6. All the companies that don't include the `partners` field.
query:{partners:{$exists:false}}
projection: 
sort:
skip:
limit: 
### 7. All the companies that have a null type of value on the `category_code` field.
query:{category_code:{$eq:null}}
projection: 
sort:
skip:
limit: 
### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
query:{$and:[{number_of_employees:{$gte:100}},{number_of_employees:{$lt:1000}}]}
projection: {name:1,number_of_employees:1}
sort:
skip:
limit: 
### 9. Order all the companies by their IPO price descendently.
query:
projection: 
sort:{'ipo.valuation_amount':-1}
skip:
limit: 
### 10. Retrieve the 10 companies with more employees, order by the `number of employees`
query:
projection: 
sort: {number_of_employees:-1}
skip:
limit: 10
### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
query:{$and:[{founded_month:{$gte:6}},{founded_month:{$lte:12}}]}
projection: 
sort:
skip:
limit: 1000

### 12. All the companies that have been 'deadpooled' after the third year.
query: KEINE AHNUNG {$or:[deadpooled_year:{$gte:3}]}
projection: 
sort:
skip:
limit: 

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
query: {$and:[{founded_year:{$lt:2000}},{'acquisition.price_amount':{$gt:10000000}}]}
projection: 
sort:
skip:
limit: 

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

query:{'acquisition.acquired_year':{$gt:2015}}
projection: 
sort:
skip:
limit: empty

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

query:
projection: {name:1, founded_year:1}
sort: {founded_year:1}
skip:
limit: 

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.