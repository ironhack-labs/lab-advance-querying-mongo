![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

{'name': 'Babelgum'}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
// Query, that is, what´s in the filter
{'number_of_employees': {$gt:5000}}
// EveryThing Else
limit:20



### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
// Query, that is, what´s in the filter
{ 'founded_year' : { '$gt' : 1999 , '$lt' : 2005 }} 

// EveryThing Else

{
    project: {name:1, founded_year:1}
}


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
// Query, that is, what´s in the filter
{"ipo.valuation_amount":{$gt:1000000}}   

// EveryThing Else

{
    project: {name:1, ipo:1}
}



### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

// Query, that is, what´s in the filter
{
    number_of_employees
}

// EveryThing Else
{
    limit:100,
    skip:0,
    limit:20

}

### 6. All the companies that don't include the `partners` field.

// Query, that is, what´s in the filter
{ 
    "partners" : { "$exists" : false } 
    }


### 7. All the companies that have a null type of value on the `category_code` field.

// Query, that is, what´s in the filter
{
     "category_code" : null 
     }



### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

// Query, that is, what´s in the filter

{ 'number_of_employees' : { '$gt' : 100 , '$lt' : 1000 }}

// EveryThing Else
{
    project: {name:1, number_of_employees:1}
}



### 9. Order all the companies by their IPO price descendently.

// Query, that is, what´s in the filter

// EveryThing Else

{

    { ipo: -1 }
}


### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

// Query, that is, what´s in the filter


// EveryThing Else

{
    sort:{ number_of_employees: 1 }
    limit: 10
}

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

// Query, that is, what´s in the filter

{ 'founded_month' : { '$gt' : 9 }}  // assuming the second semester starts at the month 9!

// EveryThing Else

{

    limit: 1000  // Limit your search to 1000 companies.
}



### 12. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

// Query, that is, what´s in the filter

{ 'founded_year' : { '$lt' : 2000 }}  // all the companies founded before 2000 *****************************

// EveryThing Else

### 13. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

// Query, that is, what´s in the filter

{ 'acquisition' : { '$gt' : 2015 }} // not finished , missing the pipeline


// EveryThing Else

sort:{ acquisition_amount: 1 }
project: {name:1, acquisition:1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

// Query, that is, what´s in the filter



// EveryThing Else

sort:{ founded_year: -1 }
project: {name:1, founded_year:1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` descendently. Limit the search to 10 documents.

// Query, that is, what´s in the filter


{ 'founded_day' : { '$gt' : 0,'$lt' : 8}}

// EveryThing Else

sort:{ acquisition_price: 1 }
limit: 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

// Query, that is, what´s in the filter


// EveryThing Else

sort:{ number_of_employees : 1 }




### 17. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

// Query, that is, what´s in the filter

{ "acquisitions.price_amount" : { '$gt' :10000000 },"price_currency_code": "USD"} // not returning anything **********************

{ "acquisitions.price_amount" : { '$gt' :€10000000  }}

// EveryThing Else



### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

// Query, that is, what´s in the filter

{ "acquisitions.price_amount" : { '$gt' :0, '$lt' :4 }}

// EveryThing Else

{

    limit: 10  // Limit your search to 10 companies.
    project: {name:1, acquisition:1}
}




### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

// Query, that is, what´s in the filter


// EveryThing Else



