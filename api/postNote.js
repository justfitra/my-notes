import { API_KEY } from "../env.js";
async function postNote(e, titleNote, contentNote) {
  try {
    const formInput = {
      title: titleNote,
      content: contentNote,
    };
    const data = await fetch(`${API_KEY}?action=create`, {
      method: "POST",
      body: JSON.stringify(formInput),
    });
    // this.reset();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export default postNote;
