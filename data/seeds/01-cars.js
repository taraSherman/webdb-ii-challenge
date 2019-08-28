exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '32145', Make: 'any', Model: 'whatever', Mileage: '123', Transmission: 'auto', Title: 'clean'}
      ]);
    });
};