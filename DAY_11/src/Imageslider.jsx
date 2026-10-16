import React, { useEffect, useState } from 'react'

const Imageslider = () => {

    const [index, setindex] = useState(0);

    const Image = ["https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=","https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg","https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
    ]
    useEffect(() =>{
        const interval = setInterval(()=>{
            setindex((prevIndex) =>(prevIndex+1)%Image.length)
        },1000);
        return ()=> clearInterval(interval);
    },[])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Slider</h1>
      <img
      src={Image[index]}
      alt="img-here"
      style={{ height: "200px", width: "300px" }}
    />
    </div>
  )
}

export default Imageslider
