const db = require("../../db");

module.exports = {
  createQueueDetail: async (req, res) => {
    console.log("In createqueue detail");

    const {
      id,
      hospital,
      queueState,
      notes,
      priority,
      user,
      startingTime,
      processTime,
      date,
    } = req.body;
    // const { queueState } = req.body;
    // var currentdate = new Date();
    // var getCurrentDate =
    //   // "Last Sync: " +
    //   currentdate.getDate() +
    //   "/" +
    //   (currentdate.getMonth() + 1) +
    //   "/" +
    //   currentdate.getFullYear();
    // console.log(STR_TO_DATE(date));
    // +
    // " @ " +
    // currentdate.getHours() +
    // ":" +
    // currentdate.getMinutes() +
    // ":" +
    // currentdate.getSeconds();

    console.log("req.body++ = ", req.body);

    let values = {
      id,
      hospital,
      queueState,
      notes,
      priority,
      user,
      startingTime,
      processTime,
      //   user_type: userType ? userType : "patient",
      date,
      date_added: new Date(),
    };
    console.log("values = ", values);
    if (processTime == undefined) {
      values = { ...values, processTime };
    }
    if (startingTime == undefined) {
      values = { ...values, startingTime };
    }
    if (queueState == undefined) {
      values = { ...values, queueState };
    }
    if (hospital == undefined) {
      values = { ...values, hospital };
    }
    if (notes == undefined) {
      values = { ...values, notes };
    }
    if (priority == undefined) {
      values = { ...values, priority };
    }
    if (user == undefined) {
      values = { ...values, user };
    }

    let connection = await db.createConn();
    let sql = `INSERT INTO usersQueue SET ?`;
    connection.query(sql, values, function (error, result, fields) {
      if (error) {
        console.log("user: insert error: ", error);
        res
          .status(500)
          .send({ message: "Something went wrong, please try again!" });
      } else if (result) {
        console.log("user: insertion result = ", result);
        res.status(200).send({ message: result.insertId });
      }
      console.log("ending connection ...");
      connection.end();
    });
  },
  getQueueDetail: async (req, res) => {
    console.log("In getqueue detail...");

    let connection = await db.createConn();
    let sql = `SELECT * FROM usersQueue WHERE id = ${req.params.id}`;
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
  getAllQueueDetail: async (req, res) => {
    console.log("In getallqueue detail...");

    let connection = await db.createConn();
    let sql = `SELECT * FROM usersQueue`;
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
  updateQueueDetail: async (req, res) => {
    console.log("In updatequeue detail...");

    const {
      hospital,
      queueState,
      notes,
      priority,
      user,
      processTime,
    } = req.body;
    // const { queueState } = req.body;
    console.log("req.body = ", req.body);
    // console.log("req-body===", queueState);
    let values = {
      hospital,
      queueState,
      notes,
      priority,
      user,
      processTime,
      date_added: new Date(),
    };
    console.log("values==", values);
    if (queueState !== undefined) {
      values = { ...values, queueState };
    }
    if (hospital !== undefined) {
      values = { ...values, hospital };
    }
    if (notes !== undefined) {
      values = { ...values, notes };
    }
    if (priority !== undefined) {
      values = { ...values, priority };
    }
    if (user !== undefined) {
      values = { ...values, user };
    }

    console.log("values = ", values);

    let connection = await db.createConn();
    let sql = `UPDATE usersQueue SET ? WHERE id = ${req.params.id}`;
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
  deleteQueueDetail: async (req, res) => {
    console.log("In deletequeue detail...");
    console.log("id====", req.params.id);

    let connection = await db.createConn();
    let sql = `DELETE FROM usersQueue WHERE id = ${req.params.id}`;
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
