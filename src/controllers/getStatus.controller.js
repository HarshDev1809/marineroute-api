export const getStatus = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Service is up and running",
    timestamp: new Date().toISOString()
  });
};
