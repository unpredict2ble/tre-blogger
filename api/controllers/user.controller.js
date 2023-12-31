export const profile = (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: "user profile" });
};