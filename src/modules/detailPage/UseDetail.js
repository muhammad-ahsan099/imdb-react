import { useEffect, useState } from "react"
import UseWindowDimensions from "../../common/customHooks/UseWindowDimensions"


export const UseDetail = () => {

    const [dropDown, setDropDown] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const [openRatingModal, setOpenRatingModal] = useState(false)
    const [openListModal, setOpenListModal] = useState(false)
    const width = UseWindowDimensions()

    useEffect(() => {
        if (width.width > 600) {
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }, [width])
    return [
        {
            dropDown, setDropDown,
            drawerOpen, setDrawerOpen,
            rating, setRating,
            openRatingModal, setOpenRatingModal,
            openListModal, setOpenListModal,
        }
    ]
}