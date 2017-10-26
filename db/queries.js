const knex =  require('./knex');

module.exports = {

  login: (email) => {
    return knex('users')
      .where('email', email)
  },

  postWeight: (body) => {
    return knex('weights')
      .insert(body).returning('*')
  }


}
