![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

- **Query**: {name: "Babelgum"}
- **Projection**: {name: 1}
- **Sort**:
- **Limit**:

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

- **Query**: { number_of_employees: { $gt: 500 } }
- **Projection**:
- **Sort**:
- **Limit**: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

- **Query**: { $and: [ { founded_year : {$gte: 2000}} , { founded_year : {$lte: 2005}} ] }
- **Projection**: {_id: 0, name: 1, founded_year: 1}
- **Sort**:
- **Limit**:

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

- **Query**: { $and: [ { founded_year : {$lt: 2010}} , { "ipo.valuation_amount" : {$gt: 100000000}} ] }
- **Projection**: {_id: 0, name: 1, ipo: 1}
- **Sort**:
- **Limit**:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.=

- **Query**: { $and: [ { number_of_employees : {$lt: 1000}} , { founded_year : {$lt: 2005}} ] }
- **Projection**:
- **Sort**: {number_of_employees: 1}
- **Limit**: 10

### 6. All the companies that don't include the `partners` field.
- **Query**: { partners: { $exists: false } }
- **Projection**:
- **Sort**: 
- **Limit**: 

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.=

- **Query**:  { number_of_employees : { $lt: 1000 } } , {founded_year: {$lte: 2005}}
- **Projection**: 
- **Sort**: {number_of_employees: 1}
- **Limit**: 10

### 7. All the companies that have a null type of value on the `category_code` field.

- **Query**:  {category_code: null}
- **Projection**:
- **Sort**: 
- **Limit**: 

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

- **Query**:  {$and : [ { number_of_employees: {$gt: 100} }, { number_of_employees: { $lt: 1000 } } ] }
- **Projection**: {name: 1, number_of_employees: 1}
- **Sort**: 
- **Limit**: 

### 9. Order all the companies by their IPO price descendently.

- **Query**:  { "ipo.valuation_amount": - 1 }
- **Projection**:
- **Sort**: 
- **Limit**: 

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

- **Query**:  
- **Projection**: { number_of_employees: 1 }
- **Sort**: { number_of_employees: -1 }
- **Limit**: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

- **Query**:  {founded_month: {$gt: 6}}
- **Projection**:
- **Sort**: 
- **Limit**: 1000

### 12. All the companies that have been 'deadpooled' after the third year.

- **Query**:  {deadpooled_year: {$gt: 3} }
- **Projection**:
- **Sort**: 
- **Limit**: 

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

- **Query**: { founded_year: {$lt: 2000}, "acquisition.price_amount": {$gt: 10000000}}
- **Projection**:
- **Sort**: 
- **Limit**: 

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

- **Query**: 
- **Projection**: {acquisition: 1, name: 1, _id: 0}
- **Sort**: {"acquisition.price_amount": 1}
- **Limit**: 

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

- **Query**: 
- **Projection**: { name: 1, founded_year: 1 }
- **Sort**: { founded_year: 1 }
- **Limit**: 


### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

- **Query**: {founded_day: {$lte: 7}}
- **Projection**: 
- **Sort**: {"acquisition.price_amount": -1}
- **Limit**: 

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

- **Query**: {category_code: "web", number_of_employees: {$gt: 4000}}
- **Projection**: 
- **Sort**: {number_of_employees: 1}
- **Limit**: 

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

- **Query**: {"acquisition.price_amount": {$gt: 10000000}}, {"acquisitions.price_currency_code": 'EUR'} 
- **Projection**: 
- **Sort**: 
- **Limit**: 

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

- **Query**: {"acquisition.acquired_month": {$lte: 3}}
- **Projection**: {name: 1, acquisitions: 1, _id: 0}
- **Sort**: 
- **Limit**: 10

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

- **Query**: {founded_year: {$gt:2000 }, founded_year: {$lt: 2010}, "acquisition.acquired_year": {$lt: 2011}}
- **Projection**: 
- **Sort**: 
- **Limit**: 