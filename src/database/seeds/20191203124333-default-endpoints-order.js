module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'endpoints_order',
      [
        {
          endpoint_id: 1,
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 2,
          order: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 3,
          order: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 4,
          order: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          order: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 6,
          order: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
