import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, IconButton, Menu, MenuItem } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;



const Import = (props) => {
    // fill out this component
    console.log(props)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleRemove = () => {
        props.removeMake()
        setAnchorEl(null)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const num = props.makes.length

    return (
        <Container>
            <Button
                variant="contained"
                color="primary"
                onClick={props.fetchMakes}
                >
                Import
            </Button>

                <h2>{`Count: ${num}`} </h2>
                
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <IconButton
                                        key={index}
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )    
                    })}
                </TableBody>
            </Table>
            
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
            >
                
                <MenuItem key={1} onClick={(handleRemove)}>
                    Delete
                </MenuItem>
                <MenuItem key={2} onClick={(handleClose)}>
                    Edit
                </MenuItem>
                
            </Menu>
        
        </Container>
    )
}

export default Import