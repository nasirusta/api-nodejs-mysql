module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("content", {
    sort: {
      type: DataTypes.INTEGER,
    },
    baslik: {
      type: DataTypes.STRING(455),
    },
    url: {
      type: DataTypes.STRING(455),
    },
    icerik: {
      type: DataTypes.TEXT,
    },
    resim: {
      type: DataTypes.STRING(455),
    },
    kategori: {
      type: DataTypes.INTEGER,
    },
    durum: {
      type: DataTypes.INTEGER,
    },
    parent_id: {
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

  return Post;
};
