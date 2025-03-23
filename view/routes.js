import express from 'express';
import { getAllEmp,addEmp,updateEmp,deleteEmp } from '../controller/UserController.js';
const router = express.Router();

router.get('/getAll',getAllEmp); //get method
router.post('/addEmp',addEmp);  // post method
router.put('/emp/:employeeId',updateEmp); // put method 
router.delete('/emp/:employeeId',deleteEmp); // delete method
export default router;
