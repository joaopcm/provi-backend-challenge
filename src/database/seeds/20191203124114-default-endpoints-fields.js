module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'endpoints_fields',
      [
        {
          endpoint_id: 1,
          title: 'cpf',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 2,
          title: 'first_name',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 2,
          title: 'last_name',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 3,
          title: 'date',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 4,
          title: 'number',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'cep',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'street',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'number',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'complement',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'city',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'state',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 5,
          title: 'country',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          endpoint_id: 6,
          title: 'amount',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
