import styled from 'styled-components';

export default styled.div`
min-height: 100vh;
background: linear-gradient(-45deg, #640D14, #38040E, #1D2D44, #0D1321);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
overflow: hidden;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

.notFound {
  padding: 300px 30% 500px 30%;
  font-size: 2em;
  color: white;
}
`;
