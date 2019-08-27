exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1ABCD23456E789012', Make: 'Chrysler', Model: 'Sebring Touring', Mileage: '140000', Transmission: 'auto', Title: 'clean'},
        {VIN: '2ABCD34567E890123', MAKE: 'Dodge', Model: 'Grand Caravan', Mileage: '197000', Transmission: 'auto', Title: 'clean'}
      ]);
    });
};