db.companies.find({number_of_employees: {$gt: 5000}}, {number_of_employees: 1, _id:0}).limit(20).s


db.companies.find({number_of_employees: {$gte	:5000}},{number_of_employees:1,_id:0}).limit(20).sort({number_of_employees:1})
db.companies.find({founded_year: {$lte:2010},"ipo.valuation_amount":{$gte:100000000}},{name:1,ipo:1,_id:0}).sort({founded_year:-1})