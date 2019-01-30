![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. Find the restaurant with id `30112340`.

db.restaurants.find({restaurant_id: "30112340" })

### 2. Find `May May Kitchen`.

db.restaurants.find({name: "May May Kitchen"})

### 3. Find the restaurants where their cuisine is `Tapas`.

db.restaurants.find({cuisine: "Tapas"})

### 4. Find the restaurants in postal code `11208`.

db.restaurants.find({"address.zipcode": "11208"})

### 5. Find all restaurants that have a score greater or equal than `70`.

db.restaurants.find({'grades.score': {$gte: "70"}})

### 6. Find all restaurants in `Brooklyn` that have a score greater than `80`

db.restaurants.find({{borough: "Brooklyn"}, {"grades.score": {$gt: 80}}})

### 7. All restaurants with `Chilean` or `Czech` cuisine.

db.restaurants.find({$or: [{cuisine: "Chilean"}, {cuisine: "Czech"}]})

### 8. All restaurants with `grade A` in second position of the array.

db.restaurants.find({'grades.1.grade': "A"})

### 9. All restaurants with `grades A` or `B`.

db.restaurants.find({$or: [{'grades.1.grade': "A"}, {'grades.1.grade': "B"}]})

### 10. All restaurants that have a review made in `2014-09-16`.

db.restaurants.find({"grades.date": ISODate("2014-09-16T00:00:00Z")})

### 11. All restaurant their cuisine is `Tapas` ordered by name in `ascending` (normal) order.

db.restaurants.find({cuisine: "Tapas"}).sort({"name": 1})

### 12. How many restaurants have been graded after `2015-01-01`.

db.restaurants.find({"grades.date": {$gte:ISODate("2015-01-01T00:00:00Z")}})

