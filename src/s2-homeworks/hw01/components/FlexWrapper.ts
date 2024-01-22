import styled from "@emotion/styled";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '20px'};
  //width: 700px;
  
  //outline: 1px solid green;
`