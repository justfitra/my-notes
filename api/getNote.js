import { URL } from "../env.js";

async function getNote() {
  try {
    const response = await fetch(`${URL}`);

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getNote;
