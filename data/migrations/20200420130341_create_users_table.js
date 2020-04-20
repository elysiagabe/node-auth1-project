
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      //id, primary key
      users.increments();
      //firstName, string, min2, required
      users.string('first_name').notNullable();
      //lastName, string, min2, required
      users.string('last_name').notNullable();
      //email, string, required, unique
      users.string('email').notNullable().unique();
      //username, string, required, unique
      users.string('username', 128).notNullable().unique();
      //password, string required
      users.string('password', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
