import { URL } from "../env.js";
async function deletNote(id) {
  try {
    const data = await fetch(`${URL}/id/*${id}*`, {
      method: "DELETE",
      body: JSON.stringify({
        title: title,
        content: content,
        date: new Date().toLocaleString(),
      }),
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default deletNote;
