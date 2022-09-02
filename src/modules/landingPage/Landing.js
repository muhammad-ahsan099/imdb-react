import React from 'react'
import ComingSoon from '../../common/comingSoon/ComingSoon'
import DrawerComponent from '../../common/drawer/Drawer'
import TopBoxOffice from '../../common/topBoxOffice/TopBoxOffice'
import ExclusiveVideos from '../../components/exclusiveVideos/ExclusiveVideos'
import MoreToExplore from '../../components/moreToExplore/MoreToExplore'
import MoviesAndStreaming from '../../components/moviesAndStreaming/MoviesAndStreaming'
import ToWatch from '../../components/toWatch/ToWatch'
import { useStyles } from './LandingStyle'
import Swiper from './swiper/Swiper'
export default function Landing() {

  const classes = useStyles()
  return (
    <div>
      <Swiper />
      <ToWatch />
      <ExclusiveVideos />
      <MoviesAndStreaming />
      <TopBoxOffice />
      <ComingSoon />
      <MoreToExplore />

    </div>

  )
}
