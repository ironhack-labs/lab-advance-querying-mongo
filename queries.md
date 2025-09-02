![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

- Query: 
  - `{name: {$eq: "Babelgum"}}`
  - `{name: "Babelgum"}`
- Options:
  - Project: `{name: 1}`

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

- Query: 
  - `{number_of_employees: {$gt: 5000}}`
- Options:
  - Limit: `20`
  - Sort: `{number_of_employees: -1}`

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

- Query: 
  - `{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}] }`
- Options:
  - Project: `{name: 1, founded_year: 1}`

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

- Query: 
  - `{"ipo.valuation_amount": {$gte: 100}, founded_year: {$lt: 2010}}`
  - `{$and: [{"ipo.valuation_amount": {$gte: 100}}, {founded_year: {$lt: 2010}}]}`
- Options:
  - Project: `{name: 1, ipo: 1}`

<br>

**5. All the companies that don't include the `partners` field.**

- Query: 
  - `{partners: {$exists: false}}`
- Options:

<br>

**6. All the companies that have a null value on the `category_code` field.**

- Query: 
  - `{category_code: {$eq: null}}`
- Options:

<br>

**7. Order all the companies by their IPO price in a descending order.**

- Query: 
  - `{"ipo.valuation_amount": {$gte: 0}}`
  - `{ipo: {$exists: true}, "ipo.valuation_amount": {$gte: 0}}`
  - `{$and: [{ipo: {$exists: true}}, {"ipo.valuation_amount": {$gte: 0}}]}`
  - ` `
- Options:
  - Sort: `{"ipo.valuation_amount": -1}`

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

- Query: 
  - `{number_of_employees: {$gte: 0}}`
- Options:
  - Sort: `{number_of_employees: -1}`
  - Limit: `10`

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

- Query: 
  - `{$and: [{founded_month: {$gte: 7}}, {founded_month: {$lte: 12}}]}`
  - `{founded_month: {$gte: 7}}`
- Options:
  - Limit: `1000`

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

- Query: 
  - `{founded_day: {$lte: 7}}`
- Options:
  - Sort: `{"acquisition.price_amount": -1}`
  - Limit: `10`

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

- Query: 
  - `{"acquisition.acquired_year": {$gte: 2010}}`
- Options:
  - Project: `{name: 1, acquisition: 1}`
  - Sort: `{"acquisition.price_amount": -1}`

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

- Query: 
  - `{founded_year: {$gte: 0}}`
- Options:
  - Project: `{name: 1, founded_year: 1}`
  - Sort: `{founded_year: 1}`

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

- Query: 
  - `{category_code: {$eq: "web"}, number_of_employees: {$gte: 4000}}`
  - `{category_code: "web", number_of_employees: {$gte: 4000}}`
  - `{$and: [{category_code: {$eq: "web"}}, {number_of_employees: {$gte: 4000}}]}`
- Options:
  - Sort: `{number_of_employees: 1}`

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

- Query: 
  - `{"acquisition.price_amount": {$gte: 10000000}, "acquisition.price_currency_code": {$eq: "EUR"}}`
  - `{"acquisition.price_amount": {$gte: 10000000}, "acquisition.price_currency_code": "EUR"}`
  - `{$and: [{"acquisition.price_amount": {$gte: 10000000}}, {"acquisition.price_currency_code": {$eq: "EUR"}}]}`
- Options:

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

- Query: 
  - `{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$not: {$lte: 2011}}} ]}`
  - `{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}], "acquisition.acquired_year": {$not: {$lte: 2011}}}`
- Options:

<br>
