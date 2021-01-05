import React, { useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Collection2({ pics, loadData, pageNum }) {
    const classes = useStyles();
    const observer = useRef();
    const lastPicsRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
               
                loadData(138396, pageNum += 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [pageNum])
    useEffect(() => {
        loadData(138396, pageNum)
    }, []);
    return (
        <Grid container xs={12} lg={12} sm={3} spacing={3} justify="center" >
            {pics.map((pic, index) => {
                if (pics.length === index + 1) {
                    return (<Grid key={pic.id} ref={lastPicsRef} item component={Card} className={classes.root}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={pic.urls.raw}
                            title="Contemplative Reptile"
                        />
                    </Grid>)
                } else {
                    return (
                        <Grid key={pic.id} item component={Card} className={classes.root}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={pic.urls.raw}
                                title="Contemplative Reptile"
                            />
                        </Grid>
                    )
                }
            })}
        </Grid>
    );
}
