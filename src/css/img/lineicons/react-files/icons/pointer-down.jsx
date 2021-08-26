import React from 'react';

function PointerDown(props) {
	const title = props.title || "pointer down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37 62.7c-1.4 0-2.8-.4-3.9-1.1-.5-.3-1-.8-1.5-1.3-1.5-1.7-2.5-4.1-2.8-6.9-.2-1.8-.1-3.6 0-5.4v-.3c-2.4.4-5.1-.4-6.9-2.1-2.9.9-6.2-.1-8.3-2.4-1.4.4-3 .4-4.5-.2-2.1-.8-3.8-2.4-4.6-4.4-.7-1.7-.7-3.5-.7-5 0-3.5-.1-7 .1-10.5.2-4.8.9-10.9 4.5-15.3 2.9-3.5 7.5-5.7 13.3-6.3 5.1-.6 12.4 0 17.3 2.6 4.6 2.4 7.7 8.7 9.1 11.7.2.5.5 1 .6 1.1 3.1 5 5.7 8.9 8.3 12.3 1.3 1.7 2.9 3.8 3 6.4 0 2.9-2 5.6-4.9 6.6-2.3.8-4.9.4-7.5-.9-.9-.5-1.7-1-2.5-1.6 0 4.2.1 8.5-.1 12.7-.1 2-.2 4-1 5.8-.9 2.1-2.8 3.6-5.1 4.3-.5.1-1.2.2-1.9.2zM34.2 58c.3.3.5.5.8.7.9.6 2 .7 3.2.4 1.3-.4 2.3-1.3 2.8-2.4.6-1.2.6-2.7.7-4.5.2-5.5.1-11.1 0-16.5 0-.7.4-1.3 1-1.6.6-.3 1.4-.2 1.9.3 1.5 1.4 3 2.8 4.7 3.7 1 .5 2.9 1.3 4.8.7 1.2-.4 2.5-1.7 2.5-3.2 0-1.4-1.1-2.9-2.2-4.2-2.7-3.5-5.5-7.5-8.6-12.6-.2-.3-.4-.8-.7-1.4-1.2-2.5-4-8.2-7.6-10.1C33.3 5.1 26.6 4.6 22.2 5c-3.4.4-8.1 1.6-11 5-2.9 3.6-3.5 8.9-3.7 13.2-.1 3.4-.1 6.9-.1 10.3 0 1.4 0 2.7.5 3.9.4 1.1 1.3 1.9 2.5 2.3 1.1.4 2.2.3 3.1-.2.4-.2.9-.3 1.3-.2.4.1.8.4 1.1.8 1.1 2 3.9 2.9 5.8 1.8.8-.4 1.7-.2 2.3.5 1.3 1.8 4 2.4 5.9 1.2.5-.3 1.2-.4 1.8-.1.6.3.9.9.9 1.5 0 1-.1 2-.1 3-.1 1.7-.2 3.3-.1 4.8.1 2.3.8 4.1 1.8 5.2z"/>
	</g>
</svg>
	);
};

export default PointerDown;