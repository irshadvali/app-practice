import React ,{useState}from 'react';

function FullScreen() {
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

   
        const handleFullScreen = () => {
            const element = document.getElementById("con") as HTMLElement | null;
            if (!element) {
                return;
            }
        
            const isNotFullScreen = document.fullscreenElement;
            if (isNotFullScreen) {
                document.exitFullscreen();
                setIsFullScreen(false);
            } else {
                element.requestFullscreen().then(() => {
                    // Set background color when entering fullscreen
                    if (element.style) {
                        element.style.backgroundColor = "#ffffff";
                    }
                });
                setIsFullScreen(true);
            }
        };
   
  return (
    <div>
    <div id="con">
     <button onClick={handleFullScreen}>
        {isFullScreen ? "Exit Full Screen" : "Go Full Screen"}
      </button>
   <div style={{backgroundColor: 'red'}}> <p>dddddnpm start</p></div>
    </div>
    </div>
  );
  }

export default FullScreen;