
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.integer('VIN')
      .notNullable()
      .unique();
    tbl.string('Model')
      .notNullable();
    tbl.string('Make')
      .notNullable();
    tbl.decimal('Mileage')
      .notNullable();
    tbl.string('Transmission Type');
    tbl.string('Title Status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
