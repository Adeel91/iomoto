export const getAppMode = () => {
  return localStorage.getItem("mode") ?? "live";
};

export const setAppMode = (mode) => {
  return localStorage.setItem("mode", mode);
};
