![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->

<br> 
query: { name: "Babelgum" }
projection: { name: 1, _id: 0 }

    


**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

<!-- Your Query Goes Here -->

<br> 
query: { number_of_employees: { $gt: 5000 } }
sort: {number_of_employees: -1}
limit:20

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

<!-- Your Query Goes Here -->

<br>
query: {founded_year: {$gte: 2000, $lte: 2005}}
projection: { name: 1, founded_year: 1, _id: 0 }


**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

<!-- Your Query Goes Here -->

<br>
query: {"ipo.valuation_amount": {$gt: 100000000},founded_year: {$lt: 2010}}
projection: { name: 1, ipo: 1, _id: 0 }


**5. All the companies that don't include the `partners` field.**

<!-- Your Query Goes Here -->

<br>
query: {partners: {$exists: false}}

**6. All the companies that have a null value on the `category_code` field.**

<!-- Your Query Goes Here -->

<br>
query: {category_code: {$type: "null"}}

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->

<br>
query:query: { "ipo.valuation_amount": { $type: "number" }}
projection:  { name: 1, "ipo.valuation_amount": 1, _id: 0 } 
sort: {'ipo.valuation_amount': -1}


**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

<!-- Your Query Goes Here -->

<br>
query: { number_of_employees: { $exists: true }}
projection: { name: 1, number_of_employees: 1, _id: 0 }
sort: {'number_of_employees': -1}
limit:20

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

<!-- Your Query Goes Here -->

<br>
query: {founded_month: {$gte: 7, $lte:12}}
projection: { name: 1, founded_month: 1, founded_year: 1, _id: 0 }
limit: 1000

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->

<br>
query: { founded_day: { $gte: 1, $lte: 7 }}
projection: { name: 1, founded_day: 1, "acquisition.price_amount": 1, _id: 0 }
sort: { "acquisition.price_amount": -1 }
limit: 10

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->

<br>
query: { "acquisition.acquired_year": { $gt: 2010 }}
projection: { name: 1, acquisition: 1, _id: 0 }
sort: { "acquisition.price_amount": -1 }


**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->

<br>
query: {'founded_year': { '$ne': null }}
projection: { name: 1, founded_year: 1, _id: 0 }
sort: {founded_year: 1}


**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->

<br>
query: {category_code: "web", number_of_employees: {$gt: 4000}}
sort: {number_of_employees: 1}



**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->

<br>
query: { "acquisition.price_amount": { $gt: 10000000}, 'acquisition.price_currency_code': 'EUR'}

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->

<br>
query: {founded_year: {$gte: 2000, $lte:2010} , "acquisition.acquired_year": {$gte:2011}}
