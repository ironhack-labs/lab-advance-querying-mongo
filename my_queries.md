![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers
Database created, as well as collections in mongoDB compass. 

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

filter --> {name: "Babelgum"} 

project --> {name: 1, _id: 0}

<br> added a filter to only return requested name, and only display the specified field

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

filter --> {number_of_employees: {$gt: 5000}} 

project --> {name: 1, number_of_employees: 1, category_code: 1}

sort --> {number_of_employees: 1}

limit --> 20


<br> added filter to make sure only companies with more than 5000 employees are returned. Only displayed three fields for easy readability. Sorted in ascending order. showing only the first 20 results


**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

filter --> {founded_year: {$elemMatch:{$gte:2000,$lte:2005}}}

project --> {name: 1, founded_year: 1}

<br> filter was added to match elements that meet conditions, and the requested fields returned in addition. 

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

filter --> {$and: [{"ipo.valuation_amount": {$gt: 100000000}, founded_year: {$lt: 2010}}]}

project --> {name: 1, ipo:1}

<br> added needed filter to have valuation amounts greater than 100 000 000, for all companies founded before 2010. Only returing the specified fields. 

**5. All the companies that don't include the `partners` field.**

filter --> {partners: {$exists: false}}

<br> returning all records that do not exists or have partner fields 

**6. All the companies that have a null value on the `category_code` field.**

filter --> {category_code: {$eq: null}}

project -->  {name: 1, category_code:1}

<br> returned all null values for relevant field, limited results to two fields for readability 

**7. Order all the companies by their IPO price in a descending order.**

sort --> {"ipo.valuation_amount": -1}

<br> sorted companies in order, starting with company with the highest ipo price

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

sort --> {number_of_employees: -1}

limit --> 20

<br> sorting the number of employees from highest to lowest and only returning the first 10 results

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

filter --> {founded_month: {$gte: 7}}

limit --> 1000

<br> filter months to start from july and end in december, only returning around 1000 results/companies

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

filter --> {founded_day: {$lte: 7}}

sort --> {"acquisitions.price_amount": -1}

limit --> 10

<br> all day equal to 7 and less are returned, only the first 10 with the highest acquisition price are seen

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

filter --> {"acquisition.acquired_year": {$gte: 2010}}

sort --> {"acquisitions.price_amount": -1}

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

project --> {name:1, founded_year: 1}

sort --> {founded_year: -1}

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

filter --> {category_code: "web", number_of_employees: {$gt: 4000}}

sort --> {number_of_employees: 1}

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

filter --> {"acquisition.price_amount": {$gt: 10000000}, "acquisition.price_currency_code": "EUR"}


<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

filter --> {founded_year: {$gte: 2000},founded_year: {$lte: 2010}, 'acquisition.acquired_year':{$gt:2011}}

<br>
