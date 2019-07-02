//1
{name: "Babelgum"};

//2
{number_of_employees: {$gt:5000}};//filter
{number_of_employees: 1}//sort 
20//limit

//3
{$and :[{founded_year:{$gte: 2000}}, {founded_year:{$lte: 2005}}]}//filter

//4
{$and :[{"ipo.valuation_amount":{$gte: 100000000}}, {founded_year:{$lte: 2010}}]}//filter

//5
{$and :[{"number_of_employees":{$lte: 1000}}, {founded_year:{$lte: 2005}}]}//filer
{number_of_employees: 1}//sort
10//limit

//6
{partners: {$nin: []}}

//7
{category_code: null}

//8
{$and :[{number_of_employees:{$gte: 100}}, {number_of_employees:{$lt: 1000}}]}//filet

//9
{ipo: {$exists :true}}//filet
{ipo: -1}//sort

//10
{number_of_employees: {$exists: true}}//filter
{number_of_employees: -1}//sort

//11
{$and :[{founded_month:{$gt: 3}}, {founded_month:{$lt: 7}}]}//filter
1000//limit

//12
{$where : "this.deadpooled_year > this.founded_year + 3", founded_year: {$ne: null}}//filter

//13
{$and :[{founded_year:{$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000} }]}//filter

//14
{"acquisition.acquired_year":{$gt:2015}}//filter
{"acquisition.price_amount": 1}//sort

//15
{founded_year: 1}//sort

//16
{founded_day: {$lte: 7}}//filter
{"acquisition.price_amount": -1}//sort
10//limit

//17
{$and :[{category_code: 'web'}, {number_of_employees:{$gt: 4000}}]}//filter
{number_of_employees: 1}//sort

//18
{$and :[{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": 'EUR'}]}//filter

//19
{"acquisition.acquired_month": {$lte: 3}}//filter
10//limit

//20
{$and :[{"number_of_employees":{$lte: 1000}}, {founded_year:{$lte: 2005}}]}//filter
