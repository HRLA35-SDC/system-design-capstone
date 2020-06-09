module.exports = {
  pgFindById: (client, id) => {
      return client.query(`SELECT data FROM shoes WHERE nikeid = ${id};`);
  }
}