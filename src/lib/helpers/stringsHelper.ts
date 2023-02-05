export function capitalize(text: string): string {
	return text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

export function truncate(text: string, length: number): string {
	if (text.length > length) {
		return text.slice(0, length) + '…';
	} else {
		return text;
	}
}
