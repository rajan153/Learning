export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		console.log(request);

		if (request.method === 'GET') {
			return Response.json({
				message: 'you sent a get request',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}
	},
} satisfies ExportedHandler<Env>;
