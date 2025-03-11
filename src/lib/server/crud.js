import { eq, desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import projectConfig from '$lib/project.config';

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

    