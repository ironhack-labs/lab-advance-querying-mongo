![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# MongoDB | Compass CRUD

## Introduction

We are back with our queries! :wink:

We have learned some super useful query operators, that will helps us to make much better queries to retrieve the data we need. We will continue using the **Crunchbase** database we used on the last exercise.


## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.


## Deliverables

Since we will be querying our database from Mongo Compass, you will need to copy/paste the `query`, `projection`, `sort`, `skip` and `limit` you entered on Mongo Compass. In the `queries.md` file, you will find the instructions about the queries you need to do, and a field to fill the answers.

### Example

1. This is an example
 - **`query`**: /*You should copy/paste the query in here*/
 - **`projection`**: /*You should copy/paste the projection in here*/
 - **`sort`**: /*You should copy/paste the sort in here*/
 - **`skip`**: /*You should copy/paste the skip in here*/
 - **`limit`**: /*You should copy/paste the limit in here*/

## Instructions

### Iteration 1

First, we need to import the database we will be using for the `lab`. We will use the Crunchbase database. Crunchbase is the premier destination for discovering industry trends, investments, and news about hundreds of thousands of companies globally. From startups to Fortune 500s, Crunchbase is recognized as the primary source of company intelligence by millions of users globally.

The database contains more than 18k documents, and each of them has a lot of information about each of the companies. A document looks like the following:

![image](https://user-images.githubusercontent.com/23629340/36494916-d6db1770-1733-11e8-903e-5119b3c1b688.png)

1. You will find the `.zip` file of the Database on the **lab** folder.
2. Unzip the file
3. From the terminal, import the database to Mongo using the following command:
```bash
$ mongoimport --db companies --collection companies --file companies.json
```
4. Check on Mongo Compass if everything goes ok:

:::info >
When running the `mongoimport` you should be located in the same folder as the `companies.json` file.
:::

![image](https://user-images.githubusercontent.com/23629340/36534191-1f1bc5ec-17c6-11e8-9463-4945679b98c0.png)


### Iteration 2

You already know how this goes, so let's start working:

1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

    ```json
    FILTER: {name: "Babelgum"}
    PROJECT: {name: 1 , _id: 0}
    ```

2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

    ```json
    FILTER: {number_of_employees:{$gt: 5000}}
    SORT: {number_of_employees: -1}
    LIMIT: 20
    ```

3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

    ```json
    FILTER: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}
    PROJECT: {name: 1, founded_year: 1, _id: 0}
    ```

4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

    ```json
    FILTER: {$and: [{"ipo.valuation_amount": {$gt: 100000}}, {founded_year: {$lt: 2010}}]}
    PROJECT: {name: 1, ipo: 1, _id: 0}
    ```

5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

    ```json
    FILTER: { $and: [{ number_of_employees: { $lt: 1000 } }, { founded_year: { $lte: 2005 } }] }
    SORT: { number_of_employees: -1}
    LIMIT: 10
    ```

6. All the companies that don't include the `partners` field.

    ```json
    FILTER: { partners: {$exists: false}}
    ```

7. All the companies that have a null type of value on the `category_code` field.

    ```json
    FILTER: { category_code: { $type: "null" } }
    ```

8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

    ```json
    FILTER: {$and: [{ number_of_employees: { $gte: 100 } }, { number_of_employees: { $lt: 1000 } }]}
    PROJECT: {name:1,number_of_employees:1,_id:0}
    ```

9. Order all the companies by their IPO price descendently.

    ```json
    PROJECT: {name:1,ipo:1,_id:0}
    SORT: {"ipo.valuation_amount":-1}
    ```

10. Retrieve the 10 companies with more employees, order by the `number of employees`

    ```json
    PROJECT: {name:1,_id:0,number_of_employees:1}
    SORT: {number_of_employees:-1}
    LIMIT: 10
    ```

11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

    ```json
    FILTER: {founded_month:{$in:[7,8,9,10,11,12]}}
    LIMIT: 1000
    ```

12. All the companies that have been 'deadpooled' after the third year.

// SKIPPED

13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

    ```json
    FILTER:  {$and: [{ founded_year: { $lt: 2000 } }, { "acquisition.price_amount": { $gt: 10000000 } }]}
    ```

14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field. //Check for clarity for `aquisition`

    ```json
    FILTER: {"acquisition.acquired_year":{$gt: 2015}}
    PROJECT: {name:1,_id:0,acquisition:1}
    SORT: {"acquisition.price_amount":-1}
    ```

15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

    ```json
    PROJECT: {founded_year:1,name:1,_id:0}
    SORT: {founded_year:1}
    ```

16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

    ```json
    FILTER: { $and: [{founded_month: { $lte: 7 }}, {founded_day: { $lte: 7} }] }
    SORT: {"acquisition.price_amount": -1 }
    LIMIT: 10
    ```

17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

    ```json
    FILTER: { $and: [{ category_code: "web"}, {number_of_employees: {$gt: 4000}}] }
    SORT: { number_of_employees: 1}
    ```

18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

    ```json
    FILTER: { $and: [{"acquisition.price_amount": { $gt: 10000000 }}, { "acquisition.price_currency_code": "EUR"}] }
    ```

19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

    ```json
    FILTER: { "acquisition.acquired_month": { $lte: 9}}
    PROJECT: {name: 1, _id: 0, aquisition: 1} // acquisition.acquired_month displayed for verification
    LIMIT: 10
    ```

20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

    ```json
    FILTER: {$and:[{ founded_year: { $gte: 2000 } }, { founded_year: { $lte: 2010} }, {"acquisitions.acquired_year": {$gt: 2011}}]}
    ```


Happy Coding! :heart:
