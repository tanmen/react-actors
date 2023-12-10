import {Story} from "@storybook/react";
import {useState} from "react";
import {Button} from "../../buttons";
import {Dropdown, DropdownProps} from "./Dropdown";

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  }
};

const Template: Story = (args: DropdownProps) => {
  const [open, setOpen] = useState();
  return <Dropdown open={open} {...args}><Button onClick={() => setOpen(!open)}>Open</Button></Dropdown>;
};

export const Normal = Template.bind({});
Normal.args = {
  items: [
    'Test',
    'Test',
    'Test',
    'Test',
    'Test',
    'Test',
    'Test',
  ]
}
