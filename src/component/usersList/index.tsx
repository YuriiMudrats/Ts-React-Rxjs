import * as React from "react";

interface IUsersListProps {
  users?: any[];
}

export class UsetList extends React.Component<IUsersListProps> {
  constructor(props: IUsersListProps) {
    super(props);
  }

  public render() {
    const { users } = this.props;

    const usersInfo: any = users.map((user: any) => (
      <li key={user.id}>{user.name}</li>
    ));
    return <div>{usersInfo}</div>;
  }
}
