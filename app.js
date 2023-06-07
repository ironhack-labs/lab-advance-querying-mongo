// 1. 
db.companies.find({name: "Babelgum"}, {name: 1, _id: 0})

// 2. 
db.companies.find({ "number_of_employees": { $gt: 5000 } }).sort({ "number_of_employees": 1 }).limit(20)

// 3
db.companies.find(
    {
       founded_year: { $gte: 2000, $lte: 2005 }
    },
    {
       name: 1,
       founded_year: 1,
       _id: 0
    }
 )
 
//  4
db.companies.find(
    {
       "ipo.valuation_amount": { $gt: 100000000 },
       founded_year: { $lt: 2010 }
    },
    {
       name: 1,
       ipo: 1,
       _id: 0
    }
 )
 
//  5
db.companies.find({
    "founded_year": { $gte: 2000 },
    "number_of_employees": { $gt: 100 }
 }, {
    name: 1,
    number_of_employees: 1,
    _id: 0
 }).sort({
    number_of_employees: -1
 }).skip(5).limit(10)

//  6
db.companies.find({
    partners: { $exists: false }
 }, {
    name: 1,
    _id: 0
 }).sort({
    name: 1
 }).skip(10).limit(5)

 //  7
 db.companies.find({
    category_code: null
 }, {
    name: 1,
    _id: 0
 }).sort({
    name: 1
 }).skip(5).limit(10)

//  8
db.companies.find({
    number_of_employees: { $gte: 100, $lt: 1000 }
 }, {
    name: 1,
    number_of_employees: 1,
    _id: 0
 }).sort({
    number_of_employees: 1
 })

//  9
db.companies.find({}, { name: 1, ipo: 1, _id: 0 }).sort({ "ipo.valuation_amount": -1 })

// 10
db.companies.find({}, { name: 1, number_of_employees: 1, _id: 0 }).sort({ number_of_employees: -1 }).limit(10)

// 11
db.companies.find({ founded_month: { $gt: 6 }, founded_month: { $lte: 12 } }).limit(1000)

// 12
db.companies.find({ 
    founded_year: { $lt: 2000 },
    "acquisitions.price_amount": { $gt: 10000000 }
  })

//   13
db.companies.find(
    { "acquisitions.acquired_year": { $gt: 2010 } }, 
    { name: 1, acquisition: 1, _id: 0 }
  ).sort({ "acquisition.price_amount": -1 })

//   14
db.companies.find(
    {}, 
    { name: 1, founded_year: 1, _id: 0 }
  ).sort({ founded_year: 1 })

//   15
db.companies.find(
    { 
      founded_day: { $lte: 7 } 
    },
    {
      name: 1, 
      founded_day: 1, 
      acquisition: 1,
      _id: 0
    }
  ).sort({ acquisition: -1 }).limit(10)

//   16
db.companies.find(
    { 
      category_code: "web",
      number_of_employees: { $gt: 4000 }
    },
    {
      name: 1, 
      category_code: 1, 
      number_of_employees: 1,
      _id: 0
    }
  ).sort({ number_of_employees: 1 })

// 17
db.companies.find(
    { 
      "acquisition.price_amount": { $gt: 10000000 },
      "acquisition.price_currency_code": "EUR"
    },
    {
      name: 1,
      acquisition: 1,
      _id: 0
    }
  )

// 18
db.companies.find(
    {
      "acquisition.acquired_month": { $in: [1, 2, 3] }
    },
    {
      name: 1,
      acquisition: 1,
      _id: 0
    }
  ).limit(10)

// 19
db.companies.find(
    {
        $and: [
            { founded_year: {$gte: 2000, $lte: 2010} },
            { "acquisition.acquired_year": {$not: {$lt: 2011}}, acquisition: {$exists:false} }
        ]
    }
)

// 20
db.companies.find({
    founded_year: { $gte: 2000, $lte: 2010 },
    "acquisition.acquired_year": { $gte: 2011, $exists: true }
  })
  