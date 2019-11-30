import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

SimpleSelect = ()=> {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    alert(event.target.value)
  };

  return (
    <div>
        <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton/>
    <Typography variant="h6" color="inherit">Trans-Bit</Typography>
  </Toolbar>
</AppBar>
        <center>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Map Style
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={function hello(event){
            alert(event.target.value)
            this.props.handlemapstyle(event.target.value)
          }}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Vanilla</em>
          </MenuItem>
          <MenuItem value={'vanilla'}>Vanilla</MenuItem>
          <MenuItem value={'dracula'}>Dracula</MenuItem>
          <MenuItem value={'custstyle1'}>Custom Style 1</MenuItem>
          <MenuItem value={'custstyle2'}>Custom Style 2</MenuItem>
        </Select>
        <FormHelperText>Select any one map style</FormHelperText>
      </FormControl>
     
    
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={function hello(event){
            alert(event.target.value)
            this.props.handlecategory(event.target.value)
          }}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'senior'}>Senior Citizen</MenuItem>
          <MenuItem value={'female'}>Female Sensitive</MenuItem>
          <MenuItem value={'disabled'}>Differentially abled</MenuItem>
          <MenuItem value={'child'}>Child Sensitive</MenuItem>
        </Select>
        <FormHelperText>Select category for better service</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={function hello(event){
          alert(event.target.value)
          this.props.handlemark(event.target.value)
        }} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Mark
          </MenuItem>
          <MenuItem value={'poly'}>Block Polygon Regions</MenuItem>
          <MenuItem value={'ward'}>Wards</MenuItem>
          <MenuItem value={'route'}>Route</MenuItem>
          <MenuItem value={'heat'}>Heatmaps</MenuItem>
          <MenuItem value={'fatal'}>Fatal Spots</MenuItem>
          <MenuItem value={'dens'}>Traffic Density</MenuItem>
          <MenuItem value={'sig'}>Signals</MenuItem>
          <MenuItem value={'net'}>Road Networks</MenuItem>
          <MenuItem value={'crime'}>Crime polygons</MenuItem>
          <MenuItem value={'acci'}>Accident polygons</MenuItem>
        </Select>
        <FormHelperText>Select a category for better service</FormHelperText>
      </FormControl>   
      </center>     
    </div>
  );
}