var mongoose = require('mongoose');

const questionNodeSchema = new mongoose.Schema({
    answer:{
        type: String,
        default: "answer"
    },
    followUpQuestion:{
        type: String,
        default: "Question Node?"
    },
    children:{
        type: [this],
        default: null
    } 
})

const questionTreeSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    heading:{
        type: String,
        default: "Heading"
    },
    question:{
        type: String,
        default: "Question???"
    },
    children:{
        type:[questionNodeSchema]
    }
})

const QuestionTreeModel = mongoose.model('QuestionTree', questionTreeSchema);

module.exports = QuestionTreeModel;