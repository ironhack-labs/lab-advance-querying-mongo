![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

<!-- Your Query Goes Here -->
query: { "name": "Babelgum" }
project: { "name": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query: Filters documents where the "name" field is exactly "Babelgum".
project: Returns only the "name" field and excludes "_id".
sort: No sorting is needed since we are looking for an exact match.
skip: 0 (we do not skip any results).
limit: 0 (by default, returns all matching results, which in this case is just one). -->

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

<!-- Your Query Goes Here -->
query: { "number_of_employees": { "$gt": 5000 } }
project: { "name": 1, "number_of_employees": 1, "_id": 0 }
sort: { "number_of_employees": -1 }
skip: 0
limit: 20

<!-- Explanation:
query: Filters companies with more than 5000 employees ("$gt": 5000).
project: Displays only the "name" and "number_of_employees" fields, excluding "_id".
sort: Sorts in descending order (-1), from the highest to the lowest number of employees.
skip: 0 (we do not skip any results).
limit: 20 (returns only the first 20 companies). -->

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

<!-- Your Query Goes Here -->
query: { "founded_year": { "$gte": 2000, "$lte": 2005 } }
projection: { "name": 1, "founded_year": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "founded_year" is greater than or equal to 2000 ("$gte": 2000)
    AND less than or equal to 2005 ("$lte": 2005).
project: Retrieves only the "name" and "founded_year" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

<!-- Your Query Goes Here -->
query: { 
  "ipo.valuation_amount": { "$gt": 100000000 }, 
  "founded_year": { "$lt": 2010 } 
}
project: { "name": 1, "ipo": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "ipo.valuation_amount" is greater than 100,000,000 ("$gt": 100000000).
    The "founded_year" must be before 2010 ("$lt": 2010).
project: Returns only the "name" and "ipo" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**5. All the companies that don't include the `partners` field.**

<!-- Your Query Goes Here -->
query: { "partners": { "$exists": false } }
projection: { "name": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query: Filters companies where the partners field does not exist ("$exists": false).
project: Retrieves only the "name" field and excludes "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**6. All the companies that have a null value on the `category_code` field.**

<!-- Your Query Goes Here -->
query: { "category_code": null }
project: { "name": 1, "category_code": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "category_code" is null. In MongoDB, null means either:
        The field exists but has a null value.
T       he field does not exist at all.
project: Retrieves only the "name" and "category_code" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**7. Order all the companies by their IPO price in a descending order.**

<!-- Your Query Goes Here -->
query: { "ipo.valuation_amount": { "$exists": true } }
project: { "name": 1, "ipo.valuation_amount": 1, "_id": 0 }
sort: { "ipo.valuation_amount": -1 }
skip: 0
limit: 0

<!-- Explanation:
query: Filters companies where "ipo.valuation_amount" exists ("$exists": true), ensuring we only sort companies that have an IPO valuation amount.
project: Retrieves only the "name" and "ipo.valuation_amount" fields, excluding "_id".
sort: Sorts results by "ipo.valuation_amount" in descending order (-1), so the highest IPO prices appear first.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

<!-- Your Query Goes Here -->
query: { "number_of_employees": { "$exists": true } }
project: { "name": 1, "number_of_employees": 1, "_id": 0 }
sort: { "number_of_employees": -1 }
skip: 0
limit: 10

<!-- Explanation:
query: Filters companies where "number_of_employees" exists ("$exists": true), ensuring that we only consider companies with an employee count.
project: Retrieves only the "name" and "number_of_employees" fields, excluding "_id".
sort: Sorts the companies by "number_of_employees" in descending order (-1), so the companies with the most employees appear first.
skip: 0 (we do not skip any results).
limit: 10 (returns the top 10 results). -->

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

<!-- Your Query Goes Here -->
query: { "founded_month": { "$gte": 7, "$lte": 12 } }
project: { "name": 1, "founded_month": 1, "_id": 0 }
sort: { }
skip: 0
limit: 1000

<!-- Explanation:
query: Filters companies where "founded_month" is between July (7) and December (12) ("$gte": 7, "$lte": 12).
project: Retrieves only the "name" and "founded_month" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 1000 (limits the results to 1000 companies). -->

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

<!-- Your Query Goes Here -->
query: { "founded_day": { "$gte": 1, "$lte": 7 } }
project: { "name": 1, "founded_day": 1, "acquisition.acquisition_price": 1, "_id": 0 }
sort: { "acquisition.acquisition_price": -1 }
skip: 0
limit: 10

<!-- Explanation:
query: Filters companies where "founded_day" is between 1 and 7 ("$gte": 1, "$lte": 7).
project: Retrieves the "name", "founded_day", and "acquisition.acquisition_price" fields, excluding "_id".
sort: Sorts the companies by "acquisition.acquisition_price" in descending order (-1).
skip: 0 (we do not skip any results).
limit: 10 (limits the search to 10 companies). -->

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

<!-- Your Query Goes Here -->
query: { "acquisition.acquired_year": { "$gt": 2010 } }
project: { "name": 1, "acquisition": 1, "_id": 0 }
sort: { "acquisition.acquisition_amount": -1 }
skip: 0
limit: 0

<!-- Explanation:
query: Filters companies where "acquisition.acquired_year" is greater than 2010 ("$gt": 2010).
project: Retrieves only the "name" and "acquisition" fields, excluding "_id".
sort: Sorts the companies by the "acquisition.acquisition_amount" in descending order (-1), so the companies with the highest acquisition amounts appear first.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**

<!-- Your Query Goes Here -->
query: { }
project: { "name": 1, "founded_year": 1, "_id": 0 }
sort: { "founded_year": 1 }
skip: 0
limit: 0

<!-- Explanation:
query: No filter is applied, so it returns all companies.
project: Retrieves only the "name" and "founded_year" fields, excluding "_id".
sort: Sorts the companies by "founded_year" in ascending order (1), so the companies will be ordered from the earliest founded to the most recent.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

<!-- Your Query Goes Here -->
query: { "category_code": "web", "number_of_employees": { "$gt": 4000 } }
project: { "name": 1, "category_code": 1, "number_of_employees": 1, "_id": 0 }
sort: { "number_of_employees": 1 }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "category_code" is "web".
    Filters companies where "number_of_employees" is greater than 4000 ("$gt": 4000).
project: Retrieves the "name", "category_code", and "number_of_employees" fields, excluding "_id".
sort: Sorts the companies by "number_of_employees" in ascending order (1), so companies with fewer employees will appear first.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

<!-- Your Query Goes Here -->
query: { 
  "acquisition.acquisition_amount": { "$gt": 10000000 }, 
  "acquisition.currency": "EUR" 
}
project: { "name": 1, "acquisition": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "acquisition.acquisition_amount" is greater than 10,000,000 ("$gt": 10000000).
    Filters companies where "acquisition.currency" is equal to 'EUR'.
project: Retrieves the "name" and "acquisition" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

<!-- Your Query Goes Here -->
query: { 
  "founded_year": { "$gte": 2000, "$lte": 2010 }, 
  "acquisition.acquired_year": { "$gte": 2011, "$exists": true } 
}
project: { "name": 1, "founded_year": 1, "acquisition": 1, "_id": 0 }
sort: { }
skip: 0
limit: 0

<!-- Explanation:
query:
    Filters companies where "founded_year" is between 2000 and 2010 ("$gte": 2000, "$lte": 2010).
    Filters companies where "acquisition.acquired_year" is greater than or equal to 2011 ("$gte": 2011) and the acquisition field exists ("$exists": true).
project: Retrieves the "name", "founded_year", and "acquisition" fields, excluding "_id".
sort: No sorting is required.
skip: 0 (we do not skip any results).
limit: 0 (returns all matching results). -->

<br>
