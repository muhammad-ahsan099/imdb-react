import React from 'react'
import EditorPicks from './swiper/Swiper';
import BornToday from '../../common/bornToday/BornToday';
import TopNews from '../../common/topNews/TopNews';
import RecentlyReviews from '../../common/recentlyReviews/RecentlyReviees';

export default function MoreToExplore() {
    return (
        <>
        {/* <Exclusive */}
        <EditorPicks />
        <BornToday />
        <TopNews />
        <RecentlyReviews />
        </>
    )
}
