const token = () => {
  const t = localStorage.getItem("token");

  if (t) {
    return t;
  } else {
    null;
  }
};


export default token;