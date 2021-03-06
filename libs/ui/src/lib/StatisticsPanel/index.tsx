import Link from "next/link";
import styled from "styled-components";

import InfoCard, { InfoCardProps } from "../InfoCard";

export interface StatisticsPanelProps {
	heading: string;
	statistics: InfoCardProps[];
	href: string;
}

export function StatisticsPanel(props: StatisticsPanelProps) {
	return (
		<StyledStatisticsPanel>
			<StyledHeading>{props.heading}</StyledHeading>
			{props.href ? (
				<Link href={props.href} passHref>
					<StyledSeeMore>See more</StyledSeeMore>
				</Link>
			) : null}
			<StyledCardContainer>
				{props.statistics.map((statistic) => (
					<InfoCard {...statistic} key={statistic.label} />
				))}
			</StyledCardContainer>
		</StyledStatisticsPanel>
	);
}

const StyledStatisticsPanel = styled.div`
	font-family: ${({ theme }) => theme.font.family};
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
`;

const StyledHeading = styled.h2`
	font-weight: 800;
	font-size: ${({ theme }) => theme.font.size.large};
	color: ${({ theme }) => theme.colors.primary[700]};
`;

const StyledSeeMore = styled.h2`
	font-weight: 700;
	font-size: ${({ theme }) => theme.font.size.large};
	text-decoration: none;
	color: ${({ theme }) => theme.colors.primary[400]};
	text-align: right;
	cursor: pointer;
`;

const StyledCardContainer = styled.div`
	margin-top: 16px;
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
	grid-column: 1 / -1;
`;

export default StatisticsPanel;
