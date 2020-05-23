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
      position: absolute;
      right: 8px;
      top: 1px; 
      z-index: 2;
      height: 64px;
    }
    
    #play {
      position: absolute;
      right: 3px;
      top: 1px;
      z-index: -1; 
      height: 64px;
    }
  }
  @media only screen and (max-device-width: 900px){
    #mute {
      position: absolute;
      right: 8px;
      top: 1px; 
      z-index: 2;
      height: 46px;
    }
    
    #play {
      position: absolute;
      right: 3px;
      top: 1px;
      z-index: -1; 
      height: 46px;
    }
  }

`;
