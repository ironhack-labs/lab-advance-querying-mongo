![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.


const filter = {
  'name': 'Babelgum'
};
const projection = {
  'name': 1
};


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.


const filter = {
  'number_of_employees': {
    '$gte': 5000
  }
};
const projection = {
  'number_of_employees': 1, 
  'name': 1
};
const sort = {
  'number_of_employees': 1
};
const limit = 20;


### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

const filter = {
  'founded_year': {
    '$gte': 2000, 
    '$lte': 2005
  }
};
const projection = {
  'founded_year': 1, 
  'name': 1
};


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

const filter = {
  'founded_year': {
    '$lt': 2010
  }, 
  'ipo.valuation_amount': {
    '$gt': 100000000
  }
};
const projection = {
  'name': 1, 
  'ipo': 1, 
  '_id': 0
};

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

const filter = {
  'number_of_employees': {
    '$lt': 1000
  }, 
  'founded_year': {
    '$lt': 2005
  }
};
const projection = {
  'founded_year': 1, 
  'number_of_employees': 1
};
const sort = {
  'number_of_employees': 1
};
const limit = 10;

### 6. All the companies that don't include the `partners` field.

const filter = {
  'partners': {
    '$exists': false
  }
};

<!-- displays no data bc every company got this field by default, but in some cases the array is empty.. -->

### 7. All the companies that have a null type of value on the `category_code` field.


const filter = {
  'category_code': null
};
const projection = {
  'category_code': 1, 
  'name': 1, 
  '_id': 0
};


### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

const filter = {
  'number_of_employees': {
    '$gte': 100, 
    '$lt': 1000
  }
};
const projection = {
  'number_of_employees': 1, 
  'name': 1
};
const sort = {
  'number_of_employees': -1
};

### 9. Order all the companies by their IPO price in a descending order.

const filter = {};
const projection = {
  'ipo.valuation_amount': 1, 
  'name': 1, 
  '_id': 0
};
const sort = {
  'ipo.valuation_amount': -1
};

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

const filter = {};
const projection = {
  'number_of_employees': 1, 
  'name': 1, 
  '_id': 0
};
const sort = {
  'number_of_employees': -1
};
const limit = 10;

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

const filter = {
  'founded_month': {
    '$gt': 6
  }
};
const projection = {
  'founded_month': 1, 
  'name': 1
};
const sort = {
  'founded_month': 1
};
const limit = 1000;>

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

const filter = {
  'founded_year': {
    '$lt': 2000
  }, 
  'ipo.valuation_amount': {
    '$gt': 10000000
  }
};
const projection = {
  'founded_year': 1, 
  'name': 1, 
  'ipo.valuation_amount': 1
};
const sort = {
  'ipo.valuation_amount': 1
};
const limit = 1000;           -->

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

const filter = {
  'ipo.pub_year': {
    '$gt': 2010
  }, 
  'acquisition.acquired_year': {
    '$gt': 2010
  }
};
const projection = {
  '_id': 0, 
  'name': 1, 
  'acquisition': 1
};
const sort = {
  'ipo.valuation_amount': 1
};

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

const filter = {};
const projection = {
  '_id': 0, 
  'name': 1, 
  'founded_year': 1
};
const sort = {
  'founded_year': -1
};

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

const filter = {
  'founded_day': {
    '$lte': 7
  }
};
const projection = {
  '_id': 0, 
  'name': 1, 
  'founded_day': 1, 
  'acquisitions.price_amount': 1
};
const sort = {
  'acquisitions.price_amount': -1
};
const limit = 10;

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

const filter = {
  'category_code': 'web', 
  'number_of_employees': {
    '$gt': 4000
  }
};
const projection = {
  '_id': 0, 
  'name': 1, 
  'category_code': 1, 
  'number_of_employees': 1
};
const sort = {
  'number_of_employees': 1
};

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
