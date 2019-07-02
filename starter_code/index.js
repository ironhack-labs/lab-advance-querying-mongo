//Problem 1 Solution
{name: "Babelgum"}

//Problem 2 Solution
{number_of_employees: {$gt: 5000}}

//Problem 3 Solution
{$and: [{founded_year: {$gt: 2000}},{founded_year: {$lt: 2005}}]}
{name:1 ,founded_year:1,_id:0} //Project

//Problem 4 Solution
{$and: [{founded_year: {$lt: 2010}},{"ipo.valuation_amount": {$gt: 100000000}}]}
{name:1,ipo:1, _id:0} //Project

//Problem 5 Solution
{$and: [{founded_year: {$lt: 2005}},{number_of_employees: {$lt: 1000}}]}
{number_of_employees: 1} //Project
10 //Limit

//Problem 6 Solution
{ partners: { $exists: false } }

//Problem 7 Solution
{ category_code: { $type: 10 } }

//Problem 8 Solution
{$and: [{number_of_employees: {$gte: 100}},{number_of_employees: {$lt: 1000}}]}
{name: 1, number_of_employees:1, _id:0} //Project

//Problem 9 Solution
{ipo:1} //Project
{"ipo.valuation_amount":-1} //sort

//Problem 10 Solution
{number_of_employees:-1} //sort

//Problem 11 Solution
{founded_month: {$gt: 6}}
{founded_month:1} //Sort
1000 //Limit

//Problem 12 Solution
{deadpooled_year: {$gt: 3}}

//Problem 13 Solution
{$and: [{founded_year: {$lt: 2000}},{"acquisition.price_amount": {$gt: 10000000}}]}

//Problem 14 Solution
{"acquisition.acquired_year": {$gt: 2015}}
{acquisition:1, name:1, _id:0} //Project
{"acquisitions.price_amount":1} //Sort

//Problem 15 Solution
{founded_year:1, name:1, _id:0} //Project
{founded_year:1} //Sort

//Problem 16 Solution
{founded_day: {$lte: 7}}
{"acquisition.price_amount":-1} //Sort
10 //Limit

//Problem 17 Solution
{$and: [{category_code: "web"},{number_of_employees: {$gt: 4000}}]}
{number_of_employees:1} //Sort

//Problem 18 Solution
{$and: [{"acquisition.price_amount": {$gt: 10000000}},{"acquisition.price_currency_code": "EUR"}]}

//Problem 19 Solution
{"acquisition.acquired_month": {$lt: 5}}
{name:1,acquisition:1,_id:0}//Project
10 //Limit

//Problem 20 Solution
// {$and: [{founded_year: {$gt: 2000}},{founded_year: {$lt: 2010}},{"acquisition.acquired_year": {$ne: 2000}},{"acquisition.acquired_year": {$ne: 2001}},{"acquisition.acquired_year": {$ne: 2002}},{"acquisition.acquired_year": {$ne: 2003}},{"acquisition.acquired_year": {$ne: 2004}},{"acquisition.acquired_year": {$ne: 2005}},{"acquisition.acquired_year": {$ne: 2006}},{"acquisition.acquired_year": {$ne: 2007}},{"acquisition.acquired_year": {$ne: 2008}},{"acquisition.acquired_year":{$ne: 2009}},{"acquisition.acquired_year": {$ne: 2010}}]}
//Below is a better solution
{$and: [{founded_year: {$gt: 2000}},{founded_year: {$lt: 2010}},{"acquisition.acquired_year": {$nin: [2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000]}}]}
  
