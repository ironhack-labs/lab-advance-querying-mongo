db.companies.find({
    $and: [{
        "deadpooled_year": {
            $exists: true,
            $nin: [null]
        }
    }, {
        $substract: [{
            "deadpooled_year",
            "founded_year"
        }]: {
            $gte: 3
        }
    }]
}).pretty()