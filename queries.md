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

Filter : {$and:[{ipo:{$gt:100000}},{founded_year:{$lt:2000}}]}
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
Filter : {partners :{$exists:false}}
Project : 
Sort : 
Collation : 
Skip : 
Limit :

7.
Filter : {category_code:null}
Project : 
Sort : 
Collation : 
Skip : 
Limit :

8.
Filter : {number_of_employees:{$gt:100,$lt:1000}}
Project : {name:1,number_of_employees:1,_id:0}
Sort : 
Collation : 
Skip : 
Limit :

9.
Filter : 
Project : {name:1,_id:0,ipo:1}
Sort : {ipo:-1}
Collation : 
Skip : 
Limit : 

10.
Filter : 
Project : {name:1,number_of_employees:1,_id:0}
Sort : {number_of_employees:-1}
Collation : 
Skip : 
Limit : 10

11.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

12.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

13.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

14.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

15.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

16.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

17.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

18.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

19.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :

20.
Filter : 
Project : 
Sort : 
Collation : 
Skip : 
Limit :