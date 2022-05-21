import React, { Component } from "react";
import { Link } from "react-router-dom";
// import apiServices from "../../Services/api/api";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import Header from "../../components/Header/Header";

import { withStyles } from "@material-ui/core/styles";

import IncidentContext from "../../context/IncidentContext";

//dictionary
// const translation = {
//   estuary_incident: "תקרית שפך",
//   fire_incident: "תקרית שריפה",
//   security_incident: "תקרית אירוע בטחוני",
//   materials_incident: "תקרית חומר מעשן",
//   safety_person_incident: "תקרית פגיעה בחיי אדם",
//   safety_property_incident: "תקרית פגיעה ברכוש",
// };
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
    value: " ",
    name: " ",
    // client: null,
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
    this.setState({ value: " " });
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

  // newChatRoom(room_name) {
  //   let response;
  //   apiServices.Chat_API.new_chat(room_name).then((r) => {
  //     response = r;
  //     console.log("xxx, ", response);
  //   });
  //   console.log("xxx, ", room_name);
  //   this.setState({
  //     client: new W3CWebSocket(
  //       "ws://127.0.0.1:8000/ws/chat/" + response.pk + "/"
  //     ),
  //   });
  // }

  render() {
    const { classes } = this.props;
    return (
      <CssBaseline>
        <Header title="צ'אט אונליין" />
        <div className="btn-end-container">
          <Link to="/sos">
            <button className="end-btn">סיום אירוע</button>
          </Link>
        </div>
        <div className="container">
          <div className="chat-container">
            <p>
              צ’אט זה נועד לניהול אירועי חירום. נא לשלוח הודעות קצרות וממוקדות
              על מנת שנוכל להימנע משיח מיותר
            </p>
          </div>
        </div>

        <Container component="main" maxWidth="xs" background="#E5E5E5">
          {this.state.isLoggedIn ? (
            <div style={{ marginTop: 50 }}>
              {/* Room Name: {translation[this.state.room]} */}
              <Paper
                style={{
                  height: 410,
                  maxHeight: 500,
                  overflow: "auto",
                  boxShadow: "none",
                  border: "1px solid",
                }}
              >
                {this.state.messages.map((message) => (
                  <>
                    <Card key={message.id} className={classes.root}>
                      <CardHeader
                        key={message.id}
                        avatar={<Avatar className={classes.avatar}></Avatar>}
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
                  label="Write your message"
                  variant="outlined"
                  value={this.state.value}
                  fullWidth
                  onChange={(e) => {
                    this.setState({ value: e.target.value });
                    this.value = this.state.value;
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Send
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  תגובה מיידית
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(value) => this.setState({ isLoggedIn: true })}
                >
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
                      this.setState({ name: e.target.value });
                      this.value = this.state.name;
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    // onClick={() => this.newChatRoom(this.state.room)}
                  >
                    Start Chatting
                  </Button>
                </form>
              </div>
            </div>
          )}
        </Container>
      </CssBaseline>
    );
  }
}

export default withStyles(useStyles)(ChatScreen);
