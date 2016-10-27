//  First we need to grab the Mongoose module
var mongoose =require('mongoose');

// Create a schema for the Todo model
let todoSchema = new mongoose.Schema({
  // The only data we need to manage for our todos are their text
  text: { type : String },
  isCompleted: {type: Boolean}
});

// Expose the model so that it can be imported and used in the
// API controller (to search, delete, etc)
export default mongoose.model('Todo', todoSchema);