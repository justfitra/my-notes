import { API_KEY } from "../env.js";

async function getNote() {
  try {
    const response = await fetch(API_KEY);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getNote;
