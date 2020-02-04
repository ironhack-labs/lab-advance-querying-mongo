  // 9
  db.movies.find({ $nor: [{ director:"Steven Spielberg" },{ director:"Quentin Tarantino"}] }, {title: 1, director: 1, _id: 0})
  
  
  
  // 10
  db.movies.find( {}, { title: 1, year: 1, genre: 1, _id: 0 } )
  
  // 11
  db.movies.find( {}, { title: 1 } ).sort( { title: 1 } )
  
  // 12
  db.movies.find( {}, { title: 1, director: 1 } ).sort( { title: 1 } ).skip(5)
  
  // 13
  db.movies.find( { director: "Robert Zemeckis" }, { title: 1, director: 1 } )
  
  // 14
   db.movies.find( { rate: { $ne: "8.5" }  }, { title: 1, rate: 1, _id: 0 } )
   
   // 15
   db.movies.find( { year: { $gte: 2015 }  }, { title: 1, year: 1, director: 1,  _id: 0 } )
   
   
   // 16 
     db.movies.find({ year: {$lt: 2000} } , {title: 1, year: 1, director: 1, _id: 0})
     
     // 17
     db.movies.find({ year: {$in: [2000, 2005, 2010] } } , {title: 1, year: 1})
     
     // 18 a
     db.movies.find({  $and: [ { year: { $in: [ 1999, 2010 ] } }, { title: { $ne: "Inception"} }   ]   })
     
     // 18 b
     db.movies.find({year:{ $in:[1999,2010]}, title:{$ne: "Inception"}})
     
     // 19 
     // Find the id from the current DB
     db.movies.deleteOne({ _id: ObjectId("") })
     
     // 21 
     db.movies.updateMany({ year: 2017 }, { $set: { rating: ratingObj  } } )
     
     
     // 22
     db.movies.updateMany({ title: "Dunkirk" }, { $set: { "rating.rating": "PG-13", "rating.violence": true, "rating.strong_language": true  } } )

// 23 a 
db.movies.deleteMany( { title: { $in: [ "12 Angry Men", "Se7en", "Cidade de Deus", "Braveheart" ]  }})

// 23 b
let moviesToDelete = ["12 Angry Men", "Se7en", "Cidade de Deus", "Braveheart"]
db.movies.deleteMany( { title: { $in: [moviesToDelete }})