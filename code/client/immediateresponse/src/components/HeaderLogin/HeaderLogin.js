import {Typography} from "@mui/material";
import React from "react";
import {AppBar, Container, Toolbar} from "@material-ui/core";

const HeaderLoginFunc = () => {
    return (

        <AppBar position="static" sx={{bgcolor: "#b21800", color: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"

                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}

                    >
                        תגובה מיידית - התחברות
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default HeaderLoginFunc
