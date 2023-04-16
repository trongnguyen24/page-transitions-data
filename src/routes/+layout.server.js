import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
	const getBlogs = async () => {
		try {
			const projects = serializeNonPOJOs(await locals.pb.collection('blog').getFullList());
			return projects;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getBlogs()
	};
};
