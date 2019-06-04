
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: 'Phoenix', time: '2019-06-04 17:17:24.568742-07', user_id: 1},
        {location: 'Mesa', time: '2019-06-04 17:17:24.568742-07', user_id: 2},
        {location: 'Scottsdale', time: '2019-06-04 17:17:24.568742-07', user_id: 3}
      ]);
    });
};
