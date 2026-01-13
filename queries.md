/_ =========================
ITERATION 2
========================= _/

// 1. Companies cuyo nombre es "Babelgum" (solo name)
db.companies.find(
{ name: "Babelgum" },
{ \_id: 0, name: 1 }
)

// 2. Companies con más de 5000 empleados, ordenadas por empleados, límite 20
db.companies.find(
{ number_of_employees: { $gt: 5000 } }
).sort({ number_of_employees: 1 }).limit(20)

// 3. Companies fundadas entre 2000 y 2005 (incluidos), solo name y founded_year
db.companies.find(
{ founded_year: { $gte: 2000, $lte: 2005 } },
{ \_id: 0, name: 1, founded_year: 1 }
)

// 4. Companies con IPO valuation > 100M y fundadas antes de 2010
db.companies.find(
{
"ipo.valuation_amount": { $gt: 100000000 },
founded_year: { $lt: 2010 }
},
{ \_id: 0, name: 1, ipo: 1 }
)

// 5. Companies que NO incluyen el campo partners
db.companies.find(
{ partners: { $exists: false } }
)

// 6. Companies con category_code = null
db.companies.find(
{ category_code: null }
)

// 7. Ordenar todas las companies por IPO price descendente
db.companies.find().sort({ "ipo.price": -1 })

// 8. Top 10 companies con más empleados
db.companies.find().sort({ number_of_employees: -1 }).limit(10)

// 9. Companies fundadas en el segundo semestre (julio a diciembre), límite 1000
db.companies.find(
{ founded_month: { $gte: 7, $lte: 12 } }
).limit(1000)

// 10. Companies fundadas en los primeros 7 días del mes,
// ordenadas por acquisition price descendente, límite 10
db.companies.find(
{ founded_day: { $lte: 7 } }
).sort({ "acquisition.price_amount": -1 }).limit(10)

/_ =========================
ITERATION 3 (BONUS)
========================= _/

// 1. Companies adquiridas después de 2010,
// ordenadas por acquisition amount, solo name y acquisition
db.companies.find(
{ "acquisition.acquired_year": { $gt: 2010 } },
{ \_id: 0, name: 1, acquisition: 1 }
).sort({ "acquisition.price_amount": 1 })

// 2. Ordenar companies por founded_year, solo name y founded_year
db.companies.find(
{},
{ \_id: 0, name: 1, founded_year: 1 }
).sort({ founded_year: 1 })

// 3. Companies categoría "web" con más de 4000 empleados,
// ordenadas por número de empleados ascendente
db.companies.find(
{
category_code: "web",
number_of_employees: { $gt: 4000 }
}
).sort({ number_of_employees: 1 })

// 4. Companies con acquisition amount > 10M y currency EUR
db.companies.find(
{
"acquisition.price_amount": { $gt: 10000000 },
"acquisition.price_currency_code": "EUR"
}
)

// 5. Companies fundadas entre 2000 y 2010
// que NO hayan sido adquiridas antes de 2011
db.companies.find(
{
founded_year: { $gte: 2000, $lte: 2010 },
$or: [
{ acquisition: null },
{ "acquisition.acquired_year": { $gte: 2011 } }
]
}
)
