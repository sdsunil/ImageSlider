import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGrid from './component/ImageGrid';

function App() {
  const [isGrid, setIsGrid] = useState(false);
  const [isGallory, setIsGallory] = useState(true);
  let [imgNo, setImgNo] = useState(0);


const imageUrlObj = React.useMemo(() =>( {    
  0:'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
1:'https://www.hd-freewallpapers.com/latest-wallpapers/desktop-image-of-a-parrot-wallpaper.jpg',
2:'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
3:'https://www.hd-freewallpapers.com/latest-wallpapers/desktop-image-of-a-parrot-wallpaper.jpg',
5:'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
4:'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
6:'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
7:'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
8:'https://www.hd-freewallpapers.com/latest-wallpapers/desktop-image-of-a-parrot-wallpaper.jpg',
}), []);

  const showHideGrid =  (event) => {
    if (!event.keyCode) {
      setIsGrid(false);
      setIsGallory(true);
    }
    if (event.keyCode === 27) {
      setIsGrid(false);
      setIsGallory(true);
    }
  }
   const showHideGridCallback = React.useCallback(showHideGrid, [])
 

  const showHideGallory = (event) => {
    setIsGrid(true);
    setIsGallory(false);
  }

  const changePageNo = (event)=>{
    if(event.target.id =='inc'){
      setImgNo(++imgNo)
    }
    if(event.target.id =='dec'){
      setImgNo(--imgNo)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", showHideGrid,false);
    return () => {
      document.removeEventListener("keydown", showHideGrid, false);
    }
  }, [])

  return (<>
    {isGallory && <> <div className="gallary-container">
   <div onClick={showHideGallory} className='itms1'><img  src={imageUrlObj[imgNo]}  alt="Trulli"></img></div>
   <div onClick={changePageNo} className='itms2'>
   <a href="#" id='dec' style={{visibility: imgNo>0?"visible":'hidden'}} class="previous round">&#8249;</a>
<a href="#" id='inc' style={{visibility: imgNo<5?"visible":'hidden'}} class="next round">&#8250;</a>
</div>
    </div></>}
    {isGrid && <ImageGrid hideGrid={showHideGridCallback} urlObj={imageUrlObj}></ImageGrid>}
  </>)

}

export default App;
