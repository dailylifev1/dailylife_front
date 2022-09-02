const methodFormat = (callbackfunc) => {
  const method = async (userInfo) => {
    try {
      const data = await callbackfunc(userInfo);
      return {
        ok: true,
        data,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
      };
    }
  };
  return method;
};
export default methodFormat;
