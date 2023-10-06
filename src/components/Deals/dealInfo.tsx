import { ChevronRight } from "@mui/icons-material";
import { Grid, Stack, Typography, Button } from "@mui/material";

interface IProps {
  imgSrc: string;
  name: string;
  subname: string;
  description : string,
  isRight? : boolean
}

const DealInfo = ({ imgSrc, name, subname,description, isRight=true }: IProps) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4) ",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      {
        isRight&& <> <Grid item md={4} xs={12} padding={0}>
        <Stack gap={10} padding={5}>
          <Stack gap={2}>
          <Typography fontSize={32} fontWeight={700}>
            {name}{" "}
            <span style={{ color: "orange" }}>{subname}</span>
          </Typography>
  
          <Typography fontSize={12}>
            {description}
          </Typography>
          </Stack>
          <Stack>
          <Button color="secondary" variant="contained" sx={{ color: "white" }}>
            Proceed to order <ChevronRight />
          </Button>
          </Stack>
        </Stack>
      </Grid>

      <Grid item md={8} xs={12}>
        <Stack sx={{"&>img":{borderBottomRightRadius: {md:"8px",xs:0},borderTopRightRadius:{md:"8px",xs:0}}}}>
          <img src={imgSrc} />
        </Stack>
      </Grid>
      </> || <>
      <Grid item md={8} xs={12}>
        <Stack sx={{"&>img":{borderBottomLeftRadius: {md:"8px",xs:0},borderTopLeftRadius:{md:"8px",xs:0}}}}>
          <img src={imgSrc} />
        </Stack>
        </Grid>
        <Grid item md={4} xs={12} padding={0}>
        <Stack gap={10} padding={5}>
          <Stack gap={2}>
          <Typography fontSize={32} fontWeight={700}>
            {name}{" "}
            <span style={{ color: "orange" }}>{subname}</span>
          </Typography>
  
          <Typography fontSize={12}>
            {description}
          </Typography>
          </Stack>
          <Stack>
          <Button color="secondary" variant="contained" sx={{ color: "white" }}>
            Proceed to order <ChevronRight />
          </Button>
          </Stack>
        </Stack>
      </Grid>

      </>
      }
    </Grid>
     
  );
};

export default DealInfo;
