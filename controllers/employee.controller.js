/**
 * @author - Malhar Jadhav
 * @description - This file contains routes and calls to their respective services
 */

const express = require('express')
router = express.Router()

// const db = require('../models/index')

const service = require('../services/employee.service')

// http:localhost:3000/api/employees
// get all employees
router.get('/', async (req, res) => {
    // res.send('list of employees')

    // promise method
    // db.query('SELECT * FROM employees')
    //     .then(data => res.send(data[0]))
    //     .catch(err => console.log(err))

    // async await method
    // const [rows] = await db.query('SELECT * FROM employees')
    //     .catch(err => console.log(err))

    const employees = await service.getAllEmployees()
    res.send(employees)
})

// get a employee by id
router.get('/:id', async (req, res) => {
    const employee = await service.getEmployeeById(req.params.id)
    if (employee == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(employee)
})

// delete a employee by id
router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteEmployee(req.params.id)
    // console.log(employee)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('Deleted successfully')
})

// add a employee
router.post('/', async (req, res) => {
    console.log('controller res.body', res.body)
    await service.addOrEditEmployee(req.body);
    res.status(201).send('created successfully')
})

// update a employee with given id
router.put('/:id', async (req, res) => {
    console.log('controller res.body', res.body)
    const affectedRows = await service.addOrEditEmployee(req.body, req.params.id);
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('Updated successfully')})

module.exports = router;
