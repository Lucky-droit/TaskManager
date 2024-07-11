const Task = require("../models/Task")
const getallTask = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params
    const task = await Task.findOne({ _id: TaskId })
    res.status(200).json({ task })
    if (!task) {
      return res.status(404).json({ msg: `Can not found the msg with id : ${TaskId}` })
    }
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params
    const task = await Task.findOneAndDelete({ _id: TaskId })
    res.status(200).json({ task })
    if (!task) {
      return res.status(404).json({ msg: `Can not found the msg with id : ${TaskId}` })
    }
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {

  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  try {
  const {id :TaskId}  = req.params 
  const task = await Task.findOneAndUpdate({_id:TaskId} , req.body ,{
    new : true , 
    runValidators : true })
  
    if (!task) {
      return res.status(404).json({ msg: `Can not found the msg with id : ${TaskId}` })
    }
    res.status(200).json({id : TaskId , data : req.body})
  
 
  }
  catch(error){
    res.status(404).json({msg : `Not found `})
  }
}

module.exports = {
  getallTask,
  getTask,
  deleteTask,
  updateTask,
  createTask
}