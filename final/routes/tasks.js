const expr = require("express")
const router = expr.Router() 
const {getallTask,getTask , 
    deleteTask , 
    updateTask , 
    createTask} = require("../controllers/tasks")

router.route('/').get(getallTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router 