![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

	Query: { name: "Babelgum" }
	project: { name: 1, _id: 0 }

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

	Query: { number_of_employees: { $gt: 5000 } }
	Sort: {number_of_employees:1}
	Limit: 20

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

	Query: { founded_year: { $gte: 2000, $lte: 2005 }}

	project: { name: 1, founded_year: 1, _id: 0 }
**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

	 Query: { "ipo.valuation_amount": { $gt: 100000000 }, founded_year: { $lt: 2010 } }

	project:{ name: 1, ipo: 1, _id: 0 }

**5. All the companies that don't include the `partners` field.**

	Query: { partners: { $exists: false } }



**6. All the companies that have a null value on the `category_code` field.**

 	Query: { category_code: { $eq: null } }
 	project: {category_code:1, _id:0}

**7. Order all the companies by their IPO price in a descending order.**

	Query: {}
	Sort: { "ipo.valuation_amount": -1 }

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

	Query: {}
	project:{ name: 1, number_of_employees: 1, _id: 0 }

	Sort: { number_of_employees: -1 }
	Limit: 10

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

	Query: { founded_month: { $gte: 7, $lte: 12 } }

	project: {name:1,founded_month: 1, _id:0}
	Limit: 1000

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

	Query: { founded_day: { $lte: 7 }} 

	project: { name: 1, acquisition: 1, _id: 0 }
	Limit: 10

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

 	Query: { "acquisition.acquired_year": { $gt: 2010 } }

	project:{ name: 1, acquisition: 1, _id: 0 }
	Sort: { "acquisition.price_amount": -1 }

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

	Query: {}
	project: { name: 1, founded_year: 1, _id: 0 }
	Sort: { founded_year: 1 }


**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

	Query: {category_code: "web", number_of_employees: { $gt: 4000 }}
	project: { name: 1, number_of_employees: 1, _id: 0 }
	Sort: { number_of_employees: 1 }

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

	Query: { "acquisition.price_amount": { $gt: 10000000 }, "acquisition.price_currency_code": "EUR" }
	project: { name: 1, _id: 0 }

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

	Query: { founded_year: { $gte: 2000, $lte: 2010 }, "acquisition.acquired_year": { $not: { $lt: 2011 } }  }

project: { name: 1, founded_year: 1, _id: 0 }
