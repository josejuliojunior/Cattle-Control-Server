const knex =  require('./knex');

module.exports = {

  login: (email) => {
    return knex('users')
      .where('email', email)
  }


}
