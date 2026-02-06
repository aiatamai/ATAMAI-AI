<script>
	import { page } from '$app/stores';
	import { ATAMAI_NAME } from '$lib/stores';
</script>

<div class="min-h-screen flex bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-850 relative">
	<!-- Custom Atamai AI background -->
	<div class="w-full h-full absolute inset-0">
		<div class="w-full h-full absolute inset-0 dark:hidden" style="background-image: url('/assets/images/atamai-bg-light.svg'); background-size: cover; background-position: center;"></div>
		<div class="w-full h-full absolute inset-0 hidden dark:block" style="background-image: url('/assets/images/atamai-bg.svg'); background-size: cover; background-position: center;"></div>
	</div>

	<div class="flex h-full w-full relative z-10">
		<div class="m-auto my-10">
			<div class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl dark:shadow-glow-lg border border-gray-300/30 dark:border-accent-600/20 max-w-md">
				<!-- Logo -->
				<div class="flex justify-center mb-6">
					<img
						src="/static/logo.png"
						class="size-16 rounded-2xl shadow-lg"
						alt="Atamai AI"
					/>
				</div>

				<!-- Error Status -->
				<div class="text-center mb-4">
					<div class="text-6xl font-bold bg-gradient-to-r from-accent-600 to-accent-800 dark:from-accent-400 dark:to-accent-600 bg-clip-text text-transparent">
						{$page.status}
					</div>
				</div>

				<!-- Error Message -->
				<div class="text-center text-lg text-gray-700 dark:text-gray-300 font-medium mb-6">
					{$page.error?.message || 'An error occurred'}
				</div>

				<!-- Back Button -->
				<div class="flex justify-center">
					<a
						href="/"
						class="px-6 py-3 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-lg hover:shadow-glow transition-all font-medium text-sm"
					>
						Back to {$ATAMAI_NAME}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
