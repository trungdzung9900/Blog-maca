import React from 'react'
import {Typography} from '@material-ui/core'
import userStyles from './style'
export default function Header(){
    const classes = userStyles();
    return (
        <Typography variant = "h4" align = "center" className = {classes.container}>
             Blog
        </Typography>
    )
}