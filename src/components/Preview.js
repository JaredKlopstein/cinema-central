import React from 'react'
import './Preview.css'
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



function Preview({title,plot,image}) {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  return (
    <div className='container'
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
        <div className="overlay"></div>
        <div className="item__info">
            <h1 className='item__title'>{title}</h1>
            <p className="item__plot">{plot?.slice(0,149)}
            <span id="more">{plot?.slice(150,plot.length)}</span>
            <span id="dots">...</span>
            <button onClick={myFunction} id="myBtn">Read more</button>
            </p>
        <div className="itemButtons">
            <div className="itemButton">
            <Button variant="contained" startIcon={<PlayArrowIcon />}>
                Play
                </Button>
            </div>
            <div className="itemButton">
            <Button variant="contained" startIcon={<InfoOutlinedIcon />}>
                More Info
                </Button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Preview