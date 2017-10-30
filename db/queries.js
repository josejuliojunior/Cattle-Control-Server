const knex =  require('./knex');

module.exports = {

  login: (email) => {
    return knex('users')
      .where('email', email)
  },

  postCattle: (body) => {
    return knex('cattles')
      .insert(body).returning('*')
  },

  postWeight: (body) => {
    return knex('weights')
      .insert(body).returning('*')
  },

  deleteCattle: (id) => {
    return knex('cattles')
      .where('cattles.id', id)
      .del()
  }

}
