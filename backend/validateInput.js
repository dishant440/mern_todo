const validateInput = (schemas) => async (req, res, next) => {
 
    const reqbody = req.body;
    const checkparse = schemas.safeParse(reqbody).success;
    try {
      if (!checkparse) {
        res.status(400).json({ message: "invalid inputs" });
      }
      next();
    } catch (error) {
      res.status(400).json({ message: "bad request" });
    }
  };

  module.exports = validateInput;