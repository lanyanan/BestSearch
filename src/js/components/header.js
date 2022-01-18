import React, { Component, useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux'
// import { useSelector } from 'redux/hooks'
import { changeDemoAction } from '../actions/homeAction';


export default function Head(props) {
  const history = useHistory();
  const params = useParams();

  const { show } = props;

  const [result, setResult] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    setResult(params.result);
    getSearchResult()
  }, []);

  function getSearchResult(){
    dispatch(changeDemoAction({
      url:'http://3.141.23.218:5000/interview/keyword_search',
      method:"post",
      query:{
        "login_token":"INTERVIEW_SIMPLY2021",
        "search_phrase":params.result
      }
    }))
  }

  function handleClick() {
    history.replace(`/search/${result}`);
    getSearchResult();
  }
  if(show){
    document.onkeydown = function (event) {
      var e = event || window.event;
      if (e && e.keyCode == 13) { 
         handleClick()
      }
    };
  }


  function changeSearch(e) {
    setResult(e.target.value)
  }
  return (
    <Box sx={{ flexGrow: 1, ml: 2, padding: '10px 0',fontSize:18 }}>
      <Grid container spacing={2} item>
          <Grid item xs={2} >
            <Box sx={{ display: 'flex',fontSize:30}}>
              <span style={{fontWeight:900}}>Best</span><span style={{fontWeight:100}}>Search</span>
            </Box>
          </Grid>
          {show?<Grid xs={10} container item>
            <Grid item xs={10} >
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <InputBase
                    sx={{  flex: 1 ,border:'1px solid #e6e6e6',pl:2,borderRadius:1,fontSize:16,padding:'3px 10px'}}
                    placeholder="Search for new products in 961K stores"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={changeSearch}
                    value={result}
                  />
                <IconButton onClick={handleClick} type="submit" sx={{ p: '10px',border:'1px solid #e6e6e6',borderRadius:'2px',ml:1,fontSize:12 ,width:80,height:40}} aria-label="search">
                  <SearchIcon /> 
                </IconButton>
              </Box>
            </Grid>
          </Grid>:null}

        </Grid>
    </Box>
  );
}
