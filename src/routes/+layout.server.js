// Server-side content retrieval for all content pages
// You can just use e.g. /blog by moving this and the [...path] folder into a /blog subdirectory
// Place your own pullnote key in /.env
import { PULLNOTE_KEY } from '$env/static/private';
import { PullnoteClient } from '@pullnote/client';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
  var path = url.pathname;
  if (path.startsWith("/.")) return; // Ignore paths that start with . e.g. .well-known/appspecific/com.chrome.devtools.json

  // Create the pullnote client with your own key
  const pn = new PullnoteClient(PULLNOTE_KEY);

  try {
    // Pullnote accepts any path (without the domain name)
    var note = await pn.get(path, 'html');
    // list gives any notes under the given path
    note.links = await pn.list(path);
  } catch (e) {
    error(404, "Content not found for " + path);
  }

  return note;
}
