![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->

Query: {name: 'Babelgum'}
Projection: {name: 1, _id: 0}

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

<!-- Your Query Goes Here -->
- Query: `{number_of_employees: { $gt: 5000 }}`
- Limit: `20`

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

- Query: `{$and: [{founded_year: {$gte: 2000}}, {founded_year:{$lte: 2005}}]}`
- Projection: `{name: 1, _id: 0, founded_year: 1}`

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

- Query: `{$and: [{'ipo.valuation_amount': {$gte: 10000000}}, {founded_year:{$lt: 2010}}]}`
    - Shorthand: `{founded_year: {$lt:2010}, "ipo.valuation_amount": {$gt: 100000000}}`
- Projection: `{name: 1, _id: 0, ipo: 1}`

<br>

**5. All the companies that don't include the `partners` field.**

- Query: `{partners: {$exists: false}}`
<br>

**6. All the companies that have a null value on the `category_code` field.**

- Query: `{category_code: {$type: 'null'}}`

<br>

**7. Order all the companies by their IPO price in a descending order.**

- Sort: `{'ipo.valuation_amount': -1}`

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

- Query: `{ number_of_employees: { $exists: true } }`
- Sort:  `{number_of_employees: -1}

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**


- Query: `{founded_month: {$gte: 7}}`
- Limit: `1000`
<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

- Query: `{founded_day: {$lte: 7}}`
- Sort: `{'acquisition.price_amount': -1}`
- Limit: `10`

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

- Query: `{'acquisition.acquired_year': {$gt: 2010}}`
- Projection: `{name: 1, acquisition: 1, _id: 0}`
- Sort: `{'acquisition.price_amount': -1}`

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**
- Query: `{'founded_year': { '$ne': null }}`
- Projection: `{name: 1, founded_year: 1, _id: 0}`
- Sort: `{founded_year: 1}`

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

- Query: `{$and: [{category_code: 'web'}, {number_of_employees: {$gt: 4000}}]}`
- Sort: `{number_of_employees: 1}`
<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**
- Query: `{$and: [{'acquisition.price_currency_code': 'EUR'}, {'acquisition.price_amount': {$gt: 10000000}}]}`

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

- Query: `{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {'acquisition.acquired_year':{$gt:2011}}]}`

<br>
