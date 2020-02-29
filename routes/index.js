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
router.post('/testdb', function(req, res, next){
    insertTestData();

    res.render('index', { title: 'MongoDB' });

})

const insertTestData = async () => {

  const questionNode8 = new models.QuestionNode({
    answer: 'yes'
  });

  const questionNode7 = new models.QuestionNode({
    answer: 'no'
  });

  const questionNode6 = new models.QuestionNode({
    answer: 'no'
  });
 
  const questionNode5 = new models.QuestionNode({
    answer: 'yes'
  });

  const questionNode4 = new models.QuestionNode({
    followUpQuestion: 'Question Node 4?',
    answer: 'yes'
  });

  const questionNode3 = new models.QuestionNode({ 
    question: 'Who are we3?',
    answer: 'yes',
    children:[questionNode7, questionNode8]
  });

  const questionNode2 = new models.QuestionNode({
    question: 'Who are you?3',
    answer: 'no',
    children:[questionNode5, questionNode6]
  });

  const questionNode1 = new models.QuestionNode({
    followUpQuestion: 'Who am I3?',
    answer: 'yes',    
    children: [questionNode3, questionNode4]
  });

  const questionTree = new models.QuestionTree({
    id: 1341134,
    heading: 'Hehe answer me this!',
    question: 'Init question?',
    children:[questionNode1, questionNode2]
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
