// src/emails/CollaborationInvite.tsx
import type { JSX } from "solid-js";

export const BASE_URL = "https://anchkor.com";
const applicationName = "Anchkor";

interface CollaborationInviteProps {
	firstName?: string;
	inviterName?: string;
	projectName?: string;
	token?: string;
}

export function CollaborationInvite({
	firstName = "there",
	inviterName = "there",
	projectName = "there",
	token = "there",
}: CollaborationInviteProps): JSX.Element {
	const inviteLink = `${BASE_URL}/accept-invite?token=${token}`;

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>
					Join {projectName} on {applicationName}!
				</title>
			</head>
			<body
				style={{
					margin: "0",
					padding: "0",
					"background-color": "#ffffff",
					"font-family": "sans-serif",
				}}
			>
				<div
					style={{
						margin: "40px auto",
						width: "465px",
						border: "1px solid #eaeaea",
						"border-radius": "4px",
						padding: "20px",
					}}
				>
					{/* Preview Text */}
					<div
						style={{
							display: "none",
							"max-height": "0",
							overflow: "hidden",
						}}
					>
						Join {projectName} on {applicationName}!
					</div>

					{/* Header with Logo */}

					{/* Greeting */}
					<div
						style={{
							"margin-top": "32px",
							"text-align": "center",
						}}
					>
						<p
							style={{
								"font-size": "18px",
								"font-weight": "600",
								color: "#000000",
								"line-height": "24px",
								"margin-bottom": "16px",
							}}
						>
							Hi {firstName.charAt(0).toUpperCase() + firstName.slice(1)},
						</p>
						<p
							style={{
								"font-size": "14px",
								color: "#333333",
								"line-height": "24px",
								"margin-bottom": "24px",
							}}
						>
							<span style={{ "font-weight": "700" }}>{inviterName}</span> has
							invited you to collaborate on{" "}
							<span style={{ "font-weight": "700" }}>{projectName}</span> with{" "}
							<span style={{ "font-weight": "700" }}>{applicationName}</span>!
						</p>
					</div>

					{/* Invitation Details */}
					<div
						style={{
							"margin-bottom": "32px",
							"text-align": "center",
						}}
					>
						<p
							style={{
								"font-size": "14px",
								color: "#333333",
								"line-height": "24px",
								"margin-bottom": "24px",
							}}
						>
							Join the team to start working together on exciting ideas, share
							resources, and bring {projectName} to life.
						</p>
						<a
							href={inviteLink}
							style={{
								display: "inline-block",
								padding: "12px 24px",
								"background-color": "#2754C5",
								color: "#ffffff",
								"font-size": "14px",
								"font-weight": "500",
								"text-decoration": "none",
								"border-radius": "4px",
							}}
						>
							Accept Invitation
						</a>
					</div>

					{/* Alternative Link */}
					<div
						style={{
							"margin-bottom": "24px",
							"text-align": "center",
						}}
					>
						<p
							style={{
								"font-size": "12px",
								color: "#666666",
								"line-height": "20px",
								"margin-bottom": "8px",
							}}
						>
							Or copy and paste this link into your browser:
						</p>
						<a
							href={inviteLink}
							style={{
								"font-size": "12px",
								color: "#2754C5",
								"text-decoration": "underline",
								"word-break": "break-all",
							}}
						>
							{inviteLink}
						</a>
					</div>

					{/* Divider */}
					<hr
						style={{
							border: "1px solid #eaeaea",
							margin: "26px 0",
						}}
					/>

					{/* Footer */}
					<div
						style={{
							"text-align": "center",
						}}
					>
						<p
							style={{
								"font-size": "12px",
								color: "#666666",
								"line-height": "20px",
								"margin-bottom": "8px",
							}}
						>
							Questions? Contact us at{" "}
							<a
								href="mailto:support@anchkor.com"
								style={{
									color: "#2754C5",
									"text-decoration": "underline",
								}}
							>
								support@anchkor.com
							</a>
						</p>
						<p
							style={{
								"font-size": "12px",
								color: "#666666",
								"line-height": "20px",
							}}
						>
							© 2024 {applicationName}. All rights reserved.
						</p>
					</div>
				</div>
			</body>
		</html>
	);
}
