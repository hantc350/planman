var mongoose = require('mongoose');

const questionNodeSchema = new mongoose.Schema({
    question:{
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
    children:{
        type:[questionNodeSchema]
    }
})

const QuestionTreeModel = mongoose.model('QuestionTree', questionTreeSchema);

module.exports = QuestionTreeModel;