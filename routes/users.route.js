const express = require("express");
const {getAllUsers,createUser, getOneUser, editUser, updateUser, deleteUser} = require("../controllers/user.controller");
const router = express.Router();


router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser );
router.delete('/:id', deleteUser);

module.exports = router;