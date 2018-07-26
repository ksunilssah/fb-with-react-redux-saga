export const fetchData = async (details) => {
  try {
    const response = await fetch(`http://localhost:3000/${details}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postAPI = async (collection) => {
  try {
    const response = await fetch(`http://localhost:3000/${collection.url}`, {
      method: 'POST',
      body: JSON.stringify(collection.data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}