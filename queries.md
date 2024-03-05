![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

Query:
Project:
Sort: 
Skip: 
Limit:

## Iteration 2

**1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.**

Query: {name: "Babelgum"}
Project: {name: 1}

<br>

**2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by *number of employees*.**

Query: {number_of_employees: {$gt: 5000}}
Sort: {number_of_employees: 1}
Limit: 20

<br>

**3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.**

Query: {founded_year: {$gte: 2000, $lte: 2005}}
Project: {name: 1, founded_year: 1, _id: 0}

<br>

**4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.**

Query: {$and: [{founded_year: {$lt: 2010}}, {"ipo.valuation_amount": {$gt: 1000000000}}]}
Project: {name: 1, ipo: 1, _id: 0}

<br>

**5. All the companies that don't include the `partners` field.**

Query: {partners: {$exists: false}}

<br>

**6. All the companies that have a null value on the `category_code` field.**

Query: {category_code: null}
<!-- Preguntar a Jorge porque este query estaría mal. La respuesta correcta es {category_code: {$type: 'null'}}, pero los dos queries me dan el mismo número de resultados -->

<br>

**7. Order all the companies by their IPO price in a descending order.**

Query: {"ipo.valuation_amount": {$exists: true}} <!-- No tendría que haber hecho este query porque nos pide ordenar todas las compañías, también las que no tienen esta propiedad -->
Sort: {"ipo.valuation_amount": -1}

<br>

**8. Retrieve the 10 companies with most employees, order by the `number of employees`.**

Sort: {number_of_employees: -1}
Limit: 10

<br>

**9. All the companies founded on the second semester of the year (July to December). Limit your search to 1000 companies.**

Query: {founded_month: {$gte: 7, $lte: 12}}
Limit: 1000

<br>

**10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.**

Query: {founded_day: {$lte: 7}}
Sort: {"acquisition.price_amount": -1}
Limit: 10

<br>

## Iteration 3 (Bonus)

**1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.**

Query: {"acquisition.acquired_year": {$gt: 2010}}
Project: {name: 1, _id: 0, acquisition: 1}
Sort: {"acquisition.price_amount": -1}

<br>

**2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.**


Project: {name: 1, founded_year: 1, _id: 0}
Sort: {founded_year: -1} <!-- cuando no especifica en qué orden hay que ordenar, ¿se entiende siempre que es de menor a mayor? Pregunta para Jorge. Y otra pregunta: en este query ha hecho un filtro para eliminar los documentos cuyo founded year es null, pero en el query 7 no ha hecho lo mismo para eliminar las que tenían ipo null. Qué práctica es mejor, ¿quitar o mantener los documentos que no tienen una propiedad por la que estamos ordenando? -->

<br>

**3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.**

Query: {$and: [{category_code: "web"}, {number_of_employees: {$gt: 4000}}]}
Sort: {number_of_employees: 1}

<br>

**4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.**

Query: {$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"}]}

<br>

**5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.**

Query: {$and: [{founded_year: {$gte: 2000, $lte: 2010}, "acquisition.acquired_year": {$gt: 2011}}]}

<br>
