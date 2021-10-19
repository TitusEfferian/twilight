<script>
	import Receive from './Receive.svelte';
	import Scanner from './Scanner.svelte';
	import Send from './Send.svelte';
</script>

<div class="w-full px-4">
	<div
		class="bg-white rounded py-2 -mt-8 w-full flex items-center justify-between shadow border px-8"
	>
		<Send />
		<Receive />
		<Scanner />
	</div>
</div>
