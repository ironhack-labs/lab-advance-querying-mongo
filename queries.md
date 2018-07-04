![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)
query: 
projection: 
limit: 

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
query: {name:"Babelgum"}
projection: {name:1,_id:0}
limit: 


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
query: {number_of_employees:{$gt:5000}}
projection: 
sort: {number_of_employees:1}
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.
query: {$and:[{founded_year:{$gte:2000}},{founded_year:{$lte:2005}}]}
projection: {name:1,founded_year:1,_id:0}
limit: 

### 4. All the companies that had an IPO of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
query: {$and:[{'ipo.valuation_amount':{$gte:100000000}},{founded_year:{$lte:2010}}]}
projection: {name:1,'ipo.valuation_amount':1,_id:0}
limit: 

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
query:{$and:[{founded_year:{$lt:2005}},{number_of_employees:{$lt:1000}}]} 
projection: 
sort:{numberofemployees:1}
limit:10 

### 6. All the companies that don't include the `partners` field.
query:{partners:{$exists:false}}
projection: 
limit: 

### 7. All the companies that have a null type of value on the `category_code` field.
query: {category_code: {$type: "null"}}
projection: 
limit: 

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
query: {$and:[}},{{number_of_employees:{$gte:100number_of_employees:{$lt:1000}}] }
projection: {name:1, number_of_employees:1, _id:0}
limit: 

### 9. Order all the companies by their IPO price descendently.
query: 
projection: 
sort: {'ipo.valuation_amount':-1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`
query: 
projection: 
limit: 10
sort: {{number_of_employees:-1}}

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
query: {founded_month:{$gte:6}}
projection: 
limit: 1000

### 12. All the companies that have been 'deadpooled' after the third year.
query: {$and:[{ $where: function(){return (this.deadpooled_year >= this.founded_year + 3)}},{deadpooled_year: {$ne:null}}]}
projection: 
limit: 

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
query: {$and:[{founded_year:{$lt:2000}},{'acquisition.price_amount':{$gte:10000000}}]} 
projection: 
limit: 

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.
query: {'acquisition.acquired_year':{$gt:2015}}
projection: {acquisition:1, name:1}
sort: {'acquisition.price_amount':1}

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
query: 
projection:{founded_year:1, name:1} 
sort:{founded_year:1, name:1}

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.
query: {founded_day:{$lte:7}}
projection: 
limit: 10
sort:{'acquisition.price_amount':-1}

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
query: {$and:[{category_code:"web"},{number_of_employees:{$gt:4000}}]}
projection: 
sort: {number_of_employees:1}

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
query: {$and:[{'acquisition.price_currency_code':"EUR"},{'acquisition.price_amount':{$gt:10000000}}]}
projection: 
limit: 

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
query: {'acquisition.acquired_month':{$lte:3}}
projection: {name:1,acquisition:1}
limit:10 

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
query: 
projection: 
limit: 
