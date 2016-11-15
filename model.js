const mongoose = require('mongoose')
const shortid = require('shortid')

const urlSchema = new mongoose.Schema({
  originalUrl: {type: String, required: true},
  shortUrl: {type: String, 'default': shortid.generate}
})

  // remove the _id of every document before returning the result
  .set('toJSON', {transform : function (doc, ret) {
    delete ret._id;
    return ret;
  }});

module.exports = mongoose.model('Url', urlSchema)
