![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

FILTER : { name: "Babelgum"}
PROJECT : {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

FILTER : {number_of_employees: {$gt: 5000} }  
SORT : {number_of_employees:1}
MAXITEMS : 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

FILTER : { $and : [ {founded_year : {$gte: 2000}}, {founded_year : {$lte: 2005}} ] }
PROJECT : {name : 1, founded_year : 1, _id : 0}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

travail prélim : { ipo : { $ne : null} } pour enfin trouver comment est foutue cette satanée clef

FILTER : { $and : [ {founded_year : {$lt: 2010}}, {"ipo.valuation_amount": {$gt: 100000000}} ]}
PROJECT : {name : 1, ipo : 1, _id: 0}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

FILTER : {$and: [{number_of_employees : {$lt : 1000}}, {founded_year: {$lt : 2005}}] }
PROJECT : {number_of_employees: 1}
LIMIT : 10

### 6. All the companies that don't include the `partners` field.

FILTER : {partners : {$exists: false}}
OU (parce que comme je n'en trouvais pas j'ai vraiment cherché) : {partners : {$eq: null}}

### 7. All the companies that have a null type of value on the `category_code` field.

FILTER : {category_code : {$eq: null}}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

FILTER : {$and: [{number_of_employees: {$gt: 100}}, {number_of_employees: {$lt: 1000}} ]}
{name: 1, number_of_employees: 1, _id : 0}

### 9. Order all the companies by their IPO price in a descending order.

SORT : {"ipo.valuation_amount" : -1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

FILTER : {founded_month: {$gt: 6}}
LIMIT : 1000

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

<!-- Your Code Goes Here -->

### 12BIS. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

FILTER : {$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000}} ]}

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

FILTER : {"acquisition.acquired_year": {$gt: 2010}}
PROJECT : {name: 1, "acquisition.price_amount": 1, _id: 0}
SORT : {"acquisition.price_amount": 1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

(je n'enlève pas celles qui n'ont pas d'année parce qu'on ne me le demande pas)
PROJECT : {name: 1, founded_year: 1, _id:0}
SORT : {founded_year: 1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

FILTER : {founded_day: {$lt:8}}
SORT : {"acquisition.price_amount": -1}
LIMIT : 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

FILTER : {$and: [{category_code: {$eq:"web"}}, {number_of_employees: {$gt: 4000}}]}
SORT : {number_of_employees: 1}


### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

FILTER : {$and: [{"acquisitions.price_amount": {$gt: 10000000}},{"acquisition.price_currency_code": {$eq: "EUR"}}]}

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

FILTER : {founded_month: {$lt: 4}}
PROJECT : {name: 1, acquisition: 1, _id: 0}
LIMIT : 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

{$and: [{founded_year: {$gt: 2000}}, {founded_year: {$lt: 2010}}, {"acquisition.acquired_year": {$gt: 2010}} ]}<!-- Your Code Goes Here -->
