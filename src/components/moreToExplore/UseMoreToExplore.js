import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const UseMoreToExplore = () => {

    const editorPicks = [
        {
            img: require('../../assets/images/cardImg26.jpg'),
            title: 'List',
            description: 'The Best Movies and Shows Coming in August',
        },
        {
            img: require('../../assets/images/cardImg27.jpg'),
            title: 'List',
            description: 'Everything New on Hulu in August',
        },
        {
            img: require('../../assets/images/cardImg28.jpg'),
            title: 'Vote now',
            description: 'Poll: Emmys 2022 — Outstanding Writing for a Drama Series',
        },
        {
            img: require('../../assets/images/cardImg29.jpg'),
            title: 'List',
            description: 'August 2022 TV and Streaming Premiere Dates',
        },
        {
            img: require('../../assets/images/cardImg30.jpg'),
            title: 'List',
            description: 'Everything New on Prime Video in August',
        },
        {
            img: require('../../assets/images/cardImg31.jpg'),
            title: 'List',
            description: 'Everything New on Hulu in August',
        },
        {
            img: require('../../assets/images/cardImg32.jpg'),
            title: 'List',
            description: `IMDb's 2022 Summer Movie Guide`,
        },
        {
            img: require('../../assets/images/cardImg33.jpg'),
            title: 'List',
            description: 'Everything New on HBO and HBO Max in August',
        },
        {
            img: require('../../assets/images/cardImg34.jpg'),
            title: 'List',
            description: 'Everything New on Prime Video in August',
        },
    ]





    return [
        {
            editorPicks,
        }
    ]
}
