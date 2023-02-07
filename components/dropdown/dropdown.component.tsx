import React from "react";

import { LinkDropdown } from "../../interfaces/link.interface";
import { NavbarItem, NavbarLink } from "../header/header.style";

import { NavbarLinkDropdownWrapper } from "./dropdown.style";

interface DropdownProps {
  id: number;
  links: LinkDropdown;
  children?: React.ReactNode;
  windowWidth: number;
}

interface State {
  active: boolean;
}

class DropdownComponent extends React.Component<DropdownProps, State> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleClassOnEnter = (): void => {
    this.setState({ active: true });
  };

  toggleClassOnLeave = (): void => {
    this.setState({ active: false });
  };

  render() {
    if (this.props.windowWidth > 1024) {
      return (
        <NavbarItem
          key={this.props.links.text}
          onMouseLeave={this.toggleClassOnLeave}
          onMouseEnter={this.toggleClassOnEnter}
        >
          <span style={{ fontWeight: "600", cursor: "pointer", fontSize: "16px"}}>
            {this.props.links.text}
          </span>
          <NavbarLinkDropdownWrapper isActive={this.state.active} key={"drodown"}>
            {this.props.links.links.map((link: any) => (
              <NavbarLink href={link.url} key={link.url}>{link.text}</NavbarLink>
            ))}
          </NavbarLinkDropdownWrapper>
        </NavbarItem>
      );
    } else {
      return (
        <>
          {this.props.links.links.map((link: any, idx: number) => (
            <NavbarItem key={idx}>
              <NavbarLink href={link.url}>{link.text}</NavbarLink>
            </NavbarItem>
          ))}
        </>
      );
    }
  }
}

export default DropdownComponent;
