// Back-end SvelteKit +layout.server.js to retrieve blog content from pullnote.com
export async function load({url, params}) {

  const PULLNOTE_KEY = "svelte-h_615pnaa082d2d29199";

  // Page slug e.g. "productivity/how-to-concentrate"
  var slug = params.slug || "";

  // Get content from pullnote
  var apiUrl = "http://localhost:5173/pull/note/" + slug;
  var res = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + PULLNOTE_KEY
    }
  });
  var data = await res.json();
  console.log("layout.server returning:", data);
  return data;
}