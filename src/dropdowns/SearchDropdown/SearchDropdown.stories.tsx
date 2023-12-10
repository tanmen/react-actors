import {Story} from "@storybook/react";
import {useState} from "react";
import {SearchDropdown, SearchDropdownProps} from "./SearchDropdown";

export default {
  title: 'SearchDropdown',
  component: SearchDropdown,
  parameters: {
    layout: 'centered'
  }
};

const Template: Story = ({items, ...args}: SearchDropdownProps) => {
  const [text, setText] = useState<string>();
  return <SearchDropdown {...args} items={items.filter(i => i.key.toLowerCase().includes(text))} onTextChange={t => setText(t)}>SearchDropdown</SearchDropdown>;
};

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {key: "Felix",body: "Felix"},
    {key: "Clement",body: "Clement"},
    {key: "Eugene",body: "Eugene"},
    {key: "Ringo",body: "Ringo"},
    {key: "Isaiah",body: "Isaiah"},
    {key: "Brayden",body: "Brayden"},
    {key: "Paul",body: "Paul"},
    {key: "Ansel",body: "Ansel"},
    {key: "Junior",body: "Junior"},
    {key: "Allan",body: "Allan"},
    {key: "Zechariah",body: "Zechariah"},
    {key: "Virgil",body: "Virgil"},
    {key: "Jim",body: "Jim"},
    {key: "Bret",body: "Bret"},
    {key: "Obadiah",body: "Obadiah"},
    {key: "Rod",body: "Rod"},
    {key: "Stevie",body: "Stevie"},
    {key: "Shannon",body: "Shannon"},
    {key: "Bubby",body: "Bubby"},
    {key: "Edmunds",body: "Edmunds"},
    {key: "Felix",body: "Felix"},
    {key: "Mohammed",body: "Mohammed"},
    {key: "Collin",body: "Collin"},
    {key: "Basil",body: "Basil"},
    {key: "Georgie",body: "Georgie"},
  ]
}
