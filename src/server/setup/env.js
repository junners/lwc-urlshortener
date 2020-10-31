const sequelize = require('../sequelize');

async function setup() {
  console.log('Initializing database');

  await sequelize.sync({ force: true });
}

setup();
