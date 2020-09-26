// dev dependencies

const express = require('express')

const admin = require('firebase-admin');



// config 
const app = express()


//config firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// endpoints - posts
app.get('/posts', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    let posts = [];
    
    db.collection('posts').orderBy('date', 'desc').limit(3).get().then(snapshot => {
        snapshot.forEach((doc) => {
            posts.push(doc.data());
        });
      res.send(posts)
    })
})  

// endpoints - createPosts
app.get('/createPost', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
   
    res.send('created')
})  

//listen
app.listen(process.env.PORT || 3000)