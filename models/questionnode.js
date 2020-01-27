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

const QuestionNodeModel = mongoose.model('QuestionNode', questionNodeSchema);

module.exports = QuestionNodeModel;