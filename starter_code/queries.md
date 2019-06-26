![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->
db.enterprise.find({name:"Babelgum"}, {name:1}).pretty()
{ "_id" : ObjectId("52cdef7c4bab8bd675297da0"), "name" : "Babelgum" }


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->
db.enterprise.find({number_of_employees:5000}, {number_of_employees:1}).limit(50).pretty()
{
	"_id" : ObjectId("52cdef7d4bab8bd67529891b"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675299e01"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529a4f4"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529aa77"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529b1b5"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7f4bab8bd67529c4bf"),
	"number_of_employees" : 5000
}
{
	"_id" : ObjectId("52cdef7f4bab8bd67529c5d2"),
	"number_of_employees" : 5000
}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

<!-- Your Code Goes Here -->
db.enterprise.find({$and: [{founded_year:{$gte:2000}}, {founded_year:{$lte:2005}}]})
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8c"),
	"name" : "Zoho",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8a"),
	"name" : "Wetpaint",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8f"),
	"name" : "Omnidrive",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8d"),
	"name" : "Digg",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d95"),
	"name" : "StumbleUpon",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d96"),
	"name" : "Gizmoz",
	"founded_year" : 2003
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d9a"),
	"name" : "Helio",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8e"),
	"name" : "Facebook",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da1"),
	"name" : "Plaxo",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da5"),
	"name" : "Technorati",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da7"),
	"name" : "AddThis",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dac"),
	"name" : "Veoh",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297daf"),
	"name" : "Jingle Networks",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db2"),
	"name" : "Meetup",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db6"),
	"name" : "Wesabe",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db5"),
	"name" : "LifeLock",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db7"),
	"name" : "Jangl SMS",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db8"),
	"name" : "SmugMug",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dbb"),
	"name" : "Jajah",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dbd"),
	"name" : "YouTube",
	"founded_year" : 2005
}
### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->
db.enterprise.find({$and: [{"ipo.valuation_amount": {$gt: 1000000000}}, {"founded_year": {$lt: 2010}}]}, {name: 1, ipo: 1}).pretty()

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->

db.enterprise.found({$and: [{number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}}]}).limit(10).pretty()

### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->

### 9. Order all the companies by their IPO price descendently.

<!-- Your Code Goes Here -->

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
