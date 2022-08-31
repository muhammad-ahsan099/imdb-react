import React from 'react'
import DrawerComponent from '../../common/drawer/Drawer'
import ToWatch from '../../components/toWatch/ToWatch'
import { useStyles } from './LandingStyle'
import Swiper from './swiper/Swiper'
export default function Landing() {

  const classes = useStyles()
  return (
    <div>
      <DrawerComponent />
      <Swiper />
      <ToWatch />
    </div>

  )
}
