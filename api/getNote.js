import { URL } from "../env.js";

async function getNote(title) {
  try {
    if (title) {
      const response = await fetch(`${URL}/title/*${title}*`);
      const data = await response.json();
      console.log(data);

      return data;
    } else {
      const response = await fetch(`${URL}`);
      const data = await response.json();

      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
}

export default getNote;
