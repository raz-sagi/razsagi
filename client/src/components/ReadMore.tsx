import React, { useState } from 'react';
import styled from 'styled-components';

const ReadMoreContainer = styled('div')({
  // fontSize: '1em',
  // lineHeight: '1.8',
})

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: ##384959;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

type ReadMoreProps = {
  // text: JSX.Element;
  text: string | JSX.Element,
  isExpanded: boolean,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
  height?: string
};



const getShortText = (text: JSX.Element | string) => {
  if(typeof text === 'string'){
    return text.slice(0, 426)
  }
  const paragraphs = React.Children.toArray(text.props.children);

  return (
    <div>
        <div>{paragraphs[0]}</div>
    </div>
  );
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, isExpanded, setIsExpanded, height}) => {

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const getHeight = () => isExpanded ? 'fit-content' :  window.innerHeight * 0.4
  return (
    <ReadMoreContainer>
      <div style={{height: height ? height : '100%', overflow: 'hidden'}}>
        {isExpanded ? text : getShortText(text)}
      </div>
      <ReadMoreButton onClick={toggleReadMore}>
        {isExpanded ? 'קרא פחות': 'קרא עוד'}
      </ReadMoreButton>
    </ReadMoreContainer>
  );
};

export default ReadMore;
