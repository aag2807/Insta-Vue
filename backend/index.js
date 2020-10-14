// dev dependencies

const express = require('express')

const admin = require('firebase-admin');

const insppect = require('util').inspect;

const Busboy = require('busboy');
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
app.post('/createPost', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    if (req.method === 'POST') {

    let busboy = new Busboy({ headers: req.headers });

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File : filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      file.on('data', function(data) {
        console.log('File got  bytes');
      });
      file.on('end', function() {
        console.log('File Finished');
      });
    });

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field : value: ' + inspect(val));
    });

    busboy.on('finish', function() {
      console.log('Done parsing form!');
      // res.writeHead(303, { Connection: 'close', Location: '/posts' });
      res.send('done parsing');
    });
    req.pipe(busboy);
    res.send(req.headers)
  }
})  

//listen
app.listen(process.env.PORT || 3000, ()=> console.log('running'))