import styled from 'styled-components';

export default styled.div`   
  
#mute {
  position: absolute;
  right: 8px;
  top: 1px; 
  z-index: 2;
}

#play {
  position: absolute;
  right: 3px;
  top: 1px;
  z-index: -1; 
}

  @media only screen and (max-device-width: 1366px){
    #mute {
      height: 64px;
    }
    
    #play {
      height: 64px;
    }
  }
  @media only screen and (max-device-width: 900px){
    #mute {
      top: 9px; 
      height: 36px;
    }
    
    #play {
      top: 9px; 
      height: 36px;
    }
  }

`;
