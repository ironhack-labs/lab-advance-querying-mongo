1.
Filter : {name :'Babelgum'}
Project : {name:1, _id:0}
Sort : 
Collation : 
Skip : 
Limit :

2.
Filter : {number_of_employees:{$gt:5000}}
Project : {name:1,_id:0}
Sort : 
Collation : 
Skip : 
Limit :20

3.
Filter : {$and:[{founded_year:{$gte:200}},{founded_year:{$lte:2005}}]}
Project : {name:1,_id:0,founded_year:1}
Sort : 
Collation : 
Skip : 
Limit :

4. //DOESN'T WORK because  total_money_raised is a string
Filter : {$and:[{total_money_raised:{$gt:100000}},{founded_year:{$lt:2000}}]}
Project : {name:1,ipo:1,_id:0}
Sort : 
Collation : 
Skip : 
Limit :

5.
Filter : {$and:[{number_of_employees:{$lt:1000}},{founded_year:{$lt:2005}}]}
Project : {name:1,number_of_employees:1,founded_year:1,_id:0}
Sort : {number_of_employees:-1}
Collation : 
Skip : 
Limit : 10

6.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

7.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

8.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

9.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

10.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :
