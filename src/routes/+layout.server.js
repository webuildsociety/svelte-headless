// Back-end SvelteKit to retrieve blog content from pullnote.com
export async function load({url, params}) {

  // Replace this with your own key
  const PULLNOTE_KEY = "svelte-h_615pnaa082d2d29199";

  // Get content from pullnote
  var res = await fetch("https://pullnote.com/pull/note" + url.pathname, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "pn_authorization": "Bearer " + PULLNOTE_KEY
    }
  });
  return await res.json();
}