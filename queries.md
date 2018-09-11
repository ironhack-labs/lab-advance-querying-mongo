![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

FILTER: {name: 'Babelgum'}
PROJECTION: {name:1,_id:0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

FILTER: {number_of_employees: {$gt:5000}}
SORT: {number_of_employees: 1} // sort by ascending
LIMIT: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

FILTER: {$and: [ {founded_year: {$gte:2000}}, {founded_year: {$lte:2005} } ]}
PROJECTION: {name:1, founded_year:1, _id:0}

### 4. All the companies that had an IPO of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

FILTER: {$and:[{"ipo.valuation_amount":{$gt:100000000}},{founded_year:{$lt:2010}}]}
PROJECTION: {name:1, founded_year:1,_id:0}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

FILTER: {$and:[{number_of_employees:{$lt:1000}},{founded_year: {$lt:2005}}]}
SORT: {number_of_employees:1}
LIMIT: 10

### 6. All the companies that don't include the `partners` field.

FILTER:  { partners: { $exists: false } }

### 7. All the companies that have a null type of value on the `category_code` field.

FILTER: {category_code: { $type: 10 } }

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

FILTER: {$and:[{number_of_employees:{$gte:100}},{number_of_employees:{$lt:1000}}]}
PROJECTION: {name:1,number_of_employees:1, _id:0}

### 9. Order all the companies by their IPO price descendently.

PROJECTION: {ipo:1,_id:0}
SORT: {ipo:-1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

SORT: {number_of_employees:-1}

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

FILTER: {founded_month:{$gte:7}}

### 12. All the companies that have been 'deadpooled' after the third year.

FILTER: {$where: 'this.deadpooled_year - this.founded_year < 3'}

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

FILTER: {$and: [ {founded_year: {$lt: 2000}} , {'acquisition.price_amount': {$gt: 10000000} } ] }

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

FILTER: {"acquisition.acquired_year": {$gt: 2015}}
PROJECTION: {name:1,acquisition:1, _id:0}

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

PROJECTION: {name: 1, founded_year: 1, _id:0}
SORT: {founded_year: 1}

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

FILTER: {founded_month: {$lte: 7}}
SORT: {"acquisitions.price_amount": -1}
LIMIT: 10

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

FILTER: {$and: [{category_code: "web"}, {number_of_employees: {$gt:4000 }}] }
SORT: {number_of_employees: 1}

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

FILTER: {$and: [{"acquisition.price_currency_code": "EUR"}, {"acquisition.price_amount": {$gt:10000000}}] }
SORT: {number_of_employees: 1}

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

FILTER: {"acquisition.acquired_month": {$lte: 3}}
SORT: {name:1,acquisition:1, _id:0}
LIMIT: 10

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

FILTER: {$and: [{founded_year:{$gte: 2000}}, {founded_year: {$lte: 2010}},{"acquisitions.acquired_year": {$gt:2011}}]}
