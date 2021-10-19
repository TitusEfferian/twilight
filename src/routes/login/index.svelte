<script>
import NavBar from "$lib/components/NavBar.svelte";
const handleGoBack = () => {
    window.location.href = '/';
}
</script>
<div class="w-full h-screen bg-gray-100">
    <NavBar onBack={handleGoBack} />
</div>