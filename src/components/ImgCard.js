import React, {useState} from 'react';





export default function ImgCard({imgURL,imgTitle,explanation}) {
    // for toggling info content
  const [showContent, setShowContent] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setShowContent(!showContent);
  };
    if(showContent) {
        return (
            <div className = "img-card">
                <Image src = {imgURL} alt = "nasa image of day" />
                <h2>{imgTitle}</h2>
                <br></br>
                <Button type="primary" onClick={toggleMode}>Show less info</Button>
            </div>
        )
    }
    else {
        return (
            <div className = "img-card">
                <Image src = {imgURL} alt = "nasa image of day" />
                <h2>{imgTitle}</h2>
                <br></br>
                <Button type="primary" onClick={toggleMode}>Show more info</Button>
            </div>
        )
    }
}