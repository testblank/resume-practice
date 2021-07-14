const debounceUtil = () => {
  let prevFunc: (...args: any) => any = () => { };
  let timeOut: any = null;

  const debounce = (func: (...args: any) => any, waitMs: number) => {
      if (prevFunc.toString() === func.toString()) {

          if (timeOut) {
              clearTimeout(timeOut);
          }
      }
      else {
          prevFunc = func;
      }

      timeOut = setTimeout(func, waitMs);
  };

  const remove = () => {
      if (timeOut) {
          clearTimeout(timeOut);
      }
  };

  return {
      debounce,
      remove,
  };
};

export default debounceUtil;