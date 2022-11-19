import React from 'react'
import ComingSoon from '../../common/comingSoon/ComingSoon'
import DrawerComponent from '../../common/drawer/Drawer'
import TopBoxOffice from '../../common/topBoxOffice/TopBoxOffice'
import ExclusiveVideos from '../../components/exclusiveVideos/ExclusiveVideos'
import MoreToExplore from '../../components/moreToExplore/MoreToExplore'
import MoviesAndStreaming from '../../components/moviesAndStreaming/MoviesAndStreaming'
import ToWatch from '../../components/toWatch/ToWatch'
import { useStyles } from './LandingPageStyle'
import Swiper from './swiper/Swiper'
import { UseLandingPage } from './UseLandingPage'
export default function LandingPage() {
  const classes = useStyles()
  const [
    {
      loading,
      homeMoviesTop,
      topPickMovies,
      fanFavoritesMovies,
      recentReleasedMovies,
      recentUpcomingMovies,
      primeVideos,
      celebritiesBirthday,
    }
  ] = UseLandingPage()
  return (
    <div>
      <Swiper homeMoviesTop={homeMoviesTop} />
      <ToWatch
        topPickMovies={topPickMovies}
        fanFavoritesMovies={fanFavoritesMovies}
        
      />
      <ExclusiveVideos />
      <MoviesAndStreaming
        primeVideos={primeVideos}
        recentReleasedMovies={recentReleasedMovies}
      />
      <TopBoxOffice />
      <ComingSoon
        recentUpcomingMovies={recentUpcomingMovies}
      />
      <MoreToExplore
        celebritiesBirthday={celebritiesBirthday}
      />
    </div>

  )
}
