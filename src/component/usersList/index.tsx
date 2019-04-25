import * as React from "react";

interface IUsersListProps {
  users?: any[];
}

export class UserList extends React.Component<IUsersListProps> {
  constructor(props: IUsersListProps) {
    super(props);
  }

  public render(): JSX.Element {
    console.log(this.props);
    const { users:{data} } :any= this.props;

    const usersInfo = data.map((user: any) => (
      <li key={user.id}>{user.name}</li>
    ));
    return <div>{usersInfo}</div>;
  }
}
