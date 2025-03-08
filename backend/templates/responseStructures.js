exports.Message = function (message, success) {
  return {
    message,
    success,
  };
};

exports.Success = function (message, data, success = true) {
  return {
    message,
    success,
    data,
  };
};

exports.Error = function (message, error, success = false) {
  return {
    message,
    success,
    error,
  };
};
