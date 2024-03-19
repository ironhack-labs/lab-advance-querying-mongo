![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

query: {name : 'Babelgum'}
projection: {_id: 0 , name: 1 }
sort:
skip:
limit:

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**


query: { number_of_employees : {$gt: 50000} }
projection: 
sort: {number_of_employees : -1}
skip: 
limit:20


<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

query: { $and: [{founded_year : {$gte : 2000 }},  {founded_year : {$lte: 2005}}]}
projection: {_id:0 ,name: 1, founded_year:1}
sort: 
skip: 
limit:
<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

query: { $and: [{ "ipo.valuation_amount": { $gt: 100000000 } }, { founded_year: { $lt: 2010 } }] }
projection: {_id:0,name:1,ipo:1}
sort: 
skip: 
limit:
<br>

**5. All the companies that don't include the `partners` field.**

query: {partners:{$exists: false}}
projection: 
sort: 
skip: 
limit:

<br>

**6. All the companies that have a null value on the `category_code` field.**

query:  { partners: { $exists: true, $eq: [] } }
projection: 
sort: 
skip: 
limit:

<br>

**7. Order all the companies by their IPO price in a descending order.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

query: {name : 'Babelgum'}
projection: {_id: 0 , name: 1 }
sort: 
skip: 
limit:
<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

query: { number_of_employees : {$gt: 50000} }
projection: 
sort: {number_of_employees : -1}
skip: 
limit:20

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

query: 
projection: 
sort: 
skip: 
limit:

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

query: 
projection: 
sort: 
skip: 
limit:

<br>
