import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

// import Button from '@mui/material/Button';
import Header from './header'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  padding: "100px 0 0 0",
  textAlign: 'center',
  border:'0',
  fontSize: 40,
  boxShadow:'unset',
  background:'#fff7f2'
}));


function Home() {

  const history = useHistory();


  const [result, setResult] = useState(0);

  function handleClick() {
    history.push(`/search/${result}`);
  }

  document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 13) { 
       handleClick()
    }
  }; 

  function changeSearch(e) {
    setResult(e.target.value)
  }

  return <section>
    <Header show={false}></Header>
    <Divider></Divider>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Search Trends</Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" item>
          <Grid item xs={8} >
          <Box sx={{ display: 'flex', alignItems: 'center',mt:10}}>
          <InputBase
              sx={{ ml: 1, flex: 1 ,border:'1px solid #e6e6e6',pl:2,borderRadius:1,fontSize:16,padding:'6px 10px'}}
              placeholder="Search for new products in 961K stores"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={changeSearch}
            />
            <IconButton onClick={handleClick} type="submit" sx={{ p: '10px',border:'1px solid #e6e6e6',borderRadius:'2px',ml:1,fontSize:12 ,width:80,height:45}} aria-label="search">
              <SearchIcon /> 
            </IconButton>
          </Box>

          </Grid>
        </Grid>
    </Box>

  </section>
}

//注入想要的state
function select(state) {
  return {
    // visibleTodos: state.HomeReducer
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Home);