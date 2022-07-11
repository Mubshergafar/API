import mysql from "mysql2/promise";

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "app_db",
  });

  const [result] = await connection.execute(sql, params);
  return result;
}

export default query;
