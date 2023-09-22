import { AccessTime, LocalOffer, Star, WatchLater } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
interface IProps {
  imgSrc: string;
  discount: number;
  foodName?: string;
  expireDate: number | string;
  featured?: boolean;
  featureImg?: string;
  featureRes?: string;
  star?: number;
}

const DiscountInfo = ({
  imgSrc,
  discount,
  foodName,
  expireDate,
  featured = false,
  featureImg,
  featureRes,
  star,
}: IProps) => {
  return (
    <Stack gap={2}>
      <Box
        position="relative"
        sx={{
          "&>img": {
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "100%",
          },
        }}
      >
        <img src={imgSrc} alt={imgSrc} />
        {(!featured && (
          <Stack
            p={2}
            bgcolor="secondary.main"
            position="absolute"
            bottom={6}
            left={0}
            sx={{ borderBottomLeftRadius: 10, borderTopRightRadius: 10 }}
            flexDirection="row"
            alignItems="center"
          >
            <Typography fontWeight={700} color="white" fontSize={50}>
              {discount}
            </Typography>
            <Stack color="white">
              {" "}
              <Typography>%</Typography> <Typography>Off</Typography>
            </Stack>
          </Stack>
        )) || (
          <Stack
            position="absolute"
            top={10}
            left={10}
            flexDirection="row"
            gap={1}
            color="white"
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              borderRadius={1}
              px={1}
              bgcolor="primary.main"
              sx={{ "&>svg": { fontSize: 15 } }}
              gap={0.5}
            >
              <LocalOffer />
              <Typography fontWeight={700} fontSize={15}>
                {discount}% off
              </Typography>
            </Stack>
            <Stack
              flexDirection="row"
              alignItems="center"
              borderRadius={1}
              px={1}
              bgcolor="secondary.main"
              sx={{ "&>svg": { fontSize: 15 } }}
              gap={0.5}
            >
              <WatchLater />
              <Typography fontWeight={700} fontSize={15}>
                Fast
              </Typography>
            </Stack>
          </Stack>
        )}
      </Box>

      {!featured && (
        <Stack>
          <Typography fontWeight={700}>{foodName}</Typography>
        </Stack>
      )}

      {featured && (
        <Stack flexDirection="row" gap={1}>
          <img style={{ width: 50, height: 50 }} src={featureImg} />
          <Stack justifyContent="center">
            <Typography fontWeight={700}>{featureRes}</Typography>
            <Stack flexDirection="row" color="secondary.main" >
              <Star color="secondary" fontSize="small" />
              {star}
            </Stack>
          </Stack>
        </Stack>
      )}
      <Box
        color={
          expireDate.toString().includes("Now") ? "#79B93C" : "warning.main"
        }
        bgcolor={
          expireDate.toString().includes("Now") ? "success.main" : "#EEC4A3"
        }
        borderRadius={1}
        py={0.5}
        px={2}
        sx={{ width: "fit-content" }}
      >
        <Typography fontWeight={700}>
          {expireDate} {!featured ? "days remaning" : ""}
        </Typography>
      </Box>
    </Stack>
  );
};

export default DiscountInfo;
