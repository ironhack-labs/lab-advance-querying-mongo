![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# MongoDB | Advanced Querying Mongo

## Introduction

We are back with our queries! :wink:

We have learned some super useful query operators, that will help us to make much better queries to retrieve the data we need. For this exercise we will use the **Crunchbase** database.

## Purpose of the exercise

Practice and write queries to mongo using Mongo CLI.

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

Write your answers in the file `queries.md` below each iteration.
Test the mongoDb queries in the command line.

### Example

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
```bash
> db.companies.find( { name:"Babelgum" }, { name:1, _id:0 } )
```

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
⚠️ When running the `mongoimport` you should be located in the same folder as the `companies.json` file.

4. Check in Mongo CLI if everything goes ok:
```bash
> show dbs
> use companies
> show collections
```

### Iteration 2

You already know how this goes, so let's start working:

1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.
4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
6. All the companies that don't include the `partners` field.
7. All the companies that have a null type of value on the `category_code` field.
8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
9. Order all the companies by their IPO price descendently.
10. Retrieve the 10 companies with more employees, order by the `number of employees`
11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
12. All the companies that have been 'deadpooled' after the third year.
13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.
15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.
17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.


Happy Coding! :heart:
