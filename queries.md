![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

db.companies.find({name:"Babelgum"}, {name:1, \_id:0}).pretty()
{ "name" : "Babelgum" }

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companies.find({number_of_employees: {$gt: 5000}}, {name:1, number_of_employees:1}).limit(20).sort({number_of_employees: 1}).pretty()
{
"\_id" : ObjectId("52cdef7c4bab8bd675297e49"),
"name" : "Nintendo",
"number_of_employees" : 5080
}
{
"\_id" : ObjectId("52cdef7e4bab8bd67529ba2e"),
"name" : "Hexaware Technologies",
"number_of_employees" : 5200
}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

db.companies.find({$and: [{founded_year: {$gte:2000}}, {founded_year: {$lte:2005}}]}, {name:1, founded_year:1, \_id:0})
{ "name" : "Wetpaint", "founded_year" : 2005 }
{ "name" : "Zoho", "founded_year" : 2005 }
{ "name" : "Omnidrive", "founded_year" : 2005 }
{ "name" : "Digg", "founded_year" : 2004 }
{ "name" : "Helio", "founded_year" : 2005 }
{ "name" : "Gizmoz", "founded_year" : 2003 }
{ "name" : "StumbleUpon", "founded_year" : 2002 }
{ "name" : "Plaxo", "founded_year" : 2002 }
{ "name" : "Facebook", "founded_year" : 2004 }
{ "name" : "Technorati", "founded_year" : 2002 }
{ "name" : "Veoh", "founded_year" : 2004 }
{ "name" : "AddThis", "founded_year" : 2004 }
{ "name" : "Jingle Networks", "founded_year" : 2005 }
{ "name" : "Wesabe", "founded_year" : 2005 }
{ "name" : "LifeLock", "founded_year" : 2005 }
{ "name" : "SmugMug", "founded_year" : 2002 }
{ "name" : "Jangl SMS", "founded_year" : 2005 }
{ "name" : "Meetup", "founded_year" : 2002 }
{ "name" : "Jajah", "founded_year" : 2005 }
{ "name" : "YouTube", "founded_year" : 2005 }

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companies.find({"ipo.valuation_amount":{$gt: 100000000}}, {name:1, ipo:1, \_id:0}).pretty()
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
{
"name" : "Facebook",
"ipo" : {
"valuation_amount" : NumberLong("104000000000"),
"valuation_currency_code" : "USD",
"pub_year" : 2012,
"pub_month" : 5,
"pub_day" : 18,
"stock_symbol" : "NASDAQ:FB"

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({$and: [{number_of_employees: {$lt: 1000} }, {founded_year: {$lt: 2005} }]}, {name:1, number_of_employees:1, founded_year:1, \_id:0}).limit(10).sort({number_of_employees: 1}).pretty()
{
"name" : "Fox Interactive Media",
"number_of_employees" : 0,
"founded_year" : 1979
}
{ "name" : "Skype", "number_of_employees" : 0, "founded_year" : 2003 }
{ "name" : "Eurekster", "number_of_employees" : 0, "founded_year" : 2004 }
{ "name" : "stylediary", "number_of_employees" : 0, "founded_year" : 2004 }
{
"name" : "Ticketmaster",
"number_of_employees" : 0,
"founded_year" : 1976
}
{ "name" : "Monster", "number_of_employees" : 0, "founded_year" : 1994 }
{ "name" : "EditGrid", "number_of_employees" : 0, "founded_year" : 2003 }
{ "name" : "Simpy", "number_of_employees" : 0, "founded_year" : 2004 }
{ "name" : "Compete", "number_of_employees" : 0, "founded_year" : 2000 }
{ "name" : "MindTouch", "number_of_employees" : 0, "founded_year" : 2004 }

### 6. All the companies that don't include the `partners` field.

db.companies.find({partners: {$exists: false}})

### 7. All the companies that have a null type of value on the `category_code` field.

db.companies.find({category_code: {$eq: null}}, {name:1, category_code:1, \_id:0}).pretty()
{ "name" : "Collective", "category_code" : null }
{ "name" : "Snimmer", "category_code" : null }
{ "name" : "KoolIM", "category_code" : null }
{ "name" : "Level9 Media", "category_code" : null }
{ "name" : "Drigg", "category_code" : null }
{ "name" : "VidKing", "category_code" : null }
{ "name" : "SpaceTime", "category_code" : null }
{ "name" : "MMDAYS", "category_code" : null }
{ "name" : "Touch Clarity", "category_code" : null }
{ "name" : "Inside Group", "category_code" : null }
{ "name" : "Repeater Store", "category_code" : null }
{ "name" : "NewPersia", "category_code" : null }
{ "name" : "Tapesh", "category_code" : null }
{ "name" : "iPersians", "category_code" : null }
{ "name" : "Feedmap", "category_code" : null }
{ "name" : "Pyra Labs", "category_code" : null }
{ "name" : "NuvoMedia", "category_code" : null }
{ "name" : "Intwine", "category_code" : null }
{ "name" : "ExecuNet", "category_code" : null }
{ "name" : "The Weinstein Company", "category_code" : null }
Type "it" for more

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find({$and: [{number_of_employees: {$gte: 100}, number_of_employees: {$lt: 1000}}]}, {name:1, number_of_employees:1, \_id:0})
{ "name" : "AdventNet", "number_of_employees" : 600 }
{ "name" : "Wetpaint", "number_of_employees" : 47 }
{ "name" : "Geni", "number_of_employees" : 18 }
{ "name" : "Digg", "number_of_employees" : 60 }
{ "name" : "Fox Interactive Media", "number_of_employees" : 0 }
{ "name" : "Scribd", "number_of_employees" : 50 }
{ "name" : "MeetMoi", "number_of_employees" : 15 }
{ "name" : "Joost", "number_of_employees" : 0 }
{ "name" : "Plaxo", "number_of_employees" : 50 }
{ "name" : "Powerset", "number_of_employees" : 60 }
{ "name" : "Technorati", "number_of_employees" : 35 }
{ "name" : "Mahalo", "number_of_employees" : 40 }
{ "name" : "Kyte", "number_of_employees" : 40 }
{ "name" : "AddThis", "number_of_employees" : 120 }
{ "name" : "OpenX", "number_of_employees" : 305 }
{ "name" : "Jingle Networks", "number_of_employees" : 35 }
{ "name" : "LifeLock", "number_of_employees" : 644 }
{ "name" : "SmugMug", "number_of_employees" : 62 }
{ "name" : "Jangl SMS", "number_of_employees" : 22 }
{ "name" : "Meetup", "number_of_employees" : 75 }

### 9. Order all the companies by their IPO price in a descending order.

db.companies.find({}, {name:1, "ipo.valuation_amount":1, \_id:0}).sort({"ipo.valuation_amount": -1}).pretty()
{
"name" : "GREE",
"ipo" : {
"valuation_amount" : NumberLong("108960000000")
}
}
{
"name" : "Facebook",
"ipo" : {
"valuation_amount" : NumberLong("104000000000")
}
}
{
"name" : "Amazon",
"ipo" : {
"valuation_amount" : NumberLong("100000000000")
}
}

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

db.companies.find({}, {name:1, number_of_employees:1, \_id:0}).sort({number_of_employees: -1}).limit(10).pretty()
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

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({$and: [{founded_month: {$gt: 6}}, {founded_month: {$lte: 12}}]}, {name:1, founded_month:1, \_id:0}).limit(1000)
{ "name" : "Wetpaint", "founded_month" : 10 }
{ "name" : "Zoho", "founded_month" : 9 }
{ "name" : "Omnidrive", "founded_month" : 11 }
{ "name" : "Digg", "founded_month" : 10 }
{ "name" : "Joost", "founded_month" : 10 }
{ "name" : "Plaxo", "founded_month" : 11 }
{ "name" : "Powerset", "founded_month" : 10 }
{ "name" : "Kyte", "founded_month" : 12 }
{ "name" : "eBay", "founded_month" : 9 }
{ "name" : "Jingle Networks", "founded_month" : 9 }
{ "name" : "Wesabe", "founded_month" : 12 }
{ "name" : "LifeLock", "founded_month" : 8 }
{ "name" : "SmugMug", "founded_month" : 11 }
{ "name" : "Thoof", "founded_month" : 12 }
{ "name" : "Pando Networks", "founded_month" : 7 }
{ "name" : "Ikan", "founded_month" : 12 }
{ "name" : "delicious", "founded_month" : 9 }
{ "name" : "AllPeers", "founded_month" : 8 }
{ "name" : "Wize", "founded_month" : 8 }
{ "name" : "SellABand", "founded_month" : 8 }

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

db.companies.find({$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000}}]}, {name:1, founded_year:1, "acquisition.price_amount":1, \_id:0})

{ "name" : "Postini", "founded_year" : 1999, "acquisition" : { "price_amount" : 625000000 } }
{ "name" : "SideStep", "founded_year" : 1999, "acquisition" : { "price_amount" : 180000000 } }
{ "name" : "Recipezaar", "founded_year" : 1999, "acquisition" : { "price_amount" : 25000000 } }
{ "name" : "Snapfish", "founded_year" : 1999, "acquisition" : { "price_amount" : 300000000 } }
{ "name" : "Neopets", "founded_year" : 1999, "acquisition" : { "price_amount" : 160000000 } }
{ "name" : "PayPal", "founded_year" : 1998, "acquisition" : { "price_amount" : 1500000000 } }
{ "name" : "Zappos", "founded_year" : 1999, "acquisition" : { "price_amount" : 1200000000 } }
{ "name" : "Alibaba", "founded_year" : 1999, "acquisition" : { "price_amount" : 1000000000 } }
{ "name" : "Sun Microsystems", "founded_year" : 1982, "acquisition" : { "price_amount" : NumberLong("7400000000") } }
{ "name" : "Lastminute", "founded_year" : 1998, "acquisition" : { "price_amount" : 1008000000 } }
{ "name" : "Sabre", "founded_year" : 1960, "acquisition" : { "price_amount" : NumberLong("4300000000") } }
{ "name" : "Sportsline", "founded_year" : 1994, "acquisition" : { "price_amount" : 64000000 } }
{ "name" : "Webshots", "founded_year" : 1995, "acquisition" : { "price_amount" : 71000000 } }
{ "name" : "MIVA", "founded_year" : 1999, "acquisition" : { "price_amount" : 11600000 } }
{ "name" : "Digitas", "founded_year" : 1980, "acquisition" : { "price_amount" : 1300000000 } }
{ "name" : "iVillage", "founded_year" : 1995, "acquisition" : { "price_amount" : 600000000 } }
{ "name" : "PriceGrabber", "founded_year" : 1999, "acquisition" : { "price_amount" : 485000000 } }
{ "name" : "LinkShare", "founded_year" : 1996, "acquisition" : { "price_amount" : 425000000 } }
{ "name" : "Kaboose", "founded_year" : 1999, "acquisition" : { "price_amount" : 18400000 } }
{ "name" : "Fastclick", "founded_year" : 1998, "acquisition" : { "price_amount" : 132000000 } }

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

db.companies.find({"acquisition.acquired_year": {$gt: 2010}}, {name:1, acquisition:1, \_id:0}).sort({"acquisition.price_amount": -1}).pretty()
{
"name" : "T-Mobile",
"acquisition" : {
"price_amount" : NumberLong("39000000000"),
"price_currency_code" : "USD",
"term_code" : null,
"source_url" : "http://techcrunch.com/2011/03/20/in-the-race-for-more-spectrum-att-is-acquiring-t-mobile-for-39-billion/",
"source_description" : "In The Race For More Spectrum, AT&T Is Acquiring T-Mobile For $39 Billion",
"acquired_year" : 2011,
"acquired_month" : 3,
"acquired_day" : 20,
"acquiring_company" : {
"name" : "AT&T",
"permalink" : "at-t"
}
}
}
{
"name" : "Goodrich Corporation",
"acquisition" : {
"price_amount" : NumberLong("18400000000"),
"price_currency_code" : "USD",
"term_code" : null,
"source_url" : "http://www.masshightech.com/stories/2011/09/19/daily37-UTC-shells-out-184-billion-for-Goodrich.html",
"source_description" : "UTC shells out $18.4 billion for Goodrich",
"acquired_year" : 2011,
"acquired_month" : 9,
"acquired_day" : 22,
"acquiring_company" : {
"name" : "United Technologies",
"permalink" : "united-technologies"
}
}
}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find({}, {name:1, founded_year:1, \_id:0}).sort({founded_year: -1}).pretty()
{ "name" : "Fixya", "founded_year" : 2013 }
{ "name" : "Wamba", "founded_year" : 2013 }
{ "name" : "Advaliant", "founded_year" : 2013 }
{ "name" : "Fluc", "founded_year" : 2013 }
{ "name" : "iBazar", "founded_year" : 2013 }
{ "name" : "Gimigo", "founded_year" : 2013 }
{ "name" : "SEOGroup", "founded_year" : 2013 }
{ "name" : "Clowdy", "founded_year" : 2013 }
{ "name" : "WhosCall", "founded_year" : 2013 }
{ "name" : "Pikk", "founded_year" : 2013 }
{ "name" : "Tongxue", "founded_year" : 2013 }
{ "name" : "Shopseen", "founded_year" : 2013 }
{ "name" : "VistaGen Therapeutics", "founded_year" : 2013 }
{ "name" : "PeekYou", "founded_year" : 2012 }
{ "name" : "headr", "founded_year" : 2012 }
{ "name" : "Pinger", "founded_year" : 2012 }
{ "name" : "Widgetbox", "founded_year" : 2012 }
{ "name" : "Mobiluck", "founded_year" : 2012 }
{ "name" : "Skydeck", "founded_year" : 2012 }
{ "name" : "Simplicant", "founded_year" : 2012 }

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

db.companies.find({"acquisition.acquired_day": {$lte: 7}}, {name:1, "acquisition.acquired_day":1, "acquisition.price_amount":1, \_id:0}).sort({"acquisition.price_amount": -1}).limit(10)
{ "name" : "National Semiconductor", "acquisition" : { "price_amount" : NumberLong("6500000000"), "acquired_day" : 4 } }
{ "name" : "The Weather Channel", "acquisition" : { "price_amount" : NumberLong("3500000000"), "acquired_day" : 7 } }
{ "name" : "Macromedia", "acquisition" : { "price_amount" : NumberLong("3400000000"), "acquired_day" : 3 } }
{ "name" : "Interactive Data", "acquisition" : { "price_amount" : NumberLong("3400000000"), "acquired_day" : 4 } }
{ "name" : "Qualcomm Atheros", "acquisition" : { "price_amount" : NumberLong("3100000000"), "acquired_day" : 5 } }
{ "name" : "ExactTarget", "acquisition" : { "price_amount" : NumberLong("2500000000"), "acquired_day" : 4 } }
{ "name" : "Quest Software", "acquisition" : { "price_amount" : NumberLong("2400000000"), "acquired_day" : 2 } }
{ "name" : "Legent Corporation", "acquisition" : { "price_amount" : 1740000000, "acquired_day" : 1 } }
{ "name" : "Digital Insight", "acquisition" : { "price_amount" : 1650000000, "acquired_day" : 2 } }
{ "name" : "Equallogic", "acquisition" : { "price_amount" : 1400000000, "acquired_day" : 5 } }

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

db.companies.find({$and: [{category_code: "web"}, {number_of_employees: {$gt: 4000}}]}, {name:1, category_code:1, number_of_employees:1, \_id:0}).sort({number_of_employees:1}).pretty()
{
"name" : "Expedia",
"category_code" : "web",
"number_of_employees" : 4400
}
{ "name" : "AOL", "category_code" : "web", "number_of_employees" : 8000 }
{
"name" : "Webkinz",
"category_code" : "web",
"number_of_employees" : 8657
}
{
"name" : "Rakuten",
"category_code" : "web",
"number_of_employees" : 10000
}
{
"name" : "Los Angeles Times Media Group",
"category_code" : "web",
"number_of_employees" : 10000
}
{
"name" : "Groupon",
"category_code" : "web",
"number_of_employees" : 10000
}
{
"name" : "Yahoo!",
"category_code" : "web",
"number_of_employees" : 13600
}
{ "name" : "eBay", "category_code" : "web", "number_of_employees" : 15000 }
{
"name" : "Experian",
"category_code" : "web",
"number_of_employees" : 15500
}

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

db.companies.find({$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"}]}, {name:1, "acquisition.price_amount":1, "acquisition.price_currency_code":1, \_id:0}).pretty()
{
"name" : "ZYB",
"acquisition" : {
"price_amount" : 31500000,
"price_currency_code" : "EUR"
}
}
{
"name" : "Apertio",
"acquisition" : {
"price_amount" : 140000000,
"price_currency_code" : "EUR"
}
}
{
"name" : "Greenfield Online",
"acquisition" : {
"price_amount" : 40000000,
"price_currency_code" : "EUR"
}
}
{
"name" : "Webedia",
"acquisition" : {
"price_amount" : 70000000,
"price_currency_code" : "EUR"
}
}
{
"name" : "Wayfinder",
"acquisition" : {
"price_amount" : 24000000,
"price_currency_code" : "EUR"
}
}
{
"name" : "Tuenti Technologies",
"acquisition" : {
"price_amount" : 70000000,
"price_currency_code" : "EUR"
}
}
{
"name" : "BioMed Central",
"acquisition" : {
"price_amount" : 43400000,
"price_currency_code" : "EUR"
}
}

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

db.companies.find({"acquisition.acquired_month": {$lte: 3}}, {name:1, acquisition:1, \_id:0}).limit(10).pretty()
{
"name" : "Kyte",
"acquisition" : {
"price_amount" : null,
"price_currency_code" : "USD",
"term_code" : null,
"source_url" : "http://techcrunch.com/2011/01/31/exclusive-kit-digital-acquires-kickapps-kewego-and-kyte-for-77-2-million/",
"source_description" : "KIT digital Acquires KickApps, Kewego AND Kyte For $77.2 Million",
"acquired_year" : 2011,
"acquired_month" : 1,
"acquired_day" : 31,
"acquiring_company" : {
"name" : "KIT digital",
"permalink" : "kit-digital"
}
}
}
{
"name" : "NetRatings",
"acquisition" : {
"price_amount" : 327000000,
"price_currency_code" : "USD",
"term_code" : "cash",
"source_url" : "http://login.vnuemedia.com/hr/login/login_subscribe.jsp?id=0oqDem1gYIfIclz9i2%2Ffqj5NxCp2AC5DPbVnyT2da8GyV2mXjasabE128n69OrmcAh52%2FGE3pSG%2F%0AEKRYD9vh9EhrJrxukmUzh532fSMTZXL42gwPB80UWVtF1NwJ5UZSM%2BCkLU1mpYBoHFgiH%2Fi0f6Ax%0A9yMIVxt47t%2BHamhEQ0nkOEK24L",
"source_description" : "Nielsen buys rest of NetRatings",
"acquired_year" : 2007,
"acquired_month" : 2,
"acquired_day" : null,
"acquiring_company" : {
"name" : "Nielsen",
"permalink" : "nielsen"
}
}
}

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

db.companies.find({$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}, {name:1, founded_year:1, "acquisition.acquired_year": 1, \_id:0}).pretty()
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
{
"name" : "Kyte",
"founded_year" : 2006,
"acquisition" : {
"acquired_year" : 2011
}
}
