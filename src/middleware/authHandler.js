const authHandler = (req, res, next) => {
  console.log("Handling auth");
  next();
};

export default authHandler;
