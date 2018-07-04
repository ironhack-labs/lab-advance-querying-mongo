![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
Filter: {name:'Babelgum'}
Project: {name:1,_id:0} 
Sort:
Limit:
Skip:

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
Filter: {number_of_employees: {$gt:5000}}
Project: 
Sort: {number_of_employees:1}
Limit:20
Skip:

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.
Filter: {$and:[ {founded_year : { $gte:2000}},{founded_year : {$lte: 2005}}]}
Project: {name:1,founded_year:1,_id:0}
Sort:
Limit:
Skip:

### 4. All the companies that had an IPO of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
Filter: {$and :[{'ipo.valuation_amount':{$gt: 100000000}}, {founded_year:{$lt:2010}}]}
Project: name:1,ipo:1,_id:0}
Sort:
Limit:
Skip:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
Filter: {$and:[{number_of_employees:{$lt:1000 }},{founded_year :{$lt:2005}}]}
Project: 
Sort:{number_of_employees:-1}
Limit:10
Skip:

### 6. All the companies that don't include the `partners` field.
Filter: {partners:{$exists:false}}
Project: 
Sort:
Limit:
Skip:

### 7. All the companies that have a null type of value on the `category_code` field.
Filter: {category_code:null}
Project: 
Sort:
Limit:
Skip:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
Filter: {{$and: [{number_of_employees :{$gt:100}} ,{number_of_employees: {$lt: 1000}}]}
Project: {name:1,number_of_employees:1,_id:0}
Sort:
Limit:
Skip:

### 9. Order all the companies by their IPO price descendently.
Filter: 
Project: 
Sort:{'ipo.valuation_amount':-1}
Limit:
Skip:

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`
Filter: 
Project: 
Sort:{number_of_employees:-1}
Limit:
Skip:

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
Filter: {founded_month: {$gt:6}}
Project: 
Sort:
Limit:1000
Skip:

### 12. All the companies that have been 'deadpooled' after the third year.
Filter: {$where:function(){return "this.deadpool_year-this.founded_year>3"}}
Project: 
Sort:
Limit:
Skip:

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
Filter: {$and:[{founded_year:{$lt:2000}},{'acquisition.price_amount':{$gt:10000000}}]}
Project: 
Sort:
Limit:
Skip:

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.
Filter: {'acquisition.acquired_year':{$gt:2015}}
Project: {name:1,acquisition:1,_id:0}
Sort:{'acquisition.price_amount':1}
Limit:
Skip:

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
Filter: 
Project: {name:1,founded_year:1,_id:0}
Sort:{founded_year:-1}
Limit:
Skip:

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.
Filter: {$and:[{founded_day:{$gte:1}},{founded_day:{$lte:7}}]}
Project: 
Sort:{'acquisition.price_amount':-1}
Limit:10
Skip:

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
Filter: {$and:[{category_code:"web"},{number_of_employees:{$gt:4000}}]}
Project: 
Sort:{number_of_employees:1}
Limit:
Skip:

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
Filter: {$and:[{'acquisition.price_amount':{$gt:10000000}},{'acquisition.price_currency_code':'EUR'}]}
Project: 
Sort:
Limit:
Skip:

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
Filter: {'acquisition.acquired_month':{$lte:3}}
Project: {name:1,acquisition:1,_id:0}
Sort:
Limit:10
Skip:

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
Filter: {$and:[{founded_year:{$gte:2000}},{founded_year:{$lt:2010}},{'acquisition.acquired_year':{$lte:2011}}]}
Project: 
Sort:
Limit:
Skip:
