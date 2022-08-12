import React from 'react'
import classNames from 'classnames'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
   
    return (
        <Card className={classNames(className)}>
            <CardHeader
                avatar={
                    <Avatar  aria-label="recipe" src={avatar}>
                        R
                    </Avatar>
                }
                title={`${name} ${lastname}`}
                subheader={email}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CustomerCard