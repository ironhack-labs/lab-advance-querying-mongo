![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

NOTES: 
-Maxitems is the amount of time you're giving MongoDb to sort in milliseconds
-gte/lte - greater than or equal to/ less than or equal to
-if you're using dot notation then you have to use quotes (refer to question 4)
-exists - if this field exsists for the object or not 

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

{name:"Babelgum"}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

FILTER FIELD: {"number_of_employees":{$gt:5000}} 

SORT FIELD (by ascending): {"number_of_employees": 1} 

LIMIT FIELD: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

FILTER FIELD ($gt is greater than and $lt is less than): { $and: [ {"founded_year":{$gt:1999}}, {"founded_year":{$lt:2006}} ] }

PROJECT FIELD(means only show certain fileds...1 means true, 0 means false aka don't show): {name:1, _id:0, founded_year:1}


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

FILTER FIELD:{ $and: [ {"ipo.valuation_amount":{$gt:1000000000}}, {"founded_year":{$lt:2010}} ] }

PROJECT FIELD: {ipo:1, name:1}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

FILTER FIELD: { $and: [ {number_of_employees:{$lt:1000}}, {founded_year:{$lt:2005}} ] }

PROJECT FIELD: {founded_year:1, name:1, number_of_employees:1}

LIMIT FIELD: 10

### 6. All the companies that don't include the `partners` field. - trick question

FILTER FIELD: {partners: {$exists: false}}

PROJECT FIELD: {name:1, partners: 1}

### 7. All the companies that have a null type of value on the `category_code` field.

FILTER FIELD: {category_code: null}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

FILTER FIELD: { $and: [ {number_of_employees:{$gte:100}}, {number_of_employees:{$lt:1000}} ] } 

PROJECT FIELD: {name:1, number_of_employees:1, _id: 0}

### 9. Order all the companies by their IPO price in a descending order.

SORT FIELD: {"ipo.valuation_amount":-1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

PROJECT FIELD: {name: 1, number_of_employees: 1}

SORT FIELD: {"ipo.valuation_amount":-1}

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

FILTER FIELD: { $and: [ {founded_month:{$gte:4}}, {founded_month:{$lte:6}} ] }

PROJECT: {name: 1, founded_month: 1}

LIMIT FIELD: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

FILTER FIELD:  { $and: [ {"acquisition.price_amount":{$gt:10000000}}, {founded_year:{$lt:2000}} ] }

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code Goes Here -->

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

FILTER FIELD: {founded_year: {$ne:null}}

PROJECT FIELD: {founded_year: 1, name: 1}

SORT FIELD: {founded_year:1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

FILTER FIELD: { $and: [ {founded_day: {$lte: 7}}, {founded_day: {$ne:null}} ] } 

PROJECT FIELD: {name: 1, founded_day:1}


### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

FILTER FIELD: { $and: [ {number_of_employees: {$gt: 4000}}, {category_code: "web"} ] } 

PROJECT FIELD: {number_of_employees: 1}
### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.
FILTER FIELD:  { $and: [ {"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"} ] } 

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

FILTER FIELD: {"acquisition.acquired_month": {$lte:3}}

PROJECT FIELD: {name: 1, "acquisition.acquired_month": 1}

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

FILTER FIELD: { $and: [ {founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$gte:2011}} ] } 


