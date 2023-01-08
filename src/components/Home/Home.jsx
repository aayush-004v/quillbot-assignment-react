import React from 'react'
import './HomeStyle.css'
import { Typography } from '@mui/material'
import Advantage from '../Advantage/Advantage';
import MembershipCard from '../MemberShipCard/MembershipCard';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <Typography
        variant="h4"
        mt="50px"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        Save time and write with confidence
      </Typography>
      <div className="btnSignUp">
        <button className="signUp-button btn btn-success">
          Upgrade to Quillbot Premium
        </button>
      </div>
      <Advantage/>
      <MembershipCard/>
      <Footer/>
    </div>
  )
}
