// Server-side content retrieval for all content pages
// Put your own pullnote key in /.env
import { PULLNOTE_KEY } from '$env/static/private';
import { PullnoteClient } from '@pullnote/client';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
  var path = url.pathname;
  // Ignore paths that start with . e.g. .well-known/appspecific/com.chrome.devtools.json
  if (path.startsWith("/.")) {
    return;
  }
  const pn = new PullnoteClient(PULLNOTE_KEY, "http://api.pullnote.test");

  try {
    var note = await pn.get(path, 'html');
    note.links = await pn.list(path);
  } catch (e) {
    // Note: this will throw EVEN if a svelte route is found, so make sure you create a path on pullnote!
    error(404, "Content not found for " + path);
  }

  return note;
}
