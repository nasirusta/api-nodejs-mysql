const db = require("../models");
const Kategoriler = db.kategoriler;
const Post = db.post;

const writers = async (req, res) => {
  let yazilar = await Post.findAll({
    where: {
      lang: req.params.lang,
    },
  });

  res.status(200).send(yazilar);
};

const authors = async (req, res) => {
  let yazarlar = await Kategoriler.findAll({
    where: {
      parent: 262,
      lang: "tr",
    },
  });

  res.status(200).send(yazarlar);
};

const yazar = async (req, res) => {
  const options = {
    where: { url: req.params.url },
  };
  let singlePost = await Kategoriler.findOne(options);
  console.log(singlePost)
  res.status(200).send(singlePost);
};

module.exports = {
  authors,
  writers,
  yazar,
};
