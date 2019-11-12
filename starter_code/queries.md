![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

```javascript
db.companies.find( { name: 'Babelgum' } )
```



### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -

```javascript
db.companies.find({ number_of_employees: { $gt: 5000  }}).limit(20).sort( { number_of_employes: 1 } )
```

->

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

<!-- Your C

```
db.companies.find({ 

$and: [ 
     			{ founded_year: {$gte: 2000}} ,
     			{ founded_year: {$lte: 2005}}
   ] 
}
, { name: 1, founded_year: 1, _id:0})
```

ode Goes Here -->

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Cod

```javascript
db.companies.find({ 

$and: [ 
     			{ "ipo.valuation_amount": {$gte: 100000000}} ,
     			{ founded_year: {$lte: 2010}}
   ] 
}
, { name: 1, ipo: 1, _id:0 })
```

e Goes Here -->

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your C

```javascript
db.companies.find({ 

$and: [ 
     			{ number_of_employees: {$lt: 1000}} ,
     			{ founded_year: {$lt: 2005}}
   ] 
}
).sort( { number_of_employes: 1 } ).limit(10)
```

ode Goes Here -->

### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes H

```
db.companies.find({partners: {$size: 0}})
```

ere -->

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Co

```javascript
db.companies.find( { category_code: { $in: [null] } } )

```

de Goes Here -->

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes

```
db.companies.find({ 

$and: [ 
     			{ number_of_employees: {$gt: 100}} ,
     			{ number_of_employees: {$lt: 1000}}
   ] 
}, { name: 1, number_of_employees: 1, _id:0 }
)
```

 Here -->

### 9. Order all the companies by their IPO price in a descending order.

<!-- Your Code G

```javascript
db.companies.find({ "ipo.valuation_amount": {$gt: 0}}).sort( { "ipo.valuation_amount": -1 } )
```

oes Here -->

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code 

```
db.companies.find({ number_of_employees: { $gt: 0  }}).sort( { number_of_employes: -1 } ).limit(10)
```

Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code

```
db.companies.find({ founded_month: {$gt: 6}}).limit(1000)
```

 Goes Here -->

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

<!-- Your Code Goes Here -->

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

<!-- Your Code Go

```
db.companies.find({  $and: [ 
		{ "ipo.valuation_amount": {$gt: 10000000}}, 
    { founded_year: {$lt: 2000}}    ]  } 
    )
```

es Here -->

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code 

```javascript
db.companies.find(
  { "acquisition.acquired_year": {$gt: 2010} },
  { name: 1, acquisition: 1, _id:0 }
).sort( { "ipo.valuation_amount": 1 })
```

Goes Here -->

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- Your Code

```javascript
db.companies.find(
  { },
  { name: 1, founded_year: 1, _id:0 }
).sort( { founded_year: 1 }) //ram error
```

 Goes Here -->

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

<!-- Your Code Goe

```javascript
db.companies.find(
{ "acquisition.acquired_day": { $gt: 7  }}
).sort( { "acquisition.price_amount": -1 } ).limit(10)
```

s Here -->

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Co

```javascript
db.companies.find({
	$and :[
{category_code:"web"},
{number_of_employees: {$gt:4000}}]
}).sort({ number_of_employees: 1})

```

de Goes Here -->

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goe

```javascript
db.companies.find({
$and: [
{ "acquisition.price_amount": { $gt:10000000}},
{ "acquisition.price_currency_code":"EUR"}
]
})
```

s Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your C

```javascript
db.companies.find(
	{ "acquisition.acquired_month": {$lte: 3}}
,{ name: 1, acquisition: 1, _id:0  }
).limit(10)
```

ode Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Co

```javascript
db.companies.find({
  $and:[
    		{founded_year: {$gte:2000}},
        {founded_year: {$lte:2010}},
       {"acquisition.acquired_year": {$gt:2011}}
       ]
})
```

de Goes Here -->
