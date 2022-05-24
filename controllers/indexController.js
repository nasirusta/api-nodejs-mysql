const apiIndex = async (req, res) => {
  res.status(200).send({ status: true, message: "Api server is runing" });
};

module.exports = {
  apiIndex,
};
