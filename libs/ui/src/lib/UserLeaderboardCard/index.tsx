import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import styled from "styled-components";

import UserInfo from "../UserInfo";

export interface UserLeaderboardCardProps {
	imageSrc: string;
	displayName: string;
	discordTag: string;
	position: number;
	count: number;
	href: string;
	text: string;
	username: string;
}

export function UserLeaderboardCard(props: UserLeaderboardCardProps) {
	return (
		<StyledUserLeaderboardCard>
			<StyledPosition>#{props.position}</StyledPosition>
			<Link href={props.href} passHref>
				<StyledUserLink>
					<UserInfo
						direction="column"
						imageSrc={props.imageSrc}
						displayName={props.displayName}
						discordTag={props.discordTag}
						username={props.username}
					/>
				</StyledUserLink>
			</Link>
			<StyledRightContainer>
				{props.count && props.text ? (
					<>
						<StyledHours>{props.count} </StyledHours>
						{props.text}
					</>
				) : (
					<Skeleton width={100} height={20} />
				)}
			</StyledRightContainer>
		</StyledUserLeaderboardCard>
	);
}

const StyledUserLink = styled.a`
	text-decoration: none;
`;

const StyledHours = styled.span`
	font-weight: 800;
	color: ${({ theme }) => theme.colors.primary[400]};
`;

const StyledPosition = styled.div`
	font-size: ${({ theme }) => theme.font.size.xlarge};
	color: ${({ theme }) => theme.colors.primary[300]};
	margin-right: 16px;
`;

const StyledRightContainer = styled.div`
	font-size: ${({ theme }) => theme.font.size.medium};
	color: ${({ theme }) => theme.colors.primary[500]};
	margin-left: auto;
	font-weight: 500;
`;

const StyledUserLeaderboardCard = styled.div`
	background-color: ${({ theme }) => theme.colors.primary[100]};
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-family: ${({ theme }) => theme.font.family};
	padding: 12px;
	border-radius: 8px;
	min-width: 0;
	overflow: hidden;
`;

export default UserLeaderboardCard;
