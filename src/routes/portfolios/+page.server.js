import { getallUsers } from '$lib/server/crud';

export async function load(event) {
  return { 
    user: event.locals.user,
    users: await getallUsers()
  }
}