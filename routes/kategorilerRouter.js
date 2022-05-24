const express = require("express");
const router = express.Router();
const axios = require("axios");
const kategorilerController = require("../controllers/kategorilerController");

router.get("/authors", kategorilerController.authors);
router.get("/writers/:lang", kategorilerController.writers);
router.get("/yazar/:url", kategorilerController.yazar);

router.get("/author-and-write", async (req, res) => {
  const response = await axios.get(
    `${process.env.BACKEND_URL}/api/data/authors`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );

  const resp = await axios.get(
    `${process.env.BACKEND_URL}/api/data/writers/krd`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );

  const result = response.data.map((data, i) => {
    let searchResult = resp.data.filter((s) => s.kategori == data.id);
    let sonElement = searchResult[searchResult.length - 1];
    return {
      yazar: data.baslik,
      resim: data.resim,
      sonYaziBaslik: sonElement?.baslik,
      sonYaziUrl: sonElement?.url,
      sonYaziId: sonElement?.id,
    };
  });

  res.status(200).send(result);
});

module.exports = router;
