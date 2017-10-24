exports.up = function(knex, Promise) {
  return knex.schema.createTable('weights', (table) => {
    table.increments();
    table.integer('cattleID').references('cattles.id').unsigned().onDelete('cascade');
    table.integer('weight').notNullable();
    table.date('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weights');
};
