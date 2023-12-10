import {DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactNode, useState} from "react";
import {Input} from "../../inputs/Input";
import {Dropdown} from "../Dropdown/Dropdown";

export type SearchDropdownItem = {
  key: string
  body: ReactNode
}

export type SearchDropdownProps = {
  items: SearchDropdownItem[]
  onTextChange?: (text: string) => Promise<unknown> | unknown;
  className?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'value' | 'ref' | 'className'>

export const SearchDropdown: FC<SearchDropdownProps> = forwardRef<HTMLInputElement, SearchDropdownProps>(
  ({items, onTextChange,className, ...props}, ref) => {
    const [value, setValue] = useState<string>();
    const [open, setOpen] = useState(false);
    return <Dropdown open={open}
                     items={items.map(({key, body}) => <div key={key} onClick={() => setValue(key)}>{body}</div>)}>
      <input ref={ref} type="hidden" value={value} {...props}/>
      <Input className={className} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
             onChange={e => onTextChange?.(e.target.value)}/>
    </Dropdown>;
  });
