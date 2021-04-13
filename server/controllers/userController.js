const db = require("../../db");

module.exports = {
  createDetail: async (req, res) => {
    console.log("In create detail");

    const { name, phone, disease, age, gender, userType } = req.body;
    console.log("req.body = ", req.body);

    let values = {
      name,
      phone,
      disease,
      age,
      gender,
      user_type: userType ? userType : "patient",
      date_added: new Date(),
    };
    console.log("values = ", values);

    let connection = await db.createConn();
    let sql = `INSERT INTO user SET ?`;
    connection.query(sql, values, function (error, result, fields) {
      console.log("your result", fields);
      if (error) {
        console.log("user: insert error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: insertion result = ", result);
        res
          .status(200)
          .send({
            message: `Your Request has been delivered ${result.insertId}`,
          });
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  getUserDetail: async (req, res) => {
    console.log("In getUser detail...");

    let connection = await db.createConn();
    let sql = `SELECT * FROM user`;
    connection.query(sql, function (error, result, fields) {
      if (error) {
        console.log("user: select error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: select result = ", result);
        res.status(200).send(result);
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  getDetail: async (req, res) => {
    console.log("In get detail...");

    let connection = await db.createConn();
    let sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
    connection.query(sql, function (error, result, fields) {
      if (error) {
        console.log("user: select error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: select result = ", result);
        res.status(200).send(result);
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  updateDetail: async (req, res) => {
    console.log("In update detail...");

    const { name, phone, disease, age, gender } = req.body;

    let values = {
      name,
      phone,
      disease,
      age,
      gender,
      date_updated: new Date(),
    };
    console.log("values = ", values);

    let connection = await db.createConn();
    let sql = `UPDATE user SET ? WHERE id = ${req.params.id}`;
    connection.query(sql, values, function (error, result, fields) {
      if (error) {
        console.log("user: update error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: update result = ", result);
        res.status(200).send({ message: "Updated Successfully" });
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  deleteDetail: async (req, res) => {
    console.log("In delete detail...");

    let connection = await db.createConn();
    let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
    connection.query(sql, function (error, result, fields) {
      if (error) {
        console.log("user: delete error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: delete result = ", result);
        res.status(200).send({ message: "Deleted Successfully." });
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
};
