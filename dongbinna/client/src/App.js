import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper"; //외부를 감싸기 위해여 사용
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080, //테이블의 크기
  },
});

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };
  /*
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "나동빈",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },

  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "나동빈",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },

  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "나동빈",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
];*/

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
                  return (
                    <Customer
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              : ""}
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

/*
                <Customer
                  id={customers[0].id}
                  image={customers[0].image}
                  name={customers[0].name}
                  birthday={customers[0].birthday}
                  gender={customers[0].gender}
                  job={customers[0].job}
                />

                <Customer
                  id={customers[1].id}
                  image={customers[1].image}
                  name={customers[1].name}
                  birthday={customers[1].birthday}
                  gender={customers[1].gender}
                  job={customers[1].job}
                />

                <Customer
                  id={customers[2].id}
                  image={customers[2].image}
                  name={customers[2].name}
                  birthday={customers[2].birthday}
                  gender={customers[2].gender}
                  job={customers[2].job}
                /> 
                */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withStyles(styles)(App); //가로길이가 1080픽셀이 작아지면 스크롤이 생김
