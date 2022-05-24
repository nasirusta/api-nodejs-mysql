const db = require("../models");

// Create Main model
const Post = db.post;

const getContentCategory = async (req, res) => {
  let post = await Post.findAll({
    where: {
      // kategori: req.params.cat,
      lang: req.params.lang,
      kategori: {
        [db.Op.ne]: [
          248, 249, 262, 258, 259, 254, 255, 263, 250, 251, 256, 257, 252, 253,
          260, 261,
        ],
      },
    },
  });
  res.status(200).send(post);
};

const singleContent = async (req, res) => {
  if (req.params.currentlang === "krd") {
    const options = {
      where: { url: req.params.id, lang: req.params.currentlang },
    };
    let singlePost = await Post.findOne(options);
    res.status(200).send(singlePost);
  } else {
    const options = {
      where: { url: req.params.id },
    };
    let singlePost = await Post.findOne(options);
    res.status(200).send(singlePost);
  }
};

module.exports = {
  getContentCategory,
  singleContent,
};
