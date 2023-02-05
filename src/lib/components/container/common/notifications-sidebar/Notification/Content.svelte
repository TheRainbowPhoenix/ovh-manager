<script lang="ts">
	import DOMPurify from 'dompurify';

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
	.notification_subject {
		font-size: 1.125rem;
		font-weight: 600;
		max-width: 8rem;
		letter-spacing: 0.0075rem;
		line-height: 1.5rem;
	}
</style>
