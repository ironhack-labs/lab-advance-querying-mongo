![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

Q {name:{\$eq: 'Babelgum'}}
P {name : 1}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

Q {number_of_employees:{\$gt: 5000}}
P {number_of_employees :-1}
S {limit: 20}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

F {founded_year:{$lte: 2005, $gte: 2000}}
P {founded_year: 1,name: 1}
S {founded_year :1}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

F { "ipo.valuation_amount": {$gt:100000000}, founded_year:{ $lt:2005 }}
P {ipo: 1,name: 1}
S {"ipo.valuation_amount" :-1}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

F { "number_of_employees": {$gt:1000}, founded_year:{ $lt:2005 }}
P {name: 1, number_of_employees:1}
L : 10

### 6. All the companies that don't include the `partners` field.

F {partners: {\$eq:[]}}

### 7. All the companies that have a null type of value on the `category_code` field.

F {category_code: {\$eq:null}}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

F {number_of_employees:{ $gt: 100, $lt:1000}}
P {number_of_employees:1, name:1}

### 9. Order all the companies by their IPO price descendently.

S {"ipo.valuation_amount" :-1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

S {"number_of_employees" :-1}
L : 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

S {founded_month: {$gte: 4, $lte:8 }}

### 12. All the companies that have been 'deadpooled' after the third year.

NOPE

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

F {founded_year:{$lte : 2000}, "acquisition.price_amount": {$gt : 10000000} }

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

F {"acquisition.acquired_year": {\$gt : 2005} }
P {name:1 ,acquisition: 1 }
S {"acquisition.price_amount": 1}

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

F {founded_year: {\$ne:null}}
P {name:1 ,founded_year: 1 }
S {"founded_year": 1}

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

F {founded_day: {\$lte:7}}
S {"acquisition.price_amount": 1}
L 10

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

F {category_code: {$eq:'web'}, number_of_employees:{$gt:4000 }}
S {number_of_employees:1}

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

F {"acquisition.price_amount": {$gt : 10000000}, "acquisition.price_currency_code": {$eq : "EUR"} }

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

F {founded_month: {$gte: 1, $lte:4 }, acquisition: {\$ne:null}}
P {name:1 ,acquisition: 1 }

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

F {founded_year:{$gt:2005, $lt:2010}, "acquisition.acquired_year": {\$gt:2011}}
