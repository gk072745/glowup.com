import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Image } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";


const images = [
  "https://images-static.nykaa.com/uploads/67293912-4458-4335-8b34-65db722d91db.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/722e2d8c-476e-4993-be69-a505143ceca2.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a908e8ad-3bd3-4d87-bca2-2fca7c54bf98.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/04d0c1d0-3bd5-49cd-8d38-655a9f3c003b.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a294f8d2-8bb6-4912-9ac9-896cfa2685dc.jpg?tr=w-2400,cm-pad_resize",
];


const CarouselSlider = () => {
  const navigate=useNavigate("/product")
const link=()=>{
 return navigate
}


  return (
    <Carousel autoPlay infiniteLoop stopOnHover showIndicators={false}>
      {images.map((image,i) => (
        <Box key={image}>
          <Image src={image} alt='' width="" heigth="" onClick={link} />
        </Box>
      ))}
    </Carousel>
  );
};
export default CarouselSlider;