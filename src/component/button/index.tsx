import * as React from "react";

interface IButtonProps {
  name: string;
  addSchemas: () => void;
}

export class Button extends React.Component<IButtonProps> {
  constructor(props: IButtonProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const { name, addSchemas } = this.props;
    return <button onClick={addSchemas}>{name}</button>;
  }
}
