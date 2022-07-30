const registerUser = async function (req, res) {
  const { name, email, password, pic } = req.body;
  res.json({ name, email });
};

module.exports = { registerUser };
