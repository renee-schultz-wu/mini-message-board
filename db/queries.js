const pool = require("./pool");

async function getALLMessages() {
    const { rows } = await pool.query("SELECT * FROM messageboard");
    return rows;
}

async function addNewMessage(text, username) {
    await pool.query("INSERT INTO messageboard (text, username, date) VALUES ($1, $2, $3)", [text, username, new Date()]);
}

async function viewById(id) {
    const {rows} = await pool.query("SELECT * FROM messageboard WHERE id = ($1)",[id])
    console.log(rows)
    return rows;
}

module.exports = {
    getALLMessages,
    addNewMessage,
    viewById
}