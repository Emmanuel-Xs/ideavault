import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<h1 className="font-bold font-mono text-5xl tracking-tight">
				idea-vault
			</h1>

			<p className="mt-4 max-w-prose font-serif text-lg text-muted-foreground">
				Capture, organize, and develop ideas before they disappear.
			</p>
		</div>
	);
}
