const db = require("../../db");

module.exports = {
  createHosiptalDetail: async (req, res) => {
    console.log("In create detail");

    const { admin, hospital, email, password, latitude, longitude } = req.body;
    console.log("req.body = ", req.body);

    let values = {
      admin,
      hospital,
      email,
      password,
      latitude,
      longitude,
      date_added: new Date(),
    };
    console.log("values = ", values);

    let connection = await db.createConn();
    let sql = `INSERT INTO hospital SET ?`;
    connection.query(sql, values, function (error, result, fields) {
      console.log("your result+++", fields);
      if (error) {
        console.log("hospital: insert error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("hospital: insertion result = ", result);
        res.status(200).send({
          message: `Your Request has been delivered ${result.insertId}`,
        });
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  getAllHospitalDetail: async (req, res) => {
    console.log("In getUser detail...");

    let connection = await db.createConn();
    let sql = `SELECT * FROM hospital`;
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
  getHosiptalDetail: async (req, res) => {
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
  updateHosiptalDetail: async (req, res) => {
    console.log("In update detail...");

    const { name, hospital, email, password, latitude, longitude } = req.body;

    let values = {
      name,
      hospital,
      email,
      password,
      latitude,
      longitude,
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
  deleteHosiptalDetail: async (req, res) => {
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
