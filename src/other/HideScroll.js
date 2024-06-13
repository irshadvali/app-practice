import styled from 'styled-components';

const ScrollableHiddenScrollbar = styled.div`
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const MyComponent = () => {
  return (
    <ScrollableHiddenScrollbar>
      {/* Your content here */}
      <p>Some content that overflows...</p>
      <p>More content...</p>
      <p>Even more content...</p>
    </ScrollableHiddenScrollbar>
  );
};

export default MyComponent;
