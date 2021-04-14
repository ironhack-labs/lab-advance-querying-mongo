![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

db.companies.find({name:"Babelgum"}, {name:1, _id:0})
{ "name" : "Babelgum" }

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companies.find({number_of_employees:{$gt: 500}}, {name:1, number_of_employees:1, _id:0}).sort({number_of_employees:1}).limit(20)

{ "name" : "Xero", "number_of_employees" : 507 }
{ "name" : "Veeva", "number_of_employees" : 510 }
{ "name" : "Central Reservations", "number_of_employees" : 510 }
{ "name" : "Markafoni", "number_of_employees" : 520 }
{ "name" : "TaskUs", "number_of_employees" : 540 }
{ "name" : "Leapfrog Enterprises", "number_of_employees" : 541 }
{ "name" : "iCrossing", "number_of_employees" : 550 }
{ "name" : "AKQA", "number_of_employees" : 550 }
{ "name" : "AKQA", "number_of_employees" : 550 }
{ "name" : "smartFOCUS", "number_of_employees" : 550 }
{ "name" : "i365, A Seagate Company", "number_of_employees" : 550 }
{ "name" : "Vostu", "number_of_employees" : 550 }
{ "name" : "OpenTable", "number_of_employees" : 550 }
{ "name" : "TESCRA", "number_of_employees" : 580 }
{ "name" : "Unwired Planet", "number_of_employees" : 590 }
{ "name" : "Micro Focus", "number_of_employees" : 591 }
{ "name" : "Micro Focus", "number_of_employees" : 591 }
{ "name" : "Bazaarvoice", "number_of_employees" : 600 }
{ "name" : "Saba", "number_of_employees" : 600 }
{ "name" : "PhotoBox", "number_of_employees" : 600 }

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

db.companies.find({$and:[{founded_year:{$gt:2000}}, {founded_year:{$lt:2005}}]}, {name:1, founded_year:1, _id:0})
{ "name" : "Digg", "founded_year" : 2004 }
{ "name" : "StumbleUpon", "founded_year" : 2002 }
{ "name" : "Gizmoz", "founded_year" : 2003 }
{ "name" : "Facebook", "founded_year" : 2004 }
{ "name" : "Plaxo", "founded_year" : 2002 }
{ "name" : "Technorati", "founded_year" : 2002 }
{ "name" : "AddThis", "founded_year" : 2004 }
{ "name" : "Veoh", "founded_year" : 2004 }
{ "name" : "Meetup", "founded_year" : 2002 }
{ "name" : "SmugMug", "founded_year" : 2002 }
{ "name" : "Pando Networks", "founded_year" : 2004 }
{ "name" : "Ikan", "founded_year" : 2003 }
{ "name" : "Skype", "founded_year" : 2003 }
{ "name" : "Topix", "founded_year" : 2002 }
{ "name" : "delicious", "founded_year" : 2003 }
{ "name" : "Jobster", "founded_year" : 2004 }
{ "name" : "AllPeers", "founded_year" : 2004 }
{ "name" : "iContact", "founded_year" : 2003 }
{ "name" : "Yelp", "founded_year" : 2004 }
{ "name" : "blinkx", "founded_year" : 2004 }

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companies.find({$and:[{"ipo.valuation_amount":{$gt:100000000}}, {founded_year:{$lt:2010}}]}, {name:1, ipo:1, _id:0})
{ "name" : "Twitter", "ipo" : { "valuation_amount" : NumberLong("18100000000"), "valuation_currency_code" : "USD", "pub_year" : 2013, "pub_month" : 11, "pub_day" : 7, "stock_symbol" : "NYSE:TWTR" } }
{ "name" : "Facebook", "ipo" : { "valuation_amount" : NumberLong("104000000000"), "valuation_currency_code" : "USD", "pub_year" : 2012, "pub_month" : 5, "pub_day" : 18, "stock_symbol" : "NASDAQ:FB" } }

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({$and:[{number_of_employees:{$lt: 1000}}, {founded_year:{$lt:2005}}]}, {name:1, number_of_employees:1, _id:0}).sort({number_of_employees:-1}).limit(10)
{ "name" : "Infinera Corporation", "number_of_employees" : 974 }
{ "name" : "NorthPoint Communications Group", "number_of_employees" : 948 }
{ "name" : "888 Holdings", "number_of_employees" : 931 }
{ "name" : "Forrester Research", "number_of_employees" : 903 }
{ "name" : "Webmetrics", "number_of_employees" : 900 }
{ "name" : "SonicWALL", "number_of_employees" : 900 }
{ "name" : "Cornerstone OnDemand", "number_of_employees" : 881 }
{ "name" : "Buongiorno", "number_of_employees" : 800 }
{ "name" : "Cvent", "number_of_employees" : 800 }
{ "name" : "ZoomInfo", "number_of_employees" : 800 }

### 6. All the companies that don't include the `partners` field.

db.companies.find({partner:{$nin:[]}})

### 7. All the companies that have a null type of value on the `category_code` field.

 db.companies.find({category_code:{$in:[null]}})

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find({$and:[{number_of_employees:{$gt:100}}, {number_of_employees:{$lt:1000}}]}, {name:1, number_of_employees:1, _id:0})
{ "name" : "AdventNet", "number_of_employees" : 600 }
{ "name" : "AddThis", "number_of_employees" : 120 }
{ "name" : "OpenX", "number_of_employees" : 305 }
{ "name" : "LifeLock", "number_of_employees" : 644 }
{ "name" : "Jajah", "number_of_employees" : 110 }
{ "name" : "Livestream", "number_of_employees" : 120 }
{ "name" : "Ustream", "number_of_employees" : 250 }
{ "name" : "iContact", "number_of_employees" : 300 }
{ "name" : "Yelp", "number_of_employees" : 800 }
{ "name" : "Dailymotion", "number_of_employees" : 120 }
{ "name" : "RockYou", "number_of_employees" : 106 }
{ "name" : "Meebo", "number_of_employees" : 200 }
{ "name" : "Eventbrite", "number_of_employees" : 200 }
{ "name" : "Box", "number_of_employees" : 950 }
{ "name" : "Conduit", "number_of_employees" : 215 }
{ "name" : "oDesk", "number_of_employees" : 120 }
{ "name" : "PhotoBox", "number_of_employees" : 600 }
{ "name" : "Spreadshirt", "number_of_employees" : 230 }
{ "name" : "spigit", "number_of_employees" : 120 }
{ "name" : "Bazaarvoice", "number_of_employees" : 600 }

### 9. Order all the companies by their IPO price in a descending order.

db.companies.find({"ipo.valuation_amount":{$ne:null}},{"ipo.valuation_amount":1, _id:0}).sort({"ipo.valuation":-1})
{ "ipo" : { "valuation_amount" : NumberLong("18100000000") } }
{ "ipo" : { "valuation_amount" : NumberLong("104000000000") } }
{ "ipo" : { "valuation_amount" : 1300000000 } }
{ "ipo" : { "valuation_amount" : NumberLong("9310000000") } }
{ "ipo" : { "valuation_amount" : 290000000 } }
{ "ipo" : { "valuation_amount" : NumberLong("100000000000") } }
{ "ipo" : { "valuation_amount" : 235000000 } }
{ "ipo" : { "valuation_amount" : 100000000 } }
{ "ipo" : { "valuation_amount" : 1600000000 } }
{ "ipo" : { "valuation_amount" : 1050000000 } }
{ "ipo" : { "valuation_amount" : 287000000 } }
{ "ipo" : { "valuation_amount" : 1000000000 } }
{ "ipo" : { "valuation_amount" : NumberLong("2550000000") } }
{ "ipo" : { "valuation_amount" : 750000000 } }
{ "ipo" : { "valuation_amount" : 11003200 } }
{ "ipo" : { "valuation_amount" : 350000000 } }
{ "ipo" : { "valuation_amount" : NumberLong("3273770000") } }
{ "ipo" : { "valuation_amount" : 110000000 } }
{ "ipo" : { "valuation_amount" : NumberLong("3000000000") } }
{ "ipo" : { "valuation_amount" : 160000000 } }

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

db.companies.find({}, {name:1, number_of_employees:1, _id:0}).sort({number_of_employees:-1}).limit(10)
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

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({founded_month:{$gt:6}}, {name:1, founded_month:1, _id:0}).limit(1000)
{ "name" : "Wetpaint", "founded_month" : 10 }
{ "name" : "Zoho", "founded_month" : 9 }
{ "name" : "Digg", "founded_month" : 10 }
{ "name" : "Omnidrive", "founded_month" : 11 }
{ "name" : "Joost", "founded_month" : 10 }
{ "name" : "Plaxo", "founded_month" : 11 }
{ "name" : "Powerset", "founded_month" : 10 }
{ "name" : "eBay", "founded_month" : 9 }
{ "name" : "Kyte", "founded_month" : 12 }
{ "name" : "Thoof", "founded_month" : 12 }
{ "name" : "Jingle Networks", "founded_month" : 9 }
{ "name" : "Wesabe", "founded_month" : 12 }
{ "name" : "SmugMug", "founded_month" : 11 }
{ "name" : "LifeLock", "founded_month" : 8 }
{ "name" : "Pando Networks", "founded_month" : 7 }
{ "name" : "Ikan", "founded_month" : 12 }
{ "name" : "Skype", "founded_month" : 8 }
{ "name" : "delicious", "founded_month" : 9 }
{ "name" : "AllPeers", "founded_month" : 8 }
{ "name" : "Wize", "founded_month" : 8 }

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

db.companies.find({$and:[{founded_year:{$lt:2000}}, {"acquisitions.price_amount":{$gt:10000000}}, {"acquisitions.price_amount":{$ne:null}}]}, {name:1, "acquisitions.price_amount":1,founded_year:1, _id:0})

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

db.companies.find({"acquisition.acquired_year":{$gt:2010}}, {name:1, "acquisition.acquired_year":1, "acquisition.price_amount" _id:0}).sort({"acquisition.price_amount":-1})

{ "name" : "T-Mobile", "acquisition" : { "price_amount" : NumberLong("39000000000"), "acquired_year" : 2011 } }
{ "name" : "Goodrich Corporation", "acquisition" : { "price_amount" : NumberLong("18400000000"), "acquired_year" : 2011 } }
{ "name" : "LSI", "acquisition" : { "price_amount" : NumberLong("6600000000"), "acquired_year" : 2013 } }
{ "name" : "National Semiconductor", "acquisition" : { "price_amount" : NumberLong("6500000000"), "acquired_year" : 2011 } }
{ "name" : "Ariba", "acquisition" : { "price_amount" : NumberLong("4300000000"), "acquired_year" : 2012 } }
{ "name" : "NetLogic Microsystems", "acquisition" : { "price_amount" : NumberLong("3700000000"), "acquired_year" : 2011 } }
{ "name" : "SuccessFactors", "acquisition" : { "price_amount" : NumberLong("3400000000"), "acquired_year" : 2012 }}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find({}, {name:1, founded_year:1, _id:0}).sort({founded_year:-1})

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

db.companies.find({founded_day:{$lte:7}}, {name:1, founded_day:1,"acquisition.price_amount":1, _id:0}).sort({"acquisition.price_amount":-1}).limit(10)
{ "name" : "Netscape", "founded_day" : 4, "acquisition" : { "price_amount" : NumberLong("4200000000") } }
{ "name" : "PayPal", "founded_day" : 1, "acquisition" : { "price_amount" : 1500000000 } }
{ "name" : "Zappos", "founded_day" : 1, "acquisition" : { "price_amount" : 1200000000 } }
{ "name" : "Alibaba", "founded_day" : 1, "acquisition" : { "price_amount" : 1000000000 } }
{ "name" : "Postini", "founded_day" : 2, "acquisition" : { "price_amount" : 625000000 } }
{ "name" : "Danger", "founded_day" : 1, "acquisition" : { "price_amount" : 500000000 } }
{ "name" : "Clearwell Systems", "founded_day" : 6, "acquisition" : { "price_amount" : 410000000 } }
{ "name" : "PrimeSense", "founded_day" : 1, "acquisition" : { "price_amount" : 345000000 } }
{ "name" : "Amobee", "founded_day" : 1, "acquisition" : { "price_amount" : 321000000 } }
{ "name" : "Vitrue", "founded_day" : 1, "acquisition" : { "price_amount" : 300000000 } }

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

db.companies.find({$and:[{category_code:"web"}, {number_of_employees:{$gt:4000}}]}, {name:1, number_of_employees:1, category_code:1, _id:0}).sort({number_of_employees:1})
{ "name" : "Expedia", "category_code" : "web", "number_of_employees" : 4400 }
{ "name" : "AOL", "category_code" : "web", "number_of_employees" : 8000 }
{ "name" : "Webkinz", "category_code" : "web", "number_of_employees" : 8657 }
{ "name" : "Rakuten", "category_code" : "web", "number_of_employees" : 10000 }
{ "name" : "Los Angeles Times Media Group", "category_code" : "web", "number_of_employees" : 10000 }
{ "name" : "Groupon", "category_code" : "web", "number_of_employees" : 10000 }
{ "name" : "Yahoo!", "category_code" : "web", "number_of_employees" : 13600 }
{ "name" : "eBay", "category_code" : "web", "number_of_employees" : 15000 }
{ "name" : "Experian", "category_code" : "web", "number_of_employees" : 15500 }
>

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

db.companies.find({$and:[{"acquisition.price_amount":{$gt:10000000}}, {"acquisition.price_currency_code":"EUR"}]}, {name:1, "acquisition.price_amount":1, "acquisition.price_currency_code":1, _id:0})

{ "name" : "ZYB", "acquisition" : { "price_amount" : 31500000, "price_currency_code" : "EUR" } }
{ "name" : "Apertio", "acquisition" : { "price_amount" : 140000000, "price_currency_code" : "EUR" } }
{ "name" : "Greenfield Online", "acquisition" : { "price_amount" : 40000000, "price_currency_code" : "EUR" } }
{ "name" : "Webedia", "acquisition" : { "price_amount" : 70000000, "price_currency_code" : "EUR" } }
{ "name" : "Wayfinder", "acquisition" : { "price_amount" : 24000000, "price_currency_code" : "EUR" } }
{ "name" : "Tuenti Technologies", "acquisition" : { "price_amount" : 70000000, "price_currency_code" : "EUR" } }
{ "name" : "BioMed Central", "acquisition" : { "price_amount" : 43400000, "price_currency_code" : "EUR" } }

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

db.companies.find({founded_month:{$lte:4}}, {name:1, acquisition:1, _id:0}).limit(10)

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
db.companies.find({$and:[{founded_year:{$gt:2000}}, {founded_year:{$lt:2010}}, {"acquisition.acquired_year":{$gt:2011}} ]}, {name:1, founded_year:1, "acquisition.acquired_year":1, _id:0})
{ "name" : "Wetpaint", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Digg", "founded_year" : 2004, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Geni", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "blogTV", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Revision3", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "iContact", "founded_year" : 2003, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Mashery", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Dailymotion", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "KickApps", "founded_year" : 2004, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Netvibes", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "adBrite", "founded_year" : 2003, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Meebo", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Seesmic", "founded_year" : 2007, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Oodle", "founded_year" : 2004, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Indeed", "founded_year" : 2004, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Grockit", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Zenfolio", "founded_year" : 2005, "acquisition" : { "acquired_year" : 2013 } }
{ "name" : "Wishpot", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "Retrevo", "founded_year" : 2006, "acquisition" : { "acquired_year" : 2012 } }
{ "name" : "TokBox", "founded_year" : 2007, "acquisition" : { "acquired_year" : 2012 } }

