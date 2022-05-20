import React, {Component} from "react";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import {withStyles} from "@material-ui/core/styles";

import IncidentContext from "../../context/IncidentContext";

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        boxShadow: "none",
    },
});

class ChatScreen extends Component {
    static contextType = IncidentContext;
    state = {
        isLoggedIn: false,
        messages: [],
        value: "",
        name: "",
        room: this.context.incident,
    };

    client = new W3CWebSocket("ws://127.0.0.1:8000/ws/chat/" + 123 + "/");

    onButtonClicked = (e) => {
        this.client.send(
            JSON.stringify({
                type: "message",
                message: this.state.value,
                name: this.state.name,
            })
        );
        this.state.value = "";
        e.preventDefault();
    };

    componentDidMount() {
        console.log(this.context.incident);

        this.client.onopen = () => {
            console.log("WebSocket Client Connected");
        };
        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log("got reply! ", dataFromServer.type);
            if (dataFromServer) {
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            msg: dataFromServer.message,
                            name: dataFromServer.name,
                        },
                    ],
                }));
            }
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <Container component="main" maxWidth="xs">
                {this.state.isLoggedIn ? (
                    <div style={{marginTop: 50}}>
                        Room Name: {this.state.room}
                        <Paper
                            style={{
                                height: 500,
                                maxHeight: 500,
                                overflow: "auto",
                                boxShadow: "none",
                            }}
                        >
                            {this.state.messages.map((message) => (
                                <>
                                    <Card className={classes.root}>
                                        <CardHeader
                                            avatar={<Avatar className={classes.avatar}>D</Avatar>}
                                            title={message.name}
                                            subheader={message.msg}
                                        />
                                    </Card>
                                </>
                            ))}
                        </Paper>
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={this.onButtonClicked}
                        >
                            <TextField
                                id="outlined-helperText"
                                label="Make a comment"
                                defaultValue="Default Value"
                                variant="outlined"
                                value={this.state.value}
                                fullWidth
                                onChange={(e) => {
                                    this.setState({value: e.target.value});
                                    this.value = this.state.value;
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Start Chatting
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Immediate Response
                            </Typography>
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={(value) => this.setState({isLoggedIn: true})}
                            >
                                {/* <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Chatroom Name"
                  name="Chatroom Name"
                  autoFocus
                  value={this.state.room}
                  onChange={(e) => {
                    this.setState({ room: e.target.value });
                    this.value = this.state.room;
                  }}
                /> */}
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="Username"
                                    label="Username"
                                    type="Username"
                                    id="Username"
                                    value={this.state.name}
                                    onChange={(e) => {
                                        this.setState({name: e.target.value});
                                        this.value = this.state.name;
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Start Chatting
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </Container>
        );
    }
}

export default withStyles(useStyles)(ChatScreen);

