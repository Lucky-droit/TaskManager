const mongoose = require("mongoose")

const mg = (url)=>{
  return mongoose.connect(url)
}
module.exports = mg