const Usuario = require('./Usuario');
const TipoDocumento = require('./TipoDocumento');
const DireccionUsuario = require('./DireccionUsuario');
const Ciudad = require('./Ciudad');
const Pais = require('./Pais');
const TipoUsuario = require('./TipoUsuario');

// Relaciones
Usuario.belongsTo(TipoDocumento, { foreignKey: 'id_tipo_identification' });
Usuario.belongsTo(TipoUsuario, { foreignKey: 'id_tipo_usuario' });

DireccionUsuario.belongsTo(Usuario, { foreignKey: 'id_usuario' });
DireccionUsuario.belongsTo(Ciudad, { foreignKey: 'id_ciudad' });

Ciudad.belongsTo(Pais, { foreignKey: 'id_pais' });

module.exports = {
  Usuario,
  TipoDocumento,
  DireccionUsuario,
  Ciudad,
  Pais,
  TipoUsuario,
};