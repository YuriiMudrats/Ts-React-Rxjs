import * as React from "react";
import "./App.css";

import axios from "axios";
import { Button } from "./component/button";
import { UserList } from "./component/usersList";

// import o from "rxjs/Rx";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.AddUsers = this.AddUsers.bind(this);
    this.state = { usersList: null };
  }
  public async AddUsers() {
    try {
      const data: any = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({ usersList: data });
    } catch (error) {
      alert(error);
    }
  }

  public render(): JSX.Element {
    const { usersList } = this.state;
    return (
      <div className="App">
        <Button name="Add users" addSchemas={this.AddUsers} />
        {usersList?<UserList users={usersList} />:null}
      </div>
    );
  }
}

export default App;
