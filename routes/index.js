var express = require('express');
var router = express.Router();
var assert = require('assert')

var models = require('../models');

var dbConnection = require('../mongodbconnection').connection;
var dbClient = require('../mongodbconnection').client;
var dbName = require('../mongodbconnection').dbName;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//post question tree to database
router.post('/questiontree', function(req, res, next){
  dbConnection.then(() => {
    dbClient.db(dbName).collection('questiontrees').insertOne(req.data, (err, insertedDoc) => {
      if(err) throw err;
      res.send({documentId: insertedDoc.insertedId});
    })
  }) 
});

//get question tree from database
router.get('/questiontree/:documentId', function(req, res, next){
  dbConnection.then(() => {
    res.send(dbClient.db(dbName).collection('questiontrees').find({_id : req.params.documentId}));
  }) 
});

//Test with dummy data
router.get('/testdb', function(req, res, next){
    insertTestData();
    res.render('index', { title: 'MongoDB' });

})

const insertTestData = async () => {
  const questionNode6 = new models.QuestionNode({
    question: 'Question Node 6?'
  });

  const questionNode7 = new models.QuestionNode({
    question: 'Question Node 7?'
  });
  const questionNode4 = new models.QuestionNode({
    question: 'Question Node 4?'
  });

  const questionNode5 = new models.QuestionNode({
    question: 'Question Node 533?'
  });
  
  const questionNode2 = new models.QuestionNode({
    question: 'Who are you?3',
    children:[questionNode6, questionNode7]
  });

  const questionNode3 = new models.QuestionNode({ 
    question: 'Who are we3?',
    children:[questionNode4, questionNode5]
  });

  const questionNode1 = new models.QuestionNode({
    question: 'Who am I3?',
    children: [questionNode2, questionNode3]
  });

  const questionTree = new models.QuestionTree({
    id: 1341134,
    heading: 'Hehe answer me this!',
    children:[questionNode1]
  });

  dbConnection.then(() => {
    var db = dbClient.db(dbName)
    var questiontrees = db.collection('questiontrees');
    questiontrees.insertOne(questionTree, (err, insertedDoc) => {
      if(err) throw err;
      console.log(insertedDoc)
    })
  })  
}
module.exports = router;
