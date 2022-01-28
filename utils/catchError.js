const catchErrors = (error) => {
  let errorMsg = "";

  if (error.response) {
    errorMsg = error.response.data.msg;
  } else if (error.request) {
    errorMsg = error.request;
  } else {
    errorMsg = error.message;
  }
  console.log("Errors =>", errorMsg);
  return errorMsg;
};

export default catchErrors;
