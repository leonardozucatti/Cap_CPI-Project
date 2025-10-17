module.exports = async function () {
  const { Person } = cds.entities('my');
 
  this.on('importData', async req => {
    const list = req.data.payload?.data || [];
    if (!Array.isArray(list)) return req.error(400, 'Payload inválido');
 
    await INSERT.into(Person).entries(list);
    return 'Dados importados com sucesso';
  });
 
  this.on('getNameById', async req => {
    const { id } = req.data;
    const person = await SELECT.one.from(Person).where({ id });
    if (!person) return `ID ${id} não encontrado`;
    return person.name;
  });
};