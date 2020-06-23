
// #1 All the companies whose name match 'Babelgum'. Retrieve only their name field.
const filter = {
    'name': 'Babelgum'
};
const projection = {
    'name': 1,
    '_id': 0
};

// #2 All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.
const filter = {
    'number_of_employees': {
        '$gt': 5000
    }
};
const sort = {
    'number_of_employees': 1
};
const limit = 20;

// 3 All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
const filter = {
    '$and': [
        {
            'founded_year': {
                '$gt': 1999
            }
        }, {
            'founded_year': {
                '$lt': 2006
            }
        }
    ]
};
const projection = {
    'name': 1,
    'founded_year': 1,
    '_id': 0
};

//#4 All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the name and ipo fields.

const filter = {
    '$and': [
        {
            'acquisition.price_amount': {
                '$gt': 5000
            }
        }, {
            'founded_year': {
                '$lte': 2010
            }
        }
    ]
};
const projection = {
    'name': 1,
    'ipo': 1,
    '_id': 0
};

//#5 All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
const filter = {
    '$and': [
        {
            'number_of_employees': {
                '$lte': 1000
            }
        }, {
            'founded_year': {
                '$lte': 2005
            }
        }
    ]
};
const sort = {
    'number_of_employees': 1
};
const limit = 10;

//#6 All the companies that don't include the partners field.

const filter = {
    'partners': {
        '$exists': false
    }
};

//#7. All the companies that have a null type of value on the `category_code` field.

const filter = {
    'category_code': {
        '$eq': null
    }
};

//#8 All the companies that have at least 100 employees but less than 1000. Retrieve only the name and number of employees fields.

const filter = {
    '$and': [
        {
            'number_of_employees': {
                '$gte': 100
            }
        }, {
            'number_of_employees': {
                '$lte': 1000
            }
        }
    ]
};
const projection = {
    'name': 1,
    'number_of_employees': 1,
    '_id': 0
};

//#9 Order all the companies by their IPO price in descending order.
const filter = {};
const sort = {
    'ipo': -1
};

//#10 Retrieve the ten companies with more employees, order by the number of employees

const filter = {};
const sort = {
    'number_of_employees': -1
};
const limit = 10;

//#11 All the companies founded in the second semester of the year. Limit your search to 1000 companies.

const filter = {
    '$and': [
        {
            'founded_month': {
                '$gt': 6
            }
        }
    ]
};
const limit = 1000;

//#12 All the companies founded in the second semester of the year. Limit your search to 1000 companies.

const filter = {
    '$and': [
        {
            'founded_year': {
                '$lte': 2000
            }
        }, {
            'ipo.valuation_amount': {
                '$gte': 10000000
            }
        }
    ]
};

//# 13 All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their name and acquisition field.

const filter = {
    'acquisition.acquired_year': {
        '$gte': 2010
    }
};
const projection = {
    'name': 1,
    'acquisition': 1,
    '_id': 0
};
const sort = {
    'acquisition.price_amount': 1
};

//#14 Order the companies by their founded year, retrieving only their name and founded year.

const filter = {};
const projection = {
    'name': 1,
    'founded_year': 1,
    '_id': 0
};
const sort = {
    'founded_year': -1
};

//#15 All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their acquisition price in descending order. Limit the search to 10 documents
const filter = {
    'founded_day': {
        '$lte': 7
    }
};
const sort = {
    'acquisition.price_amount': -1
};
const limit = 10;

//#16 All the companies on the 'web' category that have more than 4000 employees. Sort them by the number of employees in ascending order.
const filter = {
    '$and': [
        {
            'category_code': {
                '$eq': 'web'
            }
        }, {
            'number_of_employees': {
                '$gt': 4000
            }
        }
    ]
};
const sort = {
    'number_of_employees': 1
};

//#17 All the companies whose acquisition amount is more than 10.000.000 and the currency is 'EUR'.

const filter = {
    '$and': [
        {
            'acquisition.price_amount': {
                '$gt': 10000000
            }
        }, {
            'acquisition.price_currency_code': {
                '$eq': 'EUR'
            }
        }
    ]
};

//#18 All the companies that have been acquired in the first trimester of the year. Limit the search to 10 companies, and retrieve only their name and acquisition fields.
const filter = {
    'acquisition.acquired_month': {
        '$lt': 4
    }
};
const sort = {
    'name': 1,
    'acquisition': 1
};
const limit = 10;

//#19 All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
const filter = {
    '$and': [
        {
            'founded_year': {
                '$gte': 2000
            }
        }, {
            'founded_year': {
                '$lte': 2010
            }
        }, {
            'acquisition.acquired_year': {
                '$gte': 2011
            }
        }
    ]
};

// Code for query 

MongoClient.connect(
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (connectErr, client) {
        assert.equal(null, connectErr);
        const coll = client.db('companiesDb').collection('companies');
        coll.find(filter, { sort: sort }, (cmdErr, result) => {
            assert.equal(null, cmdErr);
        });
        client.close();
    });
