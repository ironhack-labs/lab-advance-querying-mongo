1. {name: "Babelgum"}
2. {number_of_employees: {$gt : 5000}} {number_of_employees: 1}
3. {$and:[ {founded_year: {$gte: 2000}}, {founded_year: {$lte : 2005}}]} {name: 1, founded_year: 1, _id: 0}
4. {$and: [{founded_year: {$lt: 2010}}, {"ipo.valuation_amount": {$gte: 1000000000}}]} {name: 1, ipo: 1, _id: 0}
5. {$and:[ {founded_year: {$lt: 2005}}, {number_of_employees: {$lt : 1000}}]} {number_of_employees: 1}
6. {partners: {$exists: false}}
7. {category_code: null}
8. {$and: [{number_of_employees: {$gt : 100}}, {number_of_employees: {$lt : 1000}}]} {_id: 0, name: 1, number_of_employees: 1}
9. {"ipo.valuation_amount": {$exists: true}} {"ipo.valuation_amount" : -1}
10. {number_of_employees: -1} Limit: 10
11. {$and: [{founded_month: {$gte: 1}}, {founded_month: {$lte: 6}}]} Limit 1000
12. {deadpooled_year: {$gte: 3}}
13. {$and: [{founded_year: {$lt: 2000}}, {"acquisitions.price_amount": {$gt: 10000000}}]}
14. {"acquisition.acquired_year": {$gt: 2015}} {name: 1, _id: 0, acquisition: 1} {"acquisition.price_amount": 1}
15. {founded_year: {$ne: null}} {_id: 0, name: 1, founded_year: 1} {founded_year: 1}
16. {$and: [{founded_day: {$gte: 1}},{founded_day: {$lte: 7}}]} {"acquisition.price_amount": -1} Limit 10
17. {$and: [{number_of_employees: {$gt : 4000}}, {category_code: 'web'}]} {number_of_employees: 1}
18. {$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"}]}
19. {$and: [{"acquisition.acquired_month": {$gte: 1}}, {"acquisition.acquired_month": {$lte: 3}}]} {_id: 0, name: 1, acquisition: 1} Limit  10
20. {$and:[ {founded_year: {$gte: 2000}}, {founded_year: {$lte : 2010}}, {"acquisition.acquired_year": {$gt: 2011}}]}


