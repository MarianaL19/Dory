import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    `;

export const VarContainer = styled.View`
    align-items: center;
    ${props => props.alignCenter && `align items: center`}
    ${props => props.alignRight && `align items: right`}
    ${props => props.alignRight && `align items: left`}

    justify-content: center;
    ${props => props.justifyCenter && `align items: center`}
    ${props => props.justifyRight && `align items: right`}
    ${props => props.justifyLeft && `align items: left`}

`;

export const BasicText = styled.Text`
    justify-content: center;
    position: absolute;

    text-align: center;
    ${props => props.alignRight && `text-align: right`}
    ${props => props.alignLeft && `text-align: left`}

    color: black;
    ${props => props.gray && `color: gray`}
    ${props => props.white && `color: white`}
    ${props => props.warning && `color: #A92526`}

    font-size: ${props => props.size || '32px'}
    ${props => props.large && `font-size: 30px`}
    ${props => props.medium && `font-size: 20px`}
    ${props => props.small && `font-size: 15px`}

    font-weight: 400;
    ${props => props.heavy && `font-weight: 900`}
    ${props => props.bold && `font-weight: 700`}
    ${props => props.light && `font-weight: 300`}

    letter-spacing: 0px;
    ${props => props.largeSpacing && `letterSpacing: 4px`}
    ${props => props.mediumSpacing && `letterSpacing: 2px`}
    ${props => props.smallSpacing && `letterSpacing: 1px`}

    top: ${props => props.top || '0px'}

    padding-horizontal: ${props => props.paddingHorizontal || '0px'}
 `;

export const TextPrimary = styled.Text`
    color: ${props => props.theme.colors.primary};
    
    font-size: 32px;
    ${props => props.large && `font-size: 30px`}
    ${props => props.medium && `font-size: 20px`}

    font-weight: 700px;
    ${props => props.heavy && `font-weight: 900`}
    ${props => props.bold && `font-weight: 700`}
`;

export const TextSecondary = styled.Text`
    color: ${props => props.theme.colors.secondary};

    font-size: 32px;
    ${props => props.large && `font-size: 30px`}
    ${props => props.medium && `font-size: 20px`}

    font-weight: 700px;
    ${props => props.heavy && `font-weight: 900`}
    ${props => props.bold && `font-weight: 700`}
`;

export const TextTertiary = styled.Text`
    color: ${props => props.theme.colors.tertiary};

    font-size: 22px;
    ${props => props.large && `font-size: 30px`}
    ${props => props.medium && `font-size: 20px`}
    ${props => props.small && `font-size: 15px`}

    font-weight: 500;
    ${props => props.heavy && `font-weight: 900`}
    ${props => props.bold && `font-weight: 700`}
    ${props => props.light && `font-weight: 300`}
`;

export const BasicButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.primary};
    width: ${props => props.width || '50%'}
    height: ${props => props.height || '50px'}
    ${props => props.large && `height: 60px`}
    border-radius: ${props => props.borderRadius || '10px'}
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    justify-contents: center;
    align-self: center;
    top: ${props => props.top || '0px'}
`;
