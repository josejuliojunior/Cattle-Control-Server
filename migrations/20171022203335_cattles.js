exports.up = function(knex, Promise) {
  return knex.schema.createTable('cattles', (table) => {
    table.increments();
    table.text('breedName').notNullable();
    table.datetime('dob').notNullable();
    table.text('sex').notNullable();
    table.text('origin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cattles');
};
