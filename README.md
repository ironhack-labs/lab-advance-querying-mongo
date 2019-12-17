![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# MongoDB | Compass CRUD

## Introduction

We are back with our queries! :wink:

We have learned some super useful query operators, that will helps us to make much better queries to retrieve the data we need. We will continue using the **Crunchbase** database we used on the last exercise.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Deliverables

Since we will be querying our database from Mongo Compass, you will need to copy/paste the `query`, `projection`, `sort`, `skip` and `limit` you entered on Mongo Compass. In the `queries.md` file, you will find the instructions about the queries you need to do, and a field to fill the answers.

### Example

1. This is an example

- **`query`**: /_You should copy/paste the query in here_/
- **`projection`**: /_You should copy/paste the projection in here_/
- **`sort`**: /_You should copy/paste the sort in here_/
- **`skip`**: /_You should copy/paste the skip in here_/
- **`limit`**: /_You should copy/paste the limit in here_/

## Instructions

### Iteration 1

First, we need to import the database we will be using for the `lab`. We will use the Crunchbase database. Crunchbase is the premier destination for discovering industry trends, investments, and news about hundreds of thousands of companies globally. From startups to Fortune 500s, Crunchbase is recognized as the primary source of company intelligence by millions of users globally.

The database contains more than 18k documents, and each of them has a lot of information about each of the companies. A document looks like the following:

![image](https://user-images.githubusercontent.com/23629340/36494916-d6db1770-1733-11e8-903e-5119b3c1b688.png)

1. You will find the `.zip` file of the Database on the **lab** folder.
2. Unzip the file
3. Navigate to this lab's folder in your terminal, and when inside, import the database to Mongo using the following command:

__When running the `mongoimport` you should be located in the same folder as the `companies.json` file.__

```bash
$ mongoimport --db companies --collection companies --file companies.json
```

_Side note_: In case errors or hanging with no response when running this command, add [--jsonArray](https://docs.mongodb.com/manual/reference/program/mongoimport/#cmdoption-mongoimport-jsonarray) in the end of the previous command.

4. Check on Mongo Compass if everything goes ok:

![image](https://user-images.githubusercontent.com/23629340/36534191-1f1bc5ec-17c6-11e8-9463-4945679b98c0.png)

### Iteration 2

You already know how this goes, so let's start working:



answers{
1. All the companies whose name match 'Babelgum'. Retrieve only their name field.

db.companies.find({name:'Babelgum'}, {name:1, _id:0}).pretty()
{ "name" : "Babelgum" }

2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.

db.companies.find({number_of_employees:{$gt:5000}},{name:1,_id:0,number_of_employees:1}).sort({number_of_employees:-1}).limit(20)
{ "name" : "Siemens", "number_of_employees" : 405000 }
{ "name" : "IBM", "number_of_employees" : 388000 }
{ "name" : "Toyota", "number_of_employees" : 320000 }
{ "name" : "PayPal", "number_of_employees" : 300000 }
{ "name" : "Nippon Telegraph and Telephone Corporation", "number_of_employees" : 227000 }
{ "name" : "Samsung Electronics", "number_of_employees" : 221726 }
{ "name" : "Accenture", "number_of_employees" : 205000 }
{ "name" : "Tata Consultancy Services", "number_of_employees" : 200300 }
{ "name" : "Flextronics International", "number_of_employees" : 200000 }
{ "name" : "Safeway", "number_of_employees" : 186000 }
{ "name" : "Sony", "number_of_employees" : 180500 }
{ "name" : "LG", "number_of_employees" : 177000 }
{ "name" : "Ford", "number_of_employees" : 171000 }
{ "name" : "Boeing", "number_of_employees" : 160000 }
{ "name" : "Digital Equipment Corporation", "number_of_employees" : 140000 }
{ "name" : "Nokia", "number_of_employees" : 125000 }
{ "name" : "MItsubishi Electric", "number_of_employees" : 107000 }
{ "name" : "MItsubishi Electric", "number_of_employees" : 107000 }
{ "name" : "Comcast", "number_of_employees" : 100000 }
{ "name" : "Bertelsmann", "number_of_employees" : 100000 }

3. All the companies founded between 2000 and 2005, both years included. Retrieve only the name and founded_year fields.

db.companies.find({founded_year:{$gte: 2000,$lte: 2005}},{name:1,_id:0,founded_year:1}).pretty()
{ "name" : "Wetpaint", "founded_year" : 2005 }
{ "name" : "Zoho", "founded_year" : 2005 }
{ "name" : "Digg", "founded_year" : 2004 }
{ "name" : "Omnidrive", "founded_year" : 2005 }
{ "name" : "Gizmoz", "founded_year" : 2003 }
{ "name" : "StumbleUpon", "founded_year" : 2002 }
{ "name" : "Helio", "founded_year" : 2005 }
{ "name" : "Facebook", "founded_year" : 2004 }
Type "it" for more

4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the name and ipo fields.

> db.companies.find({'ipo':{$ne: null},'ipo.valuation_amount':{$gt: 100000000},founded_year:{$lt: 2010}},{name:1,_id:0,ipo:1}).pretty()
{
	"name" : "Twitter",
	"ipo" : {
		"valuation_amount" : NumberLong("18100000000"),
		"valuation_currency_code" : "USD",
		"pub_year" : 2013,
		"pub_month" : 11,
		"pub_day" : 7,
		"stock_symbol" : "NYSE:TWTR"
	}
}

Type "it" for more

5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({'number_of_employees':{$lt: 1000},'founded_year':{$lt: 2005}},{name:1,_id:0,founded_year:1}).sort({number_of_employees:-1}).limit(10).pretty()
{ "name" : "Infinera Corporation", "founded_year" : 2000 }
{ "name" : "NorthPoint Communications Group", "founded_year" : 1997 }
{ "name" : "888 Holdings", "founded_year" : 1997 }
{ "name" : "Forrester Research", "founded_year" : 1983 }
{ "name" : "SonicWALL", "founded_year" : 1991 }
{ "name" : "Webmetrics", "founded_year" : 1999 }
{ "name" : "Cornerstone OnDemand", "founded_year" : 1999 }
{ "name" : "Yelp", "founded_year" : 2004 }
{ "name" : "ZoomInfo", "founded_year" : 2000 }
{ "name" : "MySpace", "founded_year" : 2003 }

6. All the companies that don't include the partners field.

> db.companies.find({partners: {$eq:[]}},{name:1,_id:0})
{ "name" : "AdventNet" }
{ "name" : "Wetpaint" }
{ "name" : "Zoho" }
Type "it" for more


7. All the companies that have a null type of value on the category_code field.

> db.companies.find({category_code: {$eq:null}},{name:1,_id:0})
{ "name" : "Collective" }
{ "name" : "KoolIM" }
{ "name" : "Snimmer" }
Type "it" for more

8. All the companies that have at least 100 employees but less than 1000. Retrieve only the name and number of employees fields.

> db.companies.find({number_of_employees: {$gte: 100, $lt: 1000}},{name:1,_id:0,number_of_employees:1})
{ "name" : "AdventNet", "number_of_employees" : 600 }
{ "name" : "AddThis", "number_of_employees" : 120 }
{ "name" : "OpenX", "number_of_employees" : 305 }
{ "name" : "LifeLock", "number_of_employees" : 644 }]
Type "it" for more

9. Order all the companies by their IPO price in a descending order.

db.companies.find({'ipo':{$ne: null},'ipo.valuation_amount':{$gt: 0}},{name:1,_id:0,ipo:1}).sort({'ipo.valuation_amount':-1}).pretty()
{
	"name" : "GREE",
	"ipo" : {
		"valuation_amount" : NumberLong("108960000000"),
		"valuation_currency_code" : "JPY",
		"pub_year" : 2008,
		"pub_month" : 12,
		"pub_day" : 17,
		"stock_symbol" : "3632"
	}
}
{
	"name" : "Facebook",
	"ipo" : {
		"valuation_amount" : NumberLong("104000000000"),
		"valuation_currency_code" : "USD",
		"pub_year" : 2012,
		"pub_month" : 5,
		"pub_day" : 18,
		"stock_symbol" : "NASDAQ:FB"
	}
}


10. Retrieve the 10 companies with more employees, order by the number of employees

db.companies.find({'number_of_employees':{$gt: 0}},{name:1,_id:0,number_of_employees:1}).sort({'number_of_employees':-1}).limit(10).pretty()
{ "name" : "Siemens", "number_of_employees" : 405000 }
{ "name" : "IBM", "number_of_employees" : 388000 }
{ "name" : "Toyota", "number_of_employees" : 320000 }
{ "name" : "PayPal", "number_of_employees" : 300000 }
{
	"name" : "Nippon Telegraph and Telephone Corporation",
	"number_of_employees" : 227000
}
{ "name" : "Samsung Electronics", "number_of_employees" : 221726 }
{ "name" : "Accenture", "number_of_employees" : 205000 }
{ "name" : "Tata Consultancy Services", "number_of_employees" : 200300 }
{ "name" : "Flextronics International", "number_of_employees" : 200000 }
{ "name" : "Safeway", "number_of_employees" : 186000 }

11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({'founded_month':{$gte: 6}},{name:1,_id:0}).limit(1000).pretty()
{ "name" : "Wetpaint" }
{ "name" : "Zoho" }
{ "name" : "Postini" }
{ "name" : "Geni" }
{ "name" : "Digg" }
{ "name" : "Fox Interactive Media" }
{ "name" : "Omnidrive" }
Type "it" for more


    12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000
db.companies.find({founded_year:{$lt:2000},'acquisition.price_amount':{$gt: 10000000}},{name:1, _id:0,'acquisition.price_amount':1})
{ "name" : "Postini", "acquisition" : { "price_amount" : 625000000 } }
{ "name" : "SideStep", "acquisition" : { "price_amount" : 180000000 } }
{ "name" : "Recipezaar", "acquisition" : { "price_amount" : 25000000 } }
Type "it" for more

13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their name and acquisition field.

 db.companies.find({'acquisition.acquired_year':{$gt:2010}},{name:1, _id:0,'acquisition.price_amount':1}).sort({'acquisition.price_amount':-1})

{ "name" : "T-Mobile", "acquisition" : { "price_amount" : NumberLong("39000000000") } }
{ "name" : "Goodrich Corporation", "acquisition" : { "price_amount" : NumberLong("18400000000") } }
{ "name" : "LSI", "acquisition" : { "price_amount" : NumberLong("6600000000") } }
{ "name" : "National Semiconductor", "acquisition" : { "price_amount" : NumberLong("6500000000") } }

14. Order the companies by their founded year, retrieving only their name and founded year.

db.companies.find({founded_year:{$exists:true}},{name:1,_id:0,founded_year:1})
{ "name" : "AdventNet", "founded_year" : 1996 }
{ "name" : "Wetpaint", "founded_year" : 2005 }
{ "name" : "Zoho", "founded_year" : 2005 }

15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their acquisition price in a descending order. Limit the search to 10 documents.

db.companies.find({'acquisition.acquired_day':{$lte:7}},{name:1, _id:0,'acquisition.price_amount':1,'acquisition.acquired_day':1}).sort({'acquisition.price_amount':-1}).limit(10)
{ "name" : "National Semiconductor", "acquisition" : { "price_amount" : NumberLong("6500000000"), "acquired_day" : 4 } }
{ "name" : "The Weather Channel", "acquisition" : { "price_amount" : NumberLong("3500000000"), "acquired_day" : 7 } }
{ "name" : "Macromedia", "acquisition" : { "price_amount" : NumberLong("3400000000"), "acquired_day" : 3 } }

16. All the companies on the 'web' category that have more than 4000 employees. Sort them by the amount of employees in ascending order.

db.companies.find({category_code:{$eq:'web'},number_of_employees:{$gt:4000}},{name:1,_id:0}).sort({number_of_employees:1})
{ "name" : "Expedia" }
{ "name" : "AOL" }
{ "name" : "Webkinz" }

17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

db.companies.find({'acquisition.price_amount':{$gte:10000000},'acquisition.price_currency_code':{$eq:'EUR'}},{name:1, _id:0,'acquisition.price_amount':1,'acquisition.price_currency_code':1})
{ "name" : "ZYB", "acquisition" : { "price_amount" : 31500000, "price_currency_code" : "EUR" } }
{ "name" : "Apertio", "acquisition" : { "price_amount" : 140000000, "price_currency_code" : "EUR" } }
{ "name" : "Greenfield Online", "acquisition" : { "price_amount" : 40000000, "price_currency_code" : "EUR" } }
{ "name" : "Webedia", "acquisition" : { "price_amount" : 70000000, "price_currency_code" : "EUR" } }
{ "name" : "Wayfinder", "acquisition" : { "price_amount" : 24000000, "price_currency_code" : "EUR" } }
{ "name" : "Tuenti Technologies", "acquisition" : { "price_amount" : 70000000, "price_currency_code" : "EUR" } }
{ "name" : "BioMed Central", "acquisition" : { "price_amount" : 43400000, "price_currency_code" : "EUR" } }

18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their name and acquisition fields.

db.companies.find({'founded_month':{$lte: 3}},{name:1,_id:0,acquisition:1}).limit(10).pretty()
{
	"name" : "Gizmoz",
	"acquisition" : {
		"price_amount" : null,
		"price_currency_code" : "USD",
		"term_code" : null,
		"source_url" : "http://www.gizmoz.com",
		"source_description" : "TechCrunch",
		"acquired_year" : 2009,
		"acquired_month" : 12,
		"acquired_day" : 15,
		"acquiring_company" : {
			"name" : "Daz 3d",
			"permalink" : "daz-3d"
		}
	}
}
{
	"name" : "StumbleUpon",
	"acquisition" : {
		"price_amount" : 29000000,
		"price_currency_code" : "USD",
		"term_code" : null,
		"source_url" : "http://techcrunch.com/2009/04/13/ebay-unacquires-stumbleupon/",
		"source_description" : "StumbleUpon Beats Skype In Escaping EBay's Clutches",
		"acquired_year" : 2009,
		"acquired_month" : 4,
		"acquired_day" : null,
		"acquiring_company" : {
			"name" : "StumbleUpon",
			"permalink" : "stumbleupon"
		}
	}
}

19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

db.companies.find({founded_year:{$gte: 2000,$lte: 2010},'acquisition.acquired_year':{$gte: 2011}},{name:1,_id:0,founded_year:1,'acquisition.acquired_year':1}).pretty()
{
	"name" : "Wetpaint",
	"founded_year" : 2005,
	"acquisition" : {
		"acquired_year" : 2013
	}
}
{
	"name" : "Geni",
	"founded_year" : 2006,
	"acquisition" : {
		"acquired_year" : 2012
	}
}
{
	"name" : "Digg",
	"founded_year" : 2004,
	"acquisition" : {
		"acquired_year" : 2012
	}
}
}

Happy Coding! :heart:
