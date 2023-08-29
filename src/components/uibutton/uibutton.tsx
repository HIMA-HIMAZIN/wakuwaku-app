"use client";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Fab from '@mui/material/Fab';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export function BasicButtons() {
  return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="contained" href="#contained-buttons">Link</Button>
        </Stack>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
         defaultChecked
         sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
        <Fab disabled aria-label="like">
            <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />        
        </Fab>
    </div>
  );
}