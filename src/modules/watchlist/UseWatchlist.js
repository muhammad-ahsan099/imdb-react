import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const UseWishlist = () => {
    let userProfile = useSelector(state => state.AuthReducer.userProfile);
    userProfile = userProfile?.user_wishlist
    return [
        {
            userProfile,
        }
    ]
}