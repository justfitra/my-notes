import { URL } from "../env.js";

async function searchNote(title) {
  try {
    const response = await fetch(`${URL}/title/*${title}*`);
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default searchNote;
