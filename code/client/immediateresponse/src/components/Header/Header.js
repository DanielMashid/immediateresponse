import React from 'react'
import {
    AppBar,
    Typography,
    Box,
    IconButton,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Tooltip,
    Container,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Modal} from "../Modal/modal";
import './Header.css'


const pages = ['מסך ראשי', 'האירועים שלי', 'התנתק'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [modalClassName, setModalClass] = React.useState('modal-container')

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" sx={{bgcolor: "#b21800", color: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={()=> {
                                setModalClass('modal-container open')
                            }}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        className="app-header"
                        component="div"
                        sx={
                            {fontWeight: 'bold',flexGrow: 1, display: {xs: 'flex', md: 'none'}}
                        }
                    >
                        תגובה מיידית
                    </Typography>
                    <Box sx={{fontWeight: 'bold',flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
                <Modal modalClassName={modalClassName} setModalClass={setModalClass} />
            </Container>
        </AppBar>
    );

};

export default Header