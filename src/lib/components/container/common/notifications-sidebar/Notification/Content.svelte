<script lang="ts">
	import DOMPurify from 'dompurify';
	import '../notification.scss';

	export let description: string = '';
	export let subject: string = '';

	const sanitizedDescr = DOMPurify.sanitize(description, {
		ADD_ATTR: ['target']
	});
</script>

<div>
	<div class="notification_subject">{subject}</div>
	<div>{@html sanitizedDescr}</div>
</div>

<style lang="scss">
	@import '../notification.scss';
</style>
