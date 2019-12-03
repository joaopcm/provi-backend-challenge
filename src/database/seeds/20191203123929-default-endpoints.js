module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'endpoints',
      [
        {
          slug: 'cpf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          slug: 'fullName',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          slug: 'birth',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          slug: 'phone',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          slug: 'address',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          slug: 'amountRequested',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
