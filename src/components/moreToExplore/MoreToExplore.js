import React from 'react'
import EditorPicks from './swiper/Swiper';
import BornToday from '../../common/bornToday/BornToday';
import TopNews from '../../common/topNews/TopNews';
import { UseMoreToExplore } from './UseMoreToExplore';

export default function MoreToExplore(props) {
    const [
        {
            editorPicks,
        }
    ] = UseMoreToExplore()
    const {celebritiesBirthday} = props;
    return (
        <>
        <EditorPicks editorPicks={editorPicks} />
        <BornToday celebritiesBirthday={celebritiesBirthday} />
        <TopNews />
        </>
    )
}
