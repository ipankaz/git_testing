const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const db = new sequelize("sampledb1", "sampleuser1", "samplepass1", {
  host: "localhost",
  dialect: "mysql",
});

const DataTypes = sequelize.DataTypes;

const student = db.define("student", {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(2),
    defaultValue: -1,
    allowNull: false,
  },
});

const task1 = async () => {
  try {
    await db.sync();

    // Insert a student
    for (let i = 0; i < 30; i++) {
      await student.create({
        name: [
          "pankaj",
          "ankush",
          "shilpa",
          "sahil",
          "shweta",
          "hunny",
          "rohit",
          "mohit",
          "princy",
        ][parseInt(Math.random() * 8)],
        age: 10 + parseInt(Math.random() * 10),
      });
    }
  } catch (e) {
    console.error(e);
  }
};

//task1();

const task2 = async () => {
  // selecting table in output
  try {
    await db.sync();
    const data = await student.findAll({
      where: { age: { $gt: 15 } },
      order: [
        ['name', 'ASC'],
        ['age', 'DESC'],
      ]
    });
    data.forEach((s) => {
      console.log(`age : ${s.dataValues.age} \t name : ${s.dataValues.name}`);
    });
  } catch (e) {
    console.error(e);
  }
};

task2();

db.sync({ alter: true }) // db.sync({alter:true}) -> for altering table if existed
  .then(() => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.error(err);
  });
