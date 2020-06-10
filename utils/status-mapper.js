const verifiedCodes = [0, 200, 299, 201];

const isNullEmptyOrUndefined = (variable) => {
  return variable === null || variable === '' || variable === undefined;
};

const statusMapper = (statusCode) => {
  return verifiedCodes.includes(statusCode) ? 200 : 400;
};

module.exports = { statusMapper, isNullEmptyOrUndefined };
