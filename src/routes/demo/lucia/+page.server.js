import * as auth from '$lib/server/auth';
import * as crud from '$lib/server/crud';
import { fail, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/demo/lucia/login');
	}
	return { user: event.locals.user };
};

export const actions = {
	update: async (event) => {
		const formData = await event.request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const projectURL = formData.get('projectURL');
		const groupID = formData.get('groupID');
		if (!event.locals.user) {
			return fail(401);
		}
		return await crud.updateUser(event.locals.user.id, email, projectURL);
	},
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/demo/lucia/login');
	},
};
