![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their name field.

<!-- Your Code Goes Here -->
{name: 'Babelgum'}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.

<!-- Your Code Goes Here -->
{number_of_employees: { $gt: 5000 }}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the name and founded_year fields.

<!-- Your Code Goes Here -->
{$and: [{founded_year: {$gte: 2000}}, {founded_year:{$lte: 2005}}]}

### 4. All the companies that had a IPO Valuation Amount of more than 100,000,000 and have been founded before 2010. Retrieve only the name and ipo fields.

<!-- Your Code Goes Here -->
{$and: [{'ipo.valuation_amount': {$gte: 10000000}}, {founded_year:{$lt: 2010}}]}

### 5. All the companies that don't include the partners field.

<!-- Your Code Goes Here -->
{partners: {$exists: false}}

### 6. All the companies that have a null type of value on the category_code field.


<!-- Your Code Goes Here -->
{category_code: {$type: 'null'}}

### 7. Order all the companies by their IPO price in descending order.

<!-- Your Code Goes Here -->
{'ipo.valuation_amount': -1}

### 8. Retrieve the 10 companies with most employees, order by the number of employees.

<!-- Your Code Goes Here -->
{number_of_employees: -1}

### 9. All the companies founded in the second semester of the year (July to December). Limit your search to 1000 companies.

<!-- Your Code Goes Here -->
{founded_month: {$gte: 7}}

### 10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their acquisition price in descending order. Limit the search to 10 documents.

<!-- Your Code Goes Here -->
{founded_day: {$lte: 7}}

### 11. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their name and acquisition field.

<!-- Your Code Goes Here -->
{'acquisition.acquired_year': {$gt: 2010}}

### 12. Order the companies by their founded year, retrieving only their name and founded year.

<!-- Your Code Goes Here -->
{'founded_year': {$ne: null }}

### 13. All the companies on the 'web' category that have more than 4000 employees. Sort them by the number of employees in ascending order.


<!-- Your Code Goes Here -->
{$and: [{category_code: 'web'}, {number_of_employees: {$gt: 4000}}]}

### 14.All the companies whose acquisition amount is more than 10,000,000 and the currency is 'EUR'..

<!-- Your Code Goes Here -->
{$and: [{'acquisition.price_currency_code': 'EUR'}, {'acquisition.price_amount': {$gt: 10000000}}]}

### 15. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {'acquisition.acquired_year':{$gt:2011}}]}

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Code Goes Here -->

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
