const findIndexById = (list = [], _id) => {
  return list.findIndex((item) => item._id === _id);
};

export { findIndexById };
