![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->

Query: {name:"Babelgum"}
project {name:1,\_id:0}

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by _number of employees_.**

<!-- Your Query Goes Here -->

Sort: {number_of_employees:1}
Query: {number_of_employees: { $gt: 5000 }}
Limit: 20

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

<!-- Your Query Goes Here -->

Query: {$and:[{founded_year:{$gte:2000}},{founded_year:{$gte:2005}}]}
Project: {name:1,founded_year:1,\_id:0}

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

<!-- Your Query Goes Here -->

Query: {$and:[{"ipo.valuation_amount":{$gt:100000000}},{founded_year:{$lt:2010}}]}
Project: {name:1,ipo:1,\_id:0}

<br>

**5. All the companies that don't include the `partners` field.**

<!-- Your Query Goes Here -->

Query: {partners: {$exists: false}}

<br>

**6. All the companies that have a null value on the `category_code` field.**

<!-- Your Query Goes Here -->

Query: {category_code:{$type: 'null'}}

<br>

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->

Sort: {'ipo.valuation_amount':-1}

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

<!-- Your Query Goes Here -->

Query: {number_of_employees:{ $exists: true } }
Sort: {'number of employees':-1}
limit: 10

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

<!-- Your Query Goes Here -->

Query: {founded_month: {$gte: 7}}
Limit 1000

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->

Sort: {'acquisition.price_amount': -1}
Query: {founded_day: {$lte: 7}}
Limit: 10

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->

<br>
