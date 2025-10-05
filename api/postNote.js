import { URL } from "../env.js";
async function postNote(titleNote, contentNote) {
  try {
    const id = await fetch(`${URL}`);
    const idData = await id.json();

    const newId = idData.length + 1;

    const formInput = {
      id: newId,
      title: titleNote,
      content: contentNote,
      date: new Date().toLocaleString(),
    };

    const data = await fetch(`${URL}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    });

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default postNote;
