import * as React from "react";
import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  IconButton,
  AppBar,
  Container,
  Toolbar,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import { lime, purple, cyan, red, green } from "@mui/material/colors";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Mode = ({ usetheme, setMode, mode, themecolor, setThemeColor }) => {
  const theme = usetheme();
  const handleAlignment = (event, newAlignment) => {
    setThemeColor(newAlignment);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette[themecolor].main,
          height: "1.5rem",
          width: "100%"
        }}
      />
      <AppBar
        position="static"
        sx={{ bgcolor: theme.palette[themecolor].light }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box>
              <ToggleButtonGroup
                exclusive
                onChange={handleAlignment}
                variant="contained"
                size="large"
                value={themecolor}
              >
                <ToggleButton
                  sx={{
                    bgcolor: red[500],
                    "&:hover": {
                      bgcolor: red[500] // Set the same bgcolor for hover state
                    },
                    "&.Mui-selected": {
                      bgcolor: red[500], // Set the bgcolor for selected state
                      border: "1px solid white" // Add a white border
                    }
                  }}
                  value="red"
                />
                <ToggleButton
                  sx={{
                    bgcolor: green[500],
                    "&:hover": {
                      bgcolor: green[500] // Set the same bgcolor for hover state
                    },
                    "&.Mui-selected": {
                      bgcolor: green[500], // Set the bgcolor for selected state
                      border: "1px solid white" // Add a white border
                    }
                  }}
                  value="green"
                />
                <ToggleButton
                  sx={{
                    bgcolor: lime[500],
                    "&:hover": {
                      bgcolor: lime[500] // Set the same bgcolor for hover state
                    },
                    "&.Mui-selected": {
                      bgcolor: lime[500], // Set the bgcolor for selected state
                      border: "1px solid white" // Add a white border
                    }
                  }}
                  value="lime"
                />
                <ToggleButton
                  sx={{
                    bgcolor: purple[500],
                    "&:hover": {
                      bgcolor: purple[500] // Set the same bgcolor for hover state
                    },
                    "&.Mui-selected": {
                      bgcolor: purple[500], // Set the bgcolor for selected state
                      border: "1px solid white" // Add a white border
                    }
                  }}
                  value="purple"
                />
                <ToggleButton
                  sx={{
                    bgcolor: cyan[500],
                    "&:hover": {
                      bgcolor: cyan[500] // Set the same bgcolor for hover state
                    },
                    "&.Mui-selected": {
                      bgcolor: cyan[500], // Set the bgcolor for selected state
                      border: "1px solid white" // Add a white border
                    }
                  }}
                  value="cyan"
                />
              </ToggleButtonGroup>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {theme.palette.mode} mode
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => setMode(!mode)}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon fontSize="large" />
                ) : (
                  <Brightness4Icon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card sx={{ maxWidth: 345, bgcolor: theme.palette[themecolor].dark }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                S
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://mui.com//static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Mode;
