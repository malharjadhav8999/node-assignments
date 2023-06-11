/**
 * @author - Malhar Jadhav
 * @description - This file contains services for particular routes
 */

const db = require('../models/index')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query('SELECT * FROM employees');
        // commenting because now it'll be handled in global error handlers
        // .catch(err => console.log(err))

    return records;
}

// ? works as placeholder
module.exports.getEmployeeById = async (id) => {
    // const [rows] = await db.query('SELECT * FROM employees WHERE id = ' + id);
    const [[record]] = await db.query('SELECT * FROM employees WHERE id = ?', [id]);
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] = await db.query('DELETE FROM employees WHERE id = ?', [id]);
    return affectedRows;
}

/** mysql procedure for insert and update employees

-- stored procedure - execute withing create procedure window
CREATE PROCEDURE `employee_db`.`usp_employee_add_or_edit` (
IN _id INT,
IN _name VARCHAR(45),
IN _employee_code VARCHAR(45),
IN _salary INT

)
BEGIN
	IF _id = 0 THEN
		INSERT INTO employees(name,employee_code,salary)
		VALUES (_name,_employee_code,_salary);
        
	ELSE
		UPDATE employees
        SET name = _name,
		employee_code = _employee_code,
        salary = _salary
        WHERE id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END
 */

module.exports.addOrEditEmployee = async (obj, id = 0) => {
    console.log('service obj ', obj)

    const [[[{ affectedRows }]]] = await db.query('CALL usp_employee_add_or_edit(?, ?, ?, ?)',
        [id, obj.name, obj.employee_code, obj.salary]);
    return affectedRows;
}
