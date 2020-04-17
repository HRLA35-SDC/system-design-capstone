module.exports = {
//   pgFind: (client, keyword) => {
//       return client.query(`select data from shoes where data->'collection' ? '${keyword}' OR data->>'type' ilike '${keyword}%' LIMIT 50`)
//   },
  pgFindById: (client, id) => {
      return client.query(`SELECT data FROM shoes WHERE nikeid = ${id};`);
  }
//   pgFindLessThanPrice: (client, price) => {
//       return client.query(`select * from shoes WHERE (data->>'discountPrice')::int < ${price} LIMIT 50`)
//   }
}