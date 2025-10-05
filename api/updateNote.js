import { URL } from "../env.js";
async function updateNote(id, title, content) {
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
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

export default updateNote;
