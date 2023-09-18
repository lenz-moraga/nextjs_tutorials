export const getIdFromUrl = (url) => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 1];
  return id;
};

export const createSearchParams = (searchParams) => {
  let params = "";
  for (const key in searchParams) {
    if (searchParams[key] !== "") {
      params += `&${key}=${searchParams[key]}`;
    }
  }

  return params;
};
