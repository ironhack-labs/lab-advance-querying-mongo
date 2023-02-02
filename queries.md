![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

QUERY: {name: "Babelgum"}
PROJECTION: {_id:0, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:0, founded_day:0, founded_month:0, founded_year:0, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:0, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:0}
SORT:
SKIP:
LIMIT:

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

QUERY: { number_of_employees : { $gt: 5000 } }
PROJECTION: 
SORT: { number_of_employees: 1}
SKIP:
LIMIT: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

QUERY: { founded_year : { $gt: 2000, $lt: 2005}
PROJECTION: {_id:0, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:0, founded_day:0, founded_month:0, founded_year:1, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:0, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:0}
SORT: 
SKIP:
LIMIT: 

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

QUERY: {founded_year: {$lt: 2010}}
PROJECTION:  {_id:0, name:1, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:0, founded_day:0, founded_month:0, founded_year:1, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:0, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:1}
SORT: 
SKIP:
LIMIT:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

QUERY: {$and:[ {number_of_employees:{$lt:1000}}, {founded_year:{$lt:2005}} ]}
PROJECTION: 
SORT: {number_of_employees:1} 
SKIP:
LIMIT: 10

### 6. All the companies that don't include the `partners` field.

QUERY: { partners: { $exists: false} }
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 7. All the companies that have a null type of value on the `category_code` field.

QUERY: { category_code: { $exists: null} }
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

QUERY: {$and:[ {number_of_employees:{$gte:100}}, {number_of_employees:{$lt:1000}} ]}
PROJECTION: {_id:0, name:1, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:1, founded_day:0, founded_month:0, founded_year:0, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:0, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:0}
SORT: 
SKIP:
LIMIT:

### 9. Order all the companies by their IPO price in a descending order.

QUERY: 
PROJECTION: 
SORT: [['ipo', -1]]
SKIP:
LIMIT:

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

QUERY: 
PROJECTION: 
SORT: {number_of_employees: +1}
SKIP:
LIMIT: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

QUERY: {founded_month: {$gte:6}}
PROJECTION: 
SORT: 
SKIP:
LIMIT: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

QUERY: {$and:[{founded_year: {$lt:2000}}, {"acquisition.price_amount": {$gt:10000000}}]}
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

QUERY: {"acquisition.acquired_year":{$gt:2010}}
PROJECTION: {_id:0, name:1, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:, founded_day:0, founded_month:0, founded_year:0, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:1, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:0}
SORT: {"acquisition.price_amount": -1}
SKIP:
LIMIT:

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

QUERY: 
PROJECTION: {_id:0, name:1, permalink:0, crunchbase_url:0, homepage_url:0, blog_url:0, blog_feed_url:0, twitter_username:0, category_code:0, number_of_employees:, founded_day:0, founded_month:0, founded_year:1, deadpooled_year:0, deadpooled_month:0, deadpooled_day:0, deadpooled_url:0, tag_list:0, alias_list:0, email_address:0, phone_number:0, description:0, created_at:0, updated_at:0, overview:0, image:0, products:0, relationships:0, competitions:0, providerships:0, total_money_raised:0, funding_rounds:0, investments:0, acquisition:, offices:0, milestones:0, video_embeds:0, screenshots:0, partners:0, external_links:0, acquisitions:0, ipo:0}
SORT: {founded_year:-1}
SKIP:
LIMIT:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

QUERY: 
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

QUERY: 
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

QUERY: 
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

QUERY: 
PROJECTION: 
SORT: 
SKIP:
LIMIT:

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

QUERY: 
PROJECTION: 
SORT: 
SKIP:
LIMIT:
