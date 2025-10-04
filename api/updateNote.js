import { API_KEY } from "../env.js";
async function updateNote(id, title, content) {
  try {
    const data = await fetch(`${API_KEY}?action=update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        title: "Fitra",
        content: "Belajar Google Apps Script",
      }),
    });
    // this.reset();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

export default updateNote;
