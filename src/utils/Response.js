export default class Response {
  static success(
    res,
    data,
    message = "Api proccessed successfully.",
    statusCode = 200
  ) {
    return res.status(statusCode).json({
      status: "successfull",
      data: data,
      message: message,
      error: null,
      code: statusCode,
    });
  }

  static reject(res, error, message = "Api call rejected.", statusCode = 400) {
    return res.status(statusCode).json({
      status: "rejected",
      error: error,
      message: message,
      code: statusCode,
      data: null,
    });
  }

  static error(
    res,
    error,
    message = "Api call was not processed due to internal server error.",
    statusCode = 500
  ) {
    return res.status(statusCode).json({
      status: "error",
      error: error,
      message: message,
      code: statusCode,
      data: null,
    });
  }
}
