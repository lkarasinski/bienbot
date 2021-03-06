import Link from "next/link";
import styled from "styled-components";

export interface SidebarButtonProps {
	text: string;
	icon: JSX.Element;
	href: string;
	isActive: boolean;
}

export function SidebarButton(props: SidebarButtonProps) {
	return (
		<Link href={props.href} passHref>
			<StyledSidebarButton isActive={props.isActive}>
				<StyledIcon>{props.icon}</StyledIcon>
				<StyledText>{props.text}</StyledText>
			</StyledSidebarButton>
		</Link>
	);
}

const StyledSidebarButton = styled.a<{ isActive: boolean }>`
	display: grid;
	place-items: center;
	height: 70px;
	width: 70px;
	background-color: ${({ theme, isActive }) =>
		isActive ? theme.colors.primary[200] : theme.colors.background};
	border: none;
	border-radius: 16px;
	transition: background-color 0.1s ease-out;
	text-decoration: none;
	cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};

	:hover,
	:focus-visible {
		background-color: ${({ theme, isActive }) =>
			isActive ? theme.colors.primary[200] : theme.colors.primary[100]};
	}

	:active {
		background-color: ${({ theme }) => theme.colors.primary[200]};
	}
`;

const StyledText = styled.span`
	max-width: 100%;
	font-size: ${({ theme }) => theme.font.size.xsmall};
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-family: ${({ theme }) => theme.font.family};
	color: ${({ theme }) => theme.colors.primary[700]};
	text-overflow: ellipsis;
	white-space: pre-line;
	overflow: hidden;
`;

const StyledIcon = styled.div`
	height: 40px;
	padding: 0;
	margin: 0;
	font-size: 40px;
	color: ${({ theme }) => theme.colors.primary[600]};
`;

export default SidebarButton;
