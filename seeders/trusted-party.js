module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('TrustedParties', []),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
