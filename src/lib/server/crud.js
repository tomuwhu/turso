import { eq, desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import projectConfig from '$lib/project.config';
import { fail, redirect } from '@sveltejs/kit';

export const getallUsers = async () => {
  const users = await db.select({
    id: table.user.id,
    name: table.user.name,
    email: table.user.email,
    groupID: table.user.groupID,
    projectURL: table.user.projectURL
  }).from(table.user).orderBy(desc(table.user.groupID, table.user.name));
  return users;
}


export const updateUser = async (id, email, projectURL) => {
    await db
        .update(table.user)
        .set({ email, projectURL })
        .where(eq(table.user.id, id));
    return redirect(302, '/demo/lucia');
}