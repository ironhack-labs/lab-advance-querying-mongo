![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

#### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

```
collection.find(
    { name: "Babelgum" },
    { name: 1, _id: 0 }
)
```

---

#### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

```
collection.find(
    { number_of_employees: {$gt: 5000} }
)
.limit(20)
.sort( {employees: 1} )
```

---

#### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

```
collection.find(
    { founded_year: {$gte: 2000, $lte: 2005} },
    { name: 1, founded_year: 1, _id: 0 }
)
```

---

#### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

```
collection.find(
    { "ipo.valuation_amount": {$gte: 100000000}, founded_year: {$lt:2010} },
    { name: 1, ipo: 1, _id: 0 }
)
```

---

#### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

```
collection.find(
    { number_of_employees: {lt: 1000}, founded_year: {$lt: 2005} }
)
.limit(10)
.sort({ employees: 1 })
```

---

#### 6. All the companies that don't include the `partners` field.

```
collection.find(
    { partners: {$exists: false} }
)
```

---

#### 7. All the companies that have a null type of value on the `category_code` field.

```
collection.find(
    { category_code: null }
)
```

---

#### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

```
collection.find(
    { number_of_employees: {$gte: 100, $lt: 1000} },
    { name: 1, employees: 1, _id: 0 }
)
```

---

#### 9. Order all the companies by their IPO price in a descending order.

```
collection.find()
.sort({ "ipo.valuation_amount": -1 })
```

---

#### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

```
collection.find()
.sort({ number_of_employees: 1 })
.limit(10);
```

---

#### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

```
collection.find(
    { founded_month: {$gt: 6} }
)
.limit(1000)
```

---

#### 12. All the companies that have been 'deadpooled' after the third year. -->

```
collection.find(
    { $and: [ 
        {founded_year: {$ne: null}}, 
        {$where: "this.deadpooled_year - this.founded_year > 3"} 
    ] }
)
```

---

#### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

```
collection.find(
    { founded_year: {$gt: 2000}, "acquisition.price_amount": {$gt: 10000000} }
)
```

---

#### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

```
collection.find(
    { "acquisition.acquired_year": {$gt: 2010} },
    { name: 1, acquisition: 1, _id: 0}
)
.sort({ "acquisition.price_amount": 1 })
```

---

#### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

```
collection.find(
    {},
    { name: 1, founded_year: 1, _id: 0 }
)
.sort({ founded_year: 1 })
```

---

#### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

```
collection.find(
    { founded_day: {$lte: 7} }
)
.sort({ acquisition_price: -1 })
.limit(10)
```

---

#### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

```
collection.find(
    { category_code: "web", number_of_employees: {$gt: 4000} }
)
.sort({ number_of_employees: 1 })
```

---

#### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

```
collection.find(
    { "acquisition.price_amount": {$gt: 10000000}, "acquisition.price_currency_code": "EUR"  }
)
```

---

#### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

```
collection.find(
    { "acquisition.acquired_month": {$lte: 3} },
    { name: 1, acquisition: 1, _id: 0 }  
)
.limit(10)
```

---

#### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

```
collection.find(
    { $and: [ 
        {founded_year: {$gte: 2000, $lte: 2010}}, 
        {$or: [
            {"acquisition.acquired_year": {$gte: 2011}}, 
            {acquisition: {$type: "null"}}
        ] } 
    
    ] }
)
```

---
