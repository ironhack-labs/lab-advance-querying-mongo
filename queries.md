![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

### Todas las empresas cuyo nombre coincida con 'Babelgum'. Recupera sólo su campo `name`.

<!-- Your Code Goes Here -->

{name: 'Babelgum'}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

### Todas las empresas que tengan más de 5000 empleados. Limite la búsqueda a 20 empresas y ordénelas por número de empleados .

<!-- Your Code Goes Here -->

filter: { number_of_employees: {$gt: 5000} }
project: {number_of_employees: 1}
sort: {number_of_employees: -1}
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

### Todas las empresas fundadas entre 2000 y 2005, ambos años incluidos. Recupere sólo los campos `name` y `founded_year`.

<!-- Your Code Goes Here -->

filter: { founded_year: {$gte: 2000, $lte: 2005} }
project: {name: 1, founded_year: 1, \_id: 0}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

### Todas las empresas que tuvieron un Importe de Valoración de IPO superior a 100.000.000 y han sido fundadas antes de 2010. Recuperar sólo los campos `name` y `ipo`.

<!-- Your Code Goes Here -->

filter: {$and: [{'ipo.valuation_amount': {$gt: 100000000} }, {founded_year: {$lt: 2010} }]};
project: {name: 1, ipo: 1, \_id: 0};

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

### Todas las empresas que tengan menos de 1000 empleados y hayan sido fundadas antes de 2005. Ordénalas por número de empleados y limita la búsqueda a 10 empresas.

<!-- Your Code Goes Here -->

filter: {$and: [ { number_of_employees: {$lt: 1000} }, { founded_year: {$lt: 2005} } ] }
sort: {number_of_employees:1}
limit: 10

### 6. All the companies that don't include the `partners` field.

### Todas las empresas que no incluyen el campo `partners`.

<!-- Your Code Goes Here -->

filter: {partners: {$exists: false} }

### 7. All the companies that have a null type of value on the `category_code` field.

### Todas las empresas que tienen un tipo de valor nulo en el campo `category_code`.

<!-- Your Code Goes Here -->

filter: {category_code: null}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

### Todas las empresas que tienen al menos 100 empleados pero menos de 1000. Recupere solo los campos `name` y `number of employees`.

<!-- Your Code Goes Here -->

filter: { number_of_employees: {$gte: 100, $lte: 1000} }
project: {name: 1, number_of_employees: 1, \_id: 0}

### 9. Order all the companies by their IPO price in a descending order.

### Ordene todas las empresas por su precio de salida a bolsa en orden descendente.

<!-- Your Code Goes Here -->

sort: {'ipo.price': -1}

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`.

### Recuperar las diez empresas con más empleados, ordenadas por `number of employees`.

<!-- Your Code Goes Here -->

sort: {number_of_employees: -1}
limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

### Todas las empresas fundadas en el segundo semestre del año. Limite su búsqueda a 1000 empresas.

<!-- Your Code Goes Here -->

{founded_month: {$gte: 7, $lte: 12} }
limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

### Todas las empresas fundadas antes del año 2000 que tengan un importe de adquisición superior a 10.000.000

<!-- Your Code Goes Here -->

{$and: [{founded_year: {$lt: 2000} },{"acquisition.price_amount": {$gt: 10000000} }]}

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

### Todas las empresas que han sido adquiridas después de 2010, se ordenan por monto de adquisición y se recuperan solo sus campos `name` y `acquisition`.

<!-- Your Code Goes Here -->

filter: {"acquisition.acquired_year": {$gt: 2010} }
project: {name: 1, acquisition: 1, \_id: 0}
sort: {"acquisition.price_amount": -1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

### Ordene las empresas por su `founded year`, recuperando solo su `name` y `founded year`.

<!-- Your Code Goes Here -->

project: {name: 1, founded_year: 1, \_id: 0}
sort: {founded_year: 1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

### Todas las empresas que hayan sido constituidas los siete primeros días del mes, incluido el séptimo. Ordenarlos por su orden descendente `acquisition price`. Limite la búsqueda a 10 documentos.

<!-- Your Code Goes Here -->

filter: {founded_day: {$gte: 1, $lte: 7} }
sort: {"acquisitions.price_amount": -1}
limit: 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

### Todas las empresas de la 'web' `category` que tienen más de 4000 empleados. Ordenarlos por el número de empleados en orden ascendente.

<!-- Your Code Goes Here -->

<!-- no se donde esta la categoria web en la base de datos -->

sort: {number_of_employees: 1}

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

### Todas las empresas cuyo importe de adquisición sea superior a 10.000.000 y la moneda sea 'EUR'.

<!-- Your Code Goes Here -->

filter: {$and: [ {"acquisition.price_amount": {$gt: 10000000} }, {"acquisition.price_currency_code": "EUR"} ] }

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

### Todas las empresas que han sido adquiridas en el primer trimestre del año. Limite la búsqueda a 10 empresas y recupere solo sus campos `name` y `acquisition`.

<!-- Your Code Goes Here -->

filter: {"acquisition.acquired_month": {$gte: 1, $lte: 3} }
project: {name: 1, acquisition: 1, \_id: 0}
limit: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

### Todas las empresas que hayan sido fundadas entre 2000 y 2010, pero que no hayan sido adquiridas antes de 2011.

<!-- Your Code Goes Here -->

filter: {$and: [ {founded_year: {$gte: 2000, $lte: 2010} }, {"acquisition.acquired_year": {$lt: 2011} } ]}
