import React from 'react';

import "./css/Flights.css";

import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

import { blue, grey } from '@mui/material/colors';

const Flights = () => {
  return (
    <div className='flights'>
      <div className='container f-center'>
        <div className='flights__type'>
          <div className='flights__type-airplane f-center'>
            <FlightIcon sx={{color: blue[600]}}/>
            <small>Flights</small>
          </div>
          <div className='flights__type-hotel f-center'>
            <HotelIcon sx={{color: blue[600]}}/>
            <small>Hotel</small>
          </div>
        </div>
        <div className='flights__time'>
          <div className='flights__time-where'>
            <div className='flights__time-where_done'>
              <div>
                <small>Living From</small>
                <small className='place'>Dubai</small>
              </div>
              <div className='airplane d-grid'>
                <FlightIcon sx={{color: grey[500]}}/>
              </div>
              <div>
                <small>Going to</small>
                <small className='place'>New York</small>
              </div>
            </div>
            <div className='flights__time-where_prepare'>
              <div>
                <div>
                  <small>Leave</small>
                  <FlightTakeoffIcon sx={{color: blue[600]}}/>
                </div>
                <small className='place'>23 Jan, Sat</small>
              </div>
              <div className='calendar d-grid'>
                <CalendarMonthIcon sx={{color: grey[500]}}/>
              </div>
              <div>
                <div>
                  <small>Return</small>
                  <FlightLandIcon sx={{color: blue[600]}}/>
                </div>
                <small className='place'>14 Jan, Thu</small>
              </div>
            </div>
          </div>
          <div className='flights__time-search'>
            <SearchIcon sx={{color: grey[50], fontSize: "64px"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flights