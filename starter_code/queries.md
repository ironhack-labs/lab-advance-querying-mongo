![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

{ "_id" : ObjectId("52cdef7c4bab8bd675297da0"), "name" : "Babelgum" }


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

{ "_id" : ObjectId("52cdef7d4bab8bd67529891b"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7d4bab8bd675299e01"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529a4f4"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529aa77"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529b1b5"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7f4bab8bd67529c4bf"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7f4bab8bd67529c5d2"), "number_of_employees" : 5000 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e49"), "number_of_employees" : 5080 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529ba2e"), "number_of_employees" : 5200 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8e"), "number_of_employees" : 5299 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529a453"), "number_of_employees" : 5300 }
{ "_id" : ObjectId("52cdef7d4bab8bd675298b89"), "number_of_employees" : 5400 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529b9dd"), "number_of_employees" : 5400 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529b691"), "number_of_employees" : 5500 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529a84c"), "number_of_employees" : 5729 }
{ "_id" : ObjectId("52cdef7d4bab8bd675299f38"), "number_of_employees" : 5763 }
{ "_id" : ObjectId("52cdef7c4bab8bd675298760"), "number_of_employees" : 6000 }
{ "_id" : ObjectId("52cdef7d4bab8bd675298b6f"), "number_of_employees" : 6000 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529aeec"), "number_of_employees" : 6000 }
{ "_id" : ObjectId("52cdef7e4bab8bd67529bd33"), "number_of_employees" : 6000 }


### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.


    db.companies.find( {'founde_year':{$gte:2000,$lte:2005}},{'name':1,'founded_year':1} );


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

    db.companies.find({$and:[ {'acquisition.price_amount':{$gte:100000000}}, {'founded_year':{$lte:2010}} ]},{'name':1,'ipo':1})



### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

    db.companies.find( {$and:[ {number_of_employees:{$lte:1000}}, {'founded_year':{$lte:2005}}  ]} ,{'name':1}).limit(10).sort({'number_of_employees':1});


### 6. All the companies that don't include the `partners` field.

    db.companies.find(  {'partners':{$nin:[]}},{'name':1} )


### 7. All the companies that have a null type of value on the `category_code` field.

    db.companies.find({'category_code':null})

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

    db.companies.find( {'number_of_employees':{$gte:100,$lte:1000}},{'name':1,'number_of_employees':1} );

### 9. Order all the companies by their IPO price descendently.

    db.companies.find().limit(10).sort({'ipo.valuation_amount':-1},{'name':1});

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->

### 12. All the companies that have been 'deadpooled' after the third year.

<!-- Your Code Goes Here -->

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

<!-- Your Code Goes Here -->

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

<!-- Your Code Goes Here -->

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- Your Code Goes Here -->

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

<!-- Your Code Goes Here -->

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

<!-- Your Code Goes Here -->

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

<!-- Your Code Goes Here -->

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
