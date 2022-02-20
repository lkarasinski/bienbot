import Link from "next/link";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface MessageCardProps {
    user: {
        discordTag: string;
        displayName: string;
        id: string;
    };
    messageContent: string;
    channel: {
        name: string;
        id: string;
    };
    time: string;
}

export function MessageCard({
    user,
    channel,
    time,
    messageContent,
}: MessageCardProps) {
    return (
        <StyledMessageCard>
            <StyledImage src="https://cdn.discordapp.com/avatars/380454126364131332/1476ffee61d845bbe5a1027da9cb8db3.webp"></StyledImage>
            <StyledInfoContainer>
                <Link href={user.id}>
                    <StyledUserInfo>
                        <StyledHighlight>{user.displayName}</StyledHighlight>
                        <StyledDiscordTag>{user.discordTag}</StyledDiscordTag>
                    </StyledUserInfo>
                </Link>
                <StyledMessageInfo>
                    <span>in</span>
                    <Link href={channel.id}>
                        <StyledChannelName>#{channel.name}</StyledChannelName>
                    </Link>
                    <span>at</span>
                    <StyledHighlight>{time}</StyledHighlight>
                </StyledMessageInfo>
            </StyledInfoContainer>
            <StyledMessage>{messageContent}</StyledMessage>
        </StyledMessageCard>
    );
}

const StyledHighlight = styled.span`
    color: ${({ theme }) => theme.colors.primary[400]};
    font-weight: 700;
`;
const StyledDiscordTag = styled.span`
    color: ${({ theme }) => theme.colors.primary[300]};
`;

const StyledChannelName = styled.a`
    color: ${({ theme }) => theme.colors.primary[400]};
    font-weight: 700;
    cursor: pointer;
`;

const StyledInfoContainer = styled.div`
    color: ${({ theme }) => theme.colors.primary[500]};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 8px;
`;

const StyledUserInfo = styled.a`
    display: block;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;

const StyledMessageInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    word-break: break-word;
`;

const StyledMessage = styled.div`
    color: ${({ theme }) => theme.colors.primary[500]};
    margin-left: 8px;
    margin-top: 4px;
`;

const StyledImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    grid-row: 1/-1;
    grid-column: 1/2;
`;

const StyledMessageCard = styled.div`
    font-size: ${({ theme }) => theme.font.small};
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.primary[100]};
    padding: 14px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-template-rows: auto auto;
`;

export default MessageCard;