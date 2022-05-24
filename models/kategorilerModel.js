module.exports = (sequelize, DataTypes) => {
  const Kategoriler = sequelize.define("kategoriler", {
    baslik: {
      type: DataTypes.STRING(455),
    },
    url: {
      type: DataTypes.STRING(455),
    },
    parent: {
      type: DataTypes.INTEGER,
    },
    resim: {
      type: DataTypes.STRING(455),
    },
    sort: {
      type: DataTypes.INTEGER,
    },
    ceviri: {
      type: DataTypes.INTEGER,
    },
    lang: {
      type: DataTypes.STRING(12),
    },
    createdAt: {
      type: DataTypes.STRING(455),
    },
    updatedAt: {
      type: DataTypes.STRING(455),
    },
  });

  return Kategoriler;
};
