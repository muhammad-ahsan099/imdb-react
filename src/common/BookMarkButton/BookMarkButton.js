
import React, { useState } from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useStyles } from './BookMarkButtonStyle'

export default function BookMarkButton() {
    const classes = useStyles()
    const [check, setCheck] = useState(false)
    return (
        <div className={classes.BtnContainer} onClick={() => setCheck(!check)}>
            {
                check ?
                    <div className={classes.iconActiveContainer} />
                    :
                    <div className={classes.iconContainer}>
                        <AddOutlinedIcon className={classes.wishListIcon} />
                    </div>
            }
        </div>
    )
}
