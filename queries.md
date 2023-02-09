![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->

- **QUERY**: `{name:“Bebelgum”}`
- **PROJECT**:
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

- **QUERY**: `{ number_of_employees : { $gte: 5000 } }`
- **PROJECT**:
- **SORT**: ``
- **LIMIT**: `20`
- **SKIP**: ``

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

- **QUERY**: `{ $and: [{ founded_year : { $gte: 2000 } }, { founded_year : { $lte: 2005 } }]}`
- **PROJECT**:`{ founded_year: 1, name: 1 }`
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

- **QUERY**: `{ $and: [{ "ipo.valuation_amount" : { $gte: 100000000 } }, { founded_year : { $lte: 2010 } }]}`
- **PROJECT**: `{ name: 1, 'ipo': 1}`
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

- **QUERY**: `{ $and: [{ founded_year : { $lt: 2005 } }, { number_of_employees: { $lte: 1000 } }]}`
- **PROJECT**: ``
- **SORT**: `{ number_of_employees: -1}`
- **LIMIT**: `10`
- **SKIP**: ``

### 6. All the companies that don't include the `partners` field.

- **QUERY**: `{ 'partners': [] }`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 7. All the companies that have a null type of value on the `category_code` field.

- **QUERY**: `{ 'category_code': null }`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

- **QUERY**: `{$and: [{ number_of_employees : {$gte: 100} }, { number_of_employees :{$lt: 1000} }]}`
- **PROJECT**: `{ name: 1, number_of_employees: 1}`
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 9. Order all the companies by their IPO price in a descending order.

?????

- **QUERY**: ``
- **PROJECT**: `{'ipo.valuation_amount': -1}`
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

- **QUERY**: ``
- **PROJECT**: ``
- **SORT**: `{ number_of_employees : -1 }`
- **LIMIT**: `10`
- **SKIP**: ``

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

- **QUERY**: `{$and: [{ founded_month: { $gte: 2 } }, { founded_month: { $lte: 6 } }]}`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: `1000`
- **SKIP**: ``

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

- **QUERY**: `{$and: [{ 'acquisition.price_amount': { $gte: 10000000 } }, { founded_year: { $lte: 2000 } }]}`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

- **QUERY**: `{ 'acquisition.acquired_year': { $gte: 2010 } }`
- **PROJECT**: `{ name: 1, acquisition: 1 }`
- **SORT**: `{ 'acquisition.price_amount': -1 }`
- **LIMIT**: ``
- **SKIP**: ``

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

- **QUERY**: `{ founded_year : { $ne: null } }`
- **PROJECT**: `{ name:1, founded_year: 1}`
- **SORT**: `{ founded_year: 1 } `
- **LIMIT**: ``
- **SKIP**: ``

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

- **QUERY**: `{$and: [{ founded_day: { $gte: 1 } }, { founded_day: { $lte: 7 } }]}`
- **PROJECT**: ``
- **SORT**: `{ 'acquisition.price_amount': -1 }`
- **LIMIT**: `10`
- **SKIP**: ``

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

- **QUERY**: `{$and: [{ category_code: 'web' }, { number_of_employees: { $gte: 4000 } }]}`
- **PROJECT**: ``
- **SORT**: `{number_of_employees: -1}`
- **LIMIT**: ``
- **SKIP**: ``

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

- **QUERY**: `{$and: [{ 'acquisition.price_amount': { $gte: 10000000 } }, { 'acquisition.price_currency_code': 'EUR' }]}`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

- **QUERY**: `{$and: [{ 'acquisition.acquired_month': { $gte: 1 } }, { 'acquisition.acquired_month': { $lte: 3 } }]}`
- **PROJECT**: `{ name: 1, acquisition: 1}`
- **SORT**: ``
- **LIMIT**: `10`
- **SKIP**: ``

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

- **QUERY**: `{ founded_year : { $gte: 2000, $lte: 2010 },'acquisition.acquired_year': { $lte: 2011 } }`
- **PROJECT**: ``
- **SORT**: ``
- **LIMIT**: ``
- **SKIP**: ``
