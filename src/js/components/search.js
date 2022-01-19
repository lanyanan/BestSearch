import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from '@mui/material/Button';
import Header from './header'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import {
  Chart,
  AreaSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import {
  curveCatmullRom,
  area,
} from 'd3-shape';

import { Animation } from '@devexpress/dx-react-chart';

const Item = styled(Paper)(({ theme }) => ({
  padding: "100px 0 0 0",
  textAlign: 'center',
  border:'0',
  fontSize: 40,
  boxShadow:'unset',
  background:'#fff7f2'
}));

const Area = (props) => {
  const path = area()
    .x(({ arg }) => arg)
    .y1(({ val }) => val)
    .y0(({ startVal }) => startVal)
    .curve(curveCatmullRom);

  return <AreaSeries.Path {...props} path={path} />;
};

const titleStyle = { marginRight: '120px' };
const TitleText = props => <Title.Text {...props} style={titleStyle} />;
function Home(props) {
  const list = props.product_trends;
  return <section>
    <Header show={true}></Header>
    <Divider></Divider>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Related product trends</Item>
        </Grid>
      </Grid>
      <Grid  xs={12} justifyContent="center" item>
      {!list?(<Box
      sx={{
        display: 'flex',
        justifyContent:'center',
        mt:7,
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 230,
          height: 300,
        },
      }}
    ><Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    </Box>
    ):null}
      <Box
      sx={{
        display: 'flex',
        justifyContent:'center',
        mt:7,
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 230,
          height: 300,
        },
      }}
    >

      {list&&list.map(item=>{
        return <Paper key={item.name} elevation={3} >
        <span className="chart-name">{item.name}</span>
        <div className="chart-rate">Growth {item.growth}%</div>
        <section className="reset-chart" style={{height:200}}>
          <Chart
            data={item.search_msv}
            style={{ padding: '0' }}
          >
            <AreaSeries
              name="Mysteries"
              valueField="sv"
              argumentField="date"
              seriesComponent={Area}
            />

            <Animation />
          </Chart>
        </section>
        <section className="chart-footer">{new Date(item.search_msv[0].date).toDateString().split(" ")[1]+" "}{item.search_msv[0].date.substring(0,4)+" "}
        {new Date(item.search_msv[item.search_msv.length-1].date).toDateString().split(" ")[1]+" "}{item.search_msv[item.search_msv.length-1].date.substring(0,4)}
        </section>

      </Paper>
      })}
    </Box>
      <Paper>

      </Paper>
        </Grid>
    </Box>

  </section>
}

//注入想要的state
function select(state) {  
  return {
    product_trends: state.HomeReducer.product_trends
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Home);
