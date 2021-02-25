import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Table1 from './table1';
import Table2 from './table2';
import Table3 from './table3';
import Table4 from './table4';
import Table5 from './table5';
import Table6 from './table6';
import Table7 from './table7';
import Table8 from './table8';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Select Event"  {...a11yProps(0)} />
          <Tab label="DeepLearning_IITKGP"  {...a11yProps(1)} />
          <Tab label="Item Two"  {...a11yProps(2)} />
          <Tab label="Item Three"{...a11yProps(3)} />
          <Tab label="Item Four" {...a11yProps(4)} />
          <Tab label="Item Five" {...a11yProps(5)} />
          <Tab label="Item Six" {...a11yProps(6)} />
          <Tab label="Item Seven" {...a11yProps(7)} />
          <Tab label="Item Eight" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Kindly select the required event
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table1 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table2 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Table3 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Table4 />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Table5 />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Table6 />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Table7 />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Table8 />
      </TabPanel>
    </div>
  );
}
