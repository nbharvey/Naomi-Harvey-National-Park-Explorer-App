import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

interface BasicMenuProps {
    label: string;
    options: number[] | String[];
    onSelect?: (option: string) => void;
  }

export function BasicMenu({ label, options, onSelect }: BasicMenuProps) {
  return (
    <Menu>
      <MenuHandler>
        <Button className="font-NaomiFont2 font-bold bg-auburn">{label}</Button>
      </MenuHandler>
          <MenuList>
              {options.map((option) => (
                <MenuItem key={option} onClick={() => onSelect && onSelect(option)}>
                  {option}
                </MenuItem>
              ))}
          </MenuList>
    </Menu>
  );
}