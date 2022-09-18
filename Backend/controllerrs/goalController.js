

// gets Goals
// @route GET api/goals
// @access Private
const getGoals = (req,res) => {
  res.status(200).json({ message: "get Goals" });
}

// sets Goal
// @route post api/goal/:id
// @access private
const setGoal = (req, res) => {
  res.status(200).json({ message: "set Goal" });
}

// updates goal
// @route PUT api/goal/:id
// @access Priivate
const updateGoal =  (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
}

// Deletes Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal =  (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
}


module.exports = {
  getGoals,setGoal,updateGoal,deleteGoal
}