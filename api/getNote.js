import { API_KEY } from "../env.js";

async function getNote() {
  try {
    const response = await fetch(`${API_KEY}?action=read`);

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getNote;
