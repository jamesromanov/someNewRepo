let response = (res, data, sts = 200) => {
  if (!data) res.status(500).json({ message: "Server didn't work!" });
  else res.status(sts).json(data);
};
module.exports = { response };
