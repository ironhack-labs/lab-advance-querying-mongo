![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

{name:'Babelgum'}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

{number_of_employees: {$gt:5000}}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

{$and : [{founded_year: {$gt:2000}}, {founded_year:{$lt:2005}}]}
{name: 1, founded_year: 1}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

{$and : [{"ipo.valuation_amount": {$gte:100000000}}, {founded_year:{$lt:2010}}]}
{name: 1, ipo: 1}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

{$and: [{founded_year: {$lt: 2005}}, {number_of_employees: {$lt: 1000}]}
{number_of_employees: -1}

### 6. All the companies that don't include the `partners` field.

{partners: {$exists: false}}

### 7. All the companies that have a null type of value on the `category_code` field.

{category_code: {$type: 'null'}}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

{$and: [{number_of_employees: {$gte: 100}}, {number_of_employees: {$lte: 100}}]}
{name: 1, number_of_employeees: 1, _id: 0}

### 9. Order all the companies by their IPO price in a descending order.

{$and [${ipo: {$ne: null}}, "ipo.valuation_amount": {$ne: null}]}
{ipo: 1}
sort=>  {'ipo.valueation_amount': -1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`


sort=>  {number_of_employees: -1}

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

{$and: [{founded_month: {$gte: 6}}, {founded_month: {$ne: null}}]}

### 12. All the companies that have been 'deadpooled' after the third year. -->

{$and: [{$where: "this.deadpooled_year" > this.founded_year"}, {deadpooled_year: {$ne: null}}]}

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000



### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

{$and: [{founded_year: {$gt: 2000}}, {"ipo_valuation_amount": {$gt: 10000000}}]}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

{founded_year: {$ne: null}}
{name: 1, founded_year: 1}
sort=> {founded_year: 1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

{$and: [{founded_day: {$lt: 8}}, founded_day: {$ne: null}]}

sort=> {'aquistion.price_amount': 1}

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Code Goes Here -->


### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.
<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
