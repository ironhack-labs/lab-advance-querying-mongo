![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->
query: { name: "Babelgum" }
projection: { name: 1, _id: 0 }


<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

<!-- Your Query Goes Here -->
query: { number_of_employees: { $gt: 5000 } }
projection: { name: 1, number_of_employees: 1, _id: 0 }
sort: { number_of_employees: -1 }
limit: 20

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

<!-- Your Query Goes Here -->
query: { founded_year: { $gte: 2000, $lte: 2005 } }
projection: { name: 1, founded_year: 1, _id: 0 }


<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

<!-- Your Query Goes Here -->
query: { "ipo.valuation_amount": { $gt: 100000000 }, founded_year: { $lt: 2010 } }
projection: { name: 1, ipo: 1, _id: 0 }


<br>

**5. All the companies that don't include the `partners` field.**

<!-- Your Query Goes Here -->
query: { partners: { $exists: false } }


<br>

**6. All the companies that have a null value on the `category_code` field.**

<!-- Your Query Goes Here -->
query: { category_code: null }



<br>

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->
query: {}
sort: { "ipo.valuation_amount": -1 }

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

<!-- Your Query Goes Here -->
query: {}
projection: { name: 1, number_of_employees: 1, _id: 0 }
sort: { number_of_employees: -1 }
limit: 10


<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

<!-- Your Query Goes Here -->
query: { founded_month: { $gte: 7, $lte: 12 } }
limit: 1000


<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->
query: { founded_day: { $gte: 1, $lte: 7 } }
sort: { "acquisition.price_amount": -1 }
limit: 10


<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->
query: { "acquisition.acquired_year": { $gt: 2010 } }
projection: { name: 1, acquisition: 1, _id: 0 }
sort: { "acquisition.price_amount": -1 }


<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->
query: {}
projection: { name: 1, founded_year: 1, _id: 0 }
sort: { founded_year: 1 }


<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->
query: { category_code: "web", number_of_employees: { $gt: 4000 } }
sort: { number_of_employees: 1 }


<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->
query: { "acquisition.price_amount": { $gt: 10000000 }, "acquisition.price_currency_code": "EUR" }


<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->
query: { founded_year: { $gte: 2000, $lte: 2010 }, "acquisition.acquired_year": { $gte: 2011 } }


<br>
