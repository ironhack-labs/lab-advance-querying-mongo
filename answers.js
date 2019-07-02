/*
1. Filter : {name: "Babelgum"}
    project: {name: 1, _id: 0}

2. filter: { number_of_employees : { $gt: 5000 } }
    sort: { number_of_employees : 1 }
    limit: 20

3. Filter: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}
    Project: {founded_year: 1, name: 1, _id: 0}

4.filter: {$and : [{"ipo.valuation_amount" : {$gte: 100000000}}, {founded_year: {$lt: 2010}}]}
project: {name: 1, ipo:1, _id:0}

5. Filter: {$and: [{number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}}]}
    Sort: {number_of_employees: 1}

6. filter: { partners: { $exists: false } }

7. Filter: {category_code: null}

8. filter: { $and: [ { number_of_employees: { $gte: 100}}, { number_of_employees: { $lt: 1000}} ] }
project: {name: 1, number_of_employees:1, _id:0}

9. Filter: {"ipo.valuation_amount": -1}

10.sort: { number_of_employees : -1 }
limit: 10

11. Filter: {founded_month: {$gt: 6}}
    Limit: 1000

12. {$where: "this.deadpooled_year > this.founded_year + 3"}

13. Filter: {$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000}}]}

14. filter: {"acquisition.acquired_year" : {$gt: 2005}}
project: {name: 1, acquisition:1, _id:0}
sort: {"acquisition.price_amount": -1}

15. Project: {name: 1, founded_year: 1, _id: 0}
    Sort: {founded_year: 1}

16. filter: {founded_day : {$lte : 7}}
sort: {"acquisition.price_amount": -1}

17. Project: {$and: [{category_code: "web"},{number_of_employees: {$gt: 4000}}]}
    Sort: {number_of_employees: 1}

18. filter:  {$and : [{"acquisition.price_amount" : {$gt : 10000000}}, {"acquisition.price_currency_code" : {$eq : "EUR"}}]}

19. Filter: {"acquisition.acquired_month": {$lte: 3}}
    Project: {name: 1, acquisition: 1, _id: 0}

20. filter:  {$and : [{founded_year : {$gte : 2000}}, {founded_year : {$lte : 2010}}, {"acquisition.acquired_year" : {$gte : 2011}}]}

*/
