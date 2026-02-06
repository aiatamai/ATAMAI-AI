<script>
	import { goto } from '$app/navigation';
	import { ATAMAI_NAME, config } from '$lib/stores';
	import { onMount, getContext } from 'svelte';

	const i18n = getContext('i18n');

	let loaded = false;

	onMount(async () => {
		if ($config) {
			await goto('/');
		}

		loaded = true;
	});
</script>

{#if loaded}
	<div class="absolute w-full h-full flex z-50 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-850">
		<!-- Custom Atamai AI background -->
		<div class="w-full h-full absolute inset-0">
			<div class="w-full h-full absolute inset-0 dark:hidden" style="background-image: url('/assets/images/atamai-bg-light.svg'); background-size: cover; background-position: center;"></div>
			<div class="w-full h-full absolute inset-0 hidden dark:block" style="background-image: url('/assets/images/atamai-bg.svg'); background-size: cover; background-position: center;"></div>
		</div>

		<div class="absolute rounded-xl w-full h-full backdrop-blur-xl flex justify-center relative z-10">
			<div class="m-auto pb-44 flex flex-col justify-center">
				<div class="max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl dark:shadow-glow-lg border border-gray-300/30 dark:border-accent-600/20">
					<!-- Logo -->
					<div class="flex justify-center mb-6">
						<img
							src="/static/logo.png"
							class="size-20 rounded-2xl shadow-xl"
							alt="Atamai AI"
						/>
					</div>

					<div class="text-center text-2xl font-bold z-50 bg-gradient-to-r from-accent-600 to-accent-800 dark:from-accent-400 dark:to-accent-600 bg-clip-text text-transparent mb-2">
						{$ATAMAI_NAME}
					</div>

					<div class="text-center text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
						Backend Required
					</div>

					<div class="mt-4 text-center text-sm w-full text-gray-600 dark:text-gray-400">
						{$i18n.t(
							"Oops! You're using an unsupported method (frontend only). Please serve the WebUI from the backend."
						)}

						<div class="mt-6 space-y-2">
							<a
								class="block font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 transition-colors"
								href="https://github.com/aiatamai/atamai-ai#readme"
								target="_blank">See README for installation instructions</a
							>
						</div>
					</div>

					<div class="mt-8 mx-auto relative group w-fit">
						<button
							class="relative z-20 flex px-6 py-3 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-lg hover:shadow-glow transition-all font-medium text-sm"
							on:click={() => {
								location.href = '/';
							}}
						>
							{$i18n.t('Check Again')}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
