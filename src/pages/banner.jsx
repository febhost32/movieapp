import React, { useReducer } from "react";
import { Button, TextField, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const Banner = () => {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      contentTitle: "",
      contentDescription: "",
      textColour: "",
      imageUrl: "",
      scheduleStart: "",
      scheduleEnd: "",
      type: "",
      displaySequence: "",
      buttonText: "",
      buttonColour: "",
      buttonTarget: "",
      buttonUrl: "",
      productCode: "",
      promoCode: "",
      alternativeText: "",
      description: ""
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = formInput;

    axios.post("http://localhost:8090/mypage-admin/banner",data)
      .then(success => console.log("Success:", JSON.stringify(success)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();


    return (
      <div>

        <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Banner Image
        </Typography>
        <Typography component="p">Add new Banner Image</Typography>

        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

        <form onSubmit={handleSubmit}>
          <Grid
          container item>
          <TextField
            label="Title"
            id="margin-normal"
            name="contentTitle"
            defaultValue={formInput.contentTitle}
            className={classes.textField}
            helperText="e.g. BANNER TITLE"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Description"
            id="margin-normal"
            name="contentDescription"
            defaultValue={formInput.contentDescription}
            className={classes.textField}
            helperText="e.g. BANNER DESCRIPTION"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Text Colour"
            id="margin-normal"
            name="textColour"
            defaultValue={formInput.textColour}
            className={classes.textField}
            helperText="e.g. Blue"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Banner Image Name"
            id="margin-normal"
            name="imageUrl"
            defaultValue={formInput.imageUrl}
            className={classes.textField}
            helperText="e.g. goodboy.jpg"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Schedule Start"
            id="margin-normal"
            name="scheduleStart"
            defaultValue={formInput.scheduleStart}
            className={classes.textField}
            helperText="Enter Start Date"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Schedule End"
            id="margin-normal"
            name="scheduleEnd"
            defaultValue={formInput.scheduleEnd}
            className={classes.textField}
            helperText="Enter End Date"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Type of Banner"
            id="margin-normal"
            name="type"
            defaultValue={formInput.type}
            className={classes.textField}
            helperText="e.g. Personalized, General, Customized"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Display Sequence"
            id="margin-normal"
            name="displaySequence"
            defaultValue={formInput.displaySequence}
            className={classes.textField}
            helperText="1, 2, 3"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Button Text"
            id="margin-normal"
            name="buttonText"
            defaultValue={formInput.buttonText}
            className={classes.textField}
            helperText="e.g. FIND OUT MORE"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Button Colour"
            id="margin-normal"
            name="buttonColour"
            defaultValue={formInput.buttonColour}
            className={classes.textField}
            helperText="e.g. Blue"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Button Target"
            id="margin-normal"
            name="buttonTarget"
            defaultValue={formInput.buttonTarget}
            className={classes.textField}
            helperText="e.g. new-tab / same-window"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Button Link"
            id="margin-normal"
            name="buttonUrl"
            defaultValue={formInput.buttonUrl}
            className={classes.textField}
            helperText="e.g. aia.com"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Product Code"
            id="margin-normal"
            name="productCode"
            defaultValue={formInput.productCode}
            className={classes.textField}
            helperText="e.g. SK1"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <TextField
            label="Promo Code"
            id="margin-normal"
            name="promoCode"
            defaultValue={formInput.promoCode}
            className={classes.textField}
            helperText="e.g. PROMO123"
            onChange={handleInput}
          />
          </Grid>
          <Grid
          container item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit 
          </Button>
          </Grid>
        </form>
        </Grid>
</Paper>
        
      </div>
    );

}


export default Banner;