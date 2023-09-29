import { LocationOn } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";

interface IProps {
  id: number;
  imgSrc: string;
  name: string;
  location: string;
  price: number;
  isCart?: boolean;
}

const ItemsInfo = ({
  id,
  imgSrc,
  name,
  location,
  price,
  isCart = false,
}: IProps) => {
  const handleRemoveItem = async () => {
    
    if(confirm("Sure to remove this item from cart?")){

      try {
        await axios.delete(`http://localhost:3000/cart/${id}`);
        window.location.reload();
      } catch (error) {
        console.error('Error removing item:', error);
      }
    }else{
      return
    }
  };
  return (
    <Stack gap={1}>
      <Box sx={{ "&>img": { borderRadius: 8 } }}>
        <img src={imgSrc} />
      </Box>
      <Typography fontWeight={700}>{name}</Typography>
      <Stack flexDirection="row" color="primary.main">
        <LocationOn fontSize="medium" />
        <Typography>{location}</Typography>
      </Stack>
      <Typography fontWeight={700}>${price}</Typography>
      <Stack flexDirection="row" gap={10}>
        {!isCart && (
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", color: "white", maxWidth: 300 }}
            onClick={() =>
              axios.post("http://localhost:3000/cart", {
                id: id,
                img: imgSrc,
                itemName: name,
                location: location,
                price: price,
              }).then(()=>{
                alert("Succesfuly added to the cart!")
              }).catch((error)=>{
                console.error(error)
              })
            }
          >
            Order Now
          </Button>
        )}
        {isCart && (
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", color: "white", maxWidth: 300 }}
          >
            Order Now
          </Button>
        )}
        {isCart && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "capitalize", color: "white", maxWidth: 300 }}
            onClick={() => handleRemoveItem()}
          >
            Remove
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default ItemsInfo;
