const db = require('../models/index')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query('SELECT * FROM employees');
        // commenting because now it'll be handled in global error handlers
        // .catch(err => console.log(err))

    return records;
}

module.exports.getEmployeeById = async (id) => {
    // const [rows] = await db.query('SELECT * FROM employees WHERE id = ' + id);
    const [[record]] = await db.query('SELECT * FROM employees WHERE id = ?', [id]);
    return record;
}

module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] = await db.query('DELETE FROM employees WHERE id = ?', [id]);
    return affectedRows;
}
