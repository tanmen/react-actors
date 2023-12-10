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
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'  | 'ref' | 'className'>

export const SearchDropdown: FC<SearchDropdownProps> = forwardRef<HTMLInputElement, SearchDropdownProps>(
  ({items, onTextChange,className,value, ...props}, ref) => {
    const [_value, setValue] = useState<string | readonly string[] | number | undefined>(value);
    const [open, setOpen] = useState(false);
    return <Dropdown className={className} open={open}
                     items={items.map(({key, body}) => <div key={key} onClick={() => setValue(key)}>{body}</div>)}>
      <input ref={ref} type="hidden" value={_value} {...props}/>
      <Input className="react-actors-search-dropdown-input" onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
             onChange={e => onTextChange?.(e.target.value)}/>
    </Dropdown>;
  });
