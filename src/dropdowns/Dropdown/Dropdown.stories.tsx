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
  const [open, setOpen] = useState<boolean>();
  return <Dropdown
    open={open}
    {...args}
    onBlur={() => setOpen(false)}
    onClick={() => {setOpen(false)}}
  ><Button onClick={() => setOpen(!open)}>Open</Button></Dropdown>;
};

export const Normal = Template.bind({});
Normal.args = {
  items: [
    <button style={{color: 'white'}} onClick={() => console.log('Shown')}>Shown</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Murt')}>Murt</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Burckhard')}>Burckhard</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Chenoweth')}>Chenoweth</button>,
    <button style={{color: 'white'}} onClick={() => console.log('New')}>New</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Cuthbertson')}>Cuthbertson</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Walthew')}>Walthew</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Mayberry')}>Mayberry</button>,
    <button style={{color: 'white'}} onClick={() => console.log('Towler')}>Towler</button>,
    <button style={{color: 'white'}} onClick={() => console.log('McCabe')}>McCabe</button>,
  ]
};
