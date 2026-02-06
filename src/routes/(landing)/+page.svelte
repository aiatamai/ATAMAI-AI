<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores';
</script>

<svelte:head>
	<title>Atamai AI - Your AI Assistant</title>
	<meta
		name="description"
		content="Powerful conversations, beautiful design, complete privacy. Experience the future of AI interaction with Atamai AI."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
	<!-- Simple Header -->
	<nav class="fixed top-0 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm z-50">
		<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
			<div class="text-xl font-bold bg-gradient-to-r from-accent-400 to-pink-600 bg-clip-text text-transparent">
				Atamai AI
			</div>
			<div class="flex gap-4">
				<button
					on:click={() => goto('/auth')}
					class="px-4 py-2 text-gray-300 hover:text-white transition"
				>
					Sign In
				</button>
				<button
					on:click={() => goto('/auth?mode=signup')}
					class="px-6 py-2 bg-gradient-to-r from-accent-600 to-pink-600 rounded-lg hover:opacity-90 transition font-medium"
				>
					Get Started
				</button>
			</div>
		</div>
	</nav>

	<!-- Returning User Card -->
	{#if $user}
		<div class="fixed top-20 right-6 z-50">
			<div class="bg-gray-850/90 backdrop-blur-md border border-accent-600/20 rounded-lg p-4 shadow-glow">
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 rounded-full bg-accent-600"></div>
						<p class="text-sm text-gray-300">
							Welcome back, <span class="font-medium text-accent-400">{$user.name}</span>
						</p>
					</div>
					<button
						on:click={() => goto('/app')}
						class="px-4 py-2 bg-gradient-to-r from-accent-600 to-pink-600 rounded-lg hover:opacity-90 transition font-medium text-sm"
					>
						Continue to App →
					</button>
				</div>
			</div>
		</div>
	{/if}

	<!-- Hero Section -->
	<div class="pt-32 pb-20 px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-7xl font-bold mb-6">
				Meet Your <span class="bg-gradient-to-r from-accent-400 to-pink-600 bg-clip-text text-transparent">AI Assistant</span>
			</h1>
			<p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
				Powerful conversations, beautiful design, complete privacy. Experience the future of AI interaction with Atamai AI.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button
					on:click={() => goto('/auth?mode=signup')}
					class="px-8 py-4 bg-gradient-to-r from-accent-600 to-pink-600 rounded-lg hover:opacity-90 transition font-medium text-lg"
				>
					Get Started Free
				</button>
				<button
					on:click={() => goto('/auth')}
					class="px-8 py-4 border border-gray-700 rounded-lg hover:border-accent-600/50 transition font-medium text-lg"
				>
					Sign In
				</button>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div class="py-20 px-6">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-12">Everything you need in an AI assistant</h2>
			<div class="grid md:grid-cols-3 gap-8">
				{#each [
					{ icon: '🧠', title: 'Intelligent Conversations', desc: 'Engage with advanced AI models in natural, context-aware conversations.' },
					{ icon: '🔒', title: 'Privacy First', desc: 'Your data stays yours. Self-hosted deployment with complete control.' },
					{ icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance with streaming responses and instant model switching.' },
					{ icon: '🎨', title: 'Beautiful Interface', desc: 'Modern, responsive design with dark mode and smooth animations.' },
					{ icon: '🔧', title: 'Fully Customizable', desc: 'Tailor every aspect to your needs. Custom models, prompts, and themes.' },
					{ icon: '🌐', title: 'Multi-Modal', desc: 'Beyond text - handle images, voice, documents with RAG support.' }
				] as feature}
					<div class="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-accent-600/30 transition">
						<div class="text-4xl mb-4">{feature.icon}</div>
						<h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
						<p class="text-gray-400">{feature.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Pricing Section -->
	<div class="py-20 px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
				<p class="text-xl text-gray-400">Choose the plan that works for you</p>
			</div>

			<!-- Pricing Cards Grid -->
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Free Tier -->
				<div
					class="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-accent-600/30 transition"
				>
					<div class="mb-4">
						<h3 class="text-xl font-semibold mb-2">Free</h3>
						<div class="text-4xl font-bold mb-1">$0</div>
						<p class="text-sm text-gray-400">Forever free</p>
					</div>
					<ul class="space-y-3 mb-6">
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">Basic AI models</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">100 messages/month</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">Community support</span>
						</li>
					</ul>
					<button
						on:click={() => goto('/auth?mode=signup')}
						class="w-full px-4 py-2 border border-gray-700 rounded-lg hover:border-accent-600/50 transition font-medium"
					>
						Get Started
					</button>
				</div>

				<!-- Pro Tier (Featured) -->
				<div
					class="p-6 bg-gradient-to-br from-accent-600/20 to-pink-600/20 border border-accent-600/50 rounded-lg relative"
				>
					<div
						class="absolute top-0 right-0 px-3 py-1 bg-accent-600 text-white text-xs rounded-bl-lg rounded-tr-lg font-medium"
					>
						Popular
					</div>
					<div class="mb-4">
						<h3 class="text-xl font-semibold mb-2">Pro</h3>
						<div class="text-4xl font-bold mb-1">
							$19<span class="text-lg text-gray-400">/month</span>
						</div>
						<p class="text-sm text-gray-400">Billed monthly</p>
					</div>
					<ul class="space-y-3 mb-6">
						<li class="flex items-start gap-2">
							<span class="text-accent-400">✓</span>
							<span class="text-sm">All Free features</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-400">✓</span>
							<span class="text-sm">Advanced AI models</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-400">✓</span>
							<span class="text-sm">Unlimited messages</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-400">✓</span>
							<span class="text-sm">Priority support</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-400">✓</span>
							<span class="text-sm">Custom models</span>
						</li>
					</ul>
					<button
						on:click={() => goto('/auth?mode=signup')}
						class="w-full px-4 py-2 bg-gradient-to-r from-accent-600 to-pink-600 rounded-lg hover:opacity-90 transition font-medium"
					>
						Start Pro Trial
					</button>
				</div>

				<!-- Enterprise Tier -->
				<div
					class="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-accent-600/30 transition"
				>
					<div class="mb-4">
						<h3 class="text-xl font-semibold mb-2">Enterprise</h3>
						<div class="text-4xl font-bold mb-1">Custom</div>
						<p class="text-sm text-gray-400">Contact sales</p>
					</div>
					<ul class="space-y-3 mb-6">
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">All Pro features</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">Dedicated support</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">Custom integrations</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">SLA guarantees</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-accent-600">✓</span>
							<span class="text-sm text-gray-300">On-premise deployment</span>
						</li>
					</ul>
					<button
						on:click={() => goto('/auth?mode=signup')}
						class="w-full px-4 py-2 border border-gray-700 rounded-lg hover:border-accent-600/50 transition font-medium"
					>
						Contact Sales
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials Section -->
	<div class="py-20 px-6 bg-gray-900/30">
		<div class="max-w-6xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4">Loved by Users Worldwide</h2>
				<p class="text-xl text-gray-400">See what our community is saying</p>
			</div>

			<!-- Testimonials Grid -->
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Testimonial 1 -->
				<div class="p-6 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-lg">
					<!-- Quote Icon -->
					<div class="mb-6">
						<svg
							class="w-8 h-8 text-accent-600/30 mb-4"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"
							/>
						</svg>
						<p class="text-gray-300 text-sm leading-relaxed">
							Atamai AI has completely transformed how I interact with AI. The interface is beautiful
							and the responses are lightning fast.
						</p>
					</div>
					<!-- Author -->
					<div class="flex items-center gap-3">
						<div
							class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-600 to-pink-600 flex items-center justify-center text-2xl"
						>
							🎨
						</div>
						<div>
							<div class="font-semibold text-white">Sarah Chen</div>
							<div class="text-sm text-gray-400">Product Designer</div>
						</div>
					</div>
				</div>

				<!-- Testimonial 2 -->
				<div class="p-6 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-lg">
					<!-- Quote Icon -->
					<div class="mb-6">
						<svg
							class="w-8 h-8 text-accent-600/30 mb-4"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"
							/>
						</svg>
						<p class="text-gray-300 text-sm leading-relaxed">
							The privacy-first approach and self-hosting options make this the only AI assistant I
							trust with sensitive work.
						</p>
					</div>
					<!-- Author -->
					<div class="flex items-center gap-3">
						<div
							class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-600 to-pink-600 flex items-center justify-center text-2xl"
						>
							🔒
						</div>
						<div>
							<div class="font-semibold text-white">Marcus Rodriguez</div>
							<div class="text-sm text-gray-400">Security Engineer</div>
						</div>
					</div>
				</div>

				<!-- Testimonial 3 -->
				<div class="p-6 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-lg">
					<!-- Quote Icon -->
					<div class="mb-6">
						<svg
							class="w-8 h-8 text-accent-600/30 mb-4"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"
							/>
						</svg>
						<p class="text-gray-300 text-sm leading-relaxed">
							Switching between models is seamless, and the multi-modal capabilities have saved me
							countless hours of work.
						</p>
					</div>
					<!-- Author -->
					<div class="flex items-center gap-3">
						<div
							class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-600 to-pink-600 flex items-center justify-center text-2xl"
						>
							📊
						</div>
						<div>
							<div class="font-semibold text-white">Emily Thompson</div>
							<div class="text-sm text-gray-400">Data Scientist</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- FAQ Section -->
	<div class="py-20 px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
				<p class="text-xl text-gray-400">Everything you need to know about Atamai AI</p>
			</div>

			<!-- FAQ Accordion -->
			<div class="space-y-4">
				<!-- FAQ 1 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>What AI models does Atamai AI support?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						Atamai AI supports all major AI models including GPT-4, Claude, Gemini, and open-source
						models like Llama and Mistral. You can switch between models seamlessly in the interface.
					</div>
				</details>

				<!-- FAQ 2 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>Is my data secure and private?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						Yes. Atamai AI prioritizes privacy with self-hosting options, no data retention
						policies, and end-to-end encryption. Your conversations stay on your infrastructure.
					</div>
				</details>

				<!-- FAQ 3 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>Can I use Atamai AI offline?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						With self-hosted deployment, you can use Atamai AI with locally-run models completely
						offline. Cloud-based models require an internet connection.
					</div>
				</details>

				<!-- FAQ 4 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>How do I deploy Atamai AI?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						Atamai AI can be deployed via Docker, Kubernetes, or as a standalone application. Full
						documentation and deployment guides are available in our docs.
					</div>
				</details>

				<!-- FAQ 5 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>What's the difference between Free and Pro?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						Free includes basic models with usage limits. Pro unlocks advanced models, unlimited
						messages, custom model integration, and priority support.
					</div>
				</details>

				<!-- FAQ 6 -->
				<details
					class="group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent-600/30 transition"
				>
					<summary
						class="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-white list-none"
					>
						<span>Do you offer refunds?</span>
						<svg
							class="w-5 h-5 text-accent-600 transition-transform group-open:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>
					<div
						class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4"
					>
						Yes. We offer a 30-day money-back guarantee on Pro subscriptions. No questions asked.
					</div>
				</details>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="py-20 px-6 bg-gradient-to-r from-accent-600/20 to-pink-600/20">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-4">Ready to get started?</h2>
			<p class="text-xl text-gray-300 mb-8">
				Join thousands of users already experiencing the power of Atamai AI.
			</p>
			<button
				on:click={() => goto('/auth?mode=signup')}
				class="px-8 py-4 bg-gradient-to-r from-accent-600 to-pink-600 rounded-lg hover:opacity-90 transition font-medium text-lg"
			>
				Get Started Free
			</button>
		</div>
	</div>

	<!-- Footer -->
	<footer class="py-8 px-6 border-t border-gray-800">
		<div class="max-w-6xl mx-auto text-center text-gray-400">
			<p>© 2026 Atamai AI. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
