const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrustedParty extends Model {

  }
  TrustedParty.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    thumbprint: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    rawData: {
      type: DataTypes.STRING(4096),
      allowNull: false,
    },
    signature: {
      type: DataTypes.STRING(6000),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: new Date(),
    },
  }, {
    sequelize,
    modelName: 'TrustedParty',
  });
  return TrustedParty;
};
