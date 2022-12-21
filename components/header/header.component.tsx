import React, { MouseEventHandler, SyntheticEvent } from "react";
import {
  MainHeaderWrapper,
  Container,
  Navbar,
  NavbarLink,
  NavbarList,
  NavbarItem,
  CrossBox,
} from "./header.style";
import Image from "next/image";
import Link from "next/link";
import { LinkDropdown, LinkText } from "../../interfaces/link.interface";
import DropdownComponent from "../dropdown/dropdown.component";
import { GiHamburgerMenu } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";
import { ImCross } from "react-icons/im";

interface headerProps {
  links: Array<LinkText | LinkDropdown>;
}

interface headerState {
  width: number | undefined;
  scrollY: number;
  activeMenu: boolean;
}

export class headerComponent extends React.Component<headerProps, headerState> {
  links: Array<LinkText | LinkDropdown>
  constructor(props: headerProps) {
    super(props);

    this.state = {
      width: undefined,
      scrollY: 0,
      activeMenu: false,
    };

    this.links = this.addIdsToLinks(props.links)
    this.updateDimensions = this.updateDimensions.bind(this);
  }

   addIdsToLinks(
    links: Array<LinkText | LinkDropdown>
  ): Array<LinkText | LinkDropdown> {
    return links.map((link: any) => {
      if ("url" in link) {
        return {
          ...link,
          id: uuidv4,
        };
      } else {
        return {
          ...link,
          links: link.links.map((link: LinkText) => {
            return {
              ...link,
              id: uuidv4,
            };
          })
        }
        }
    });
  }



  updateDimensions() {
    if (typeof window !== "undefined") {
      const documentElement = document.documentElement,
        body = document.getElementsByTagName("body")[0],
        width = window.innerWidth || documentElement.clientWidth || body.clientWidth;
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height).toExponential(4) as any * 100

      this.setState({ width, scrollY: scrolled });
    }
  }

  componentDidMount(): void {
      this.updateDimensions()
      window.addEventListener("resize", this.updateDimensions, true);
      window.addEventListener("scroll", this.updateDimensions, true);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.updateDimensions);
  }

  render() {
    return (
      <MainHeaderWrapper scrollY={this.state.scrollY}>
        <Container className="container">
          <Link href="/" className="logo">
            <a>
            <Image
              alt="tworzenie-i-projektowanie-stron"
              src="/images/MediaHunters.png"
              width="125px"
              height="125px"
            />
            </a>
          </Link>
          <Navbar>
            <NavbarList activeMenu={this.state.activeMenu}>
              {(this.links as LinkText[]).map(
                (link: LinkText | LinkDropdown, idx: number) => {
                  if ("url" in link) {
                    return (
                      <NavbarItem
                        key={link.url}
                        onClick={() => this.setState({ activeMenu: false })}
                      >
                        <Link key={link.url} href={link.url}  passHref legacyBehavior>
                          <NavbarLink>  
                            {link.text}
                          </NavbarLink>
                        </Link>
                      </NavbarItem>
                    );
                  }

                  if (link.type === "dropdown") {
                    return (
                      <DropdownComponent
                        id={idx}
                        windowWidth={Number(this.state.width)}
                        links={link}
                        key={idx}
                      />
                    );
                  }
                }
              )}
              <Link href="#contact" key="#contact">
                <button className="btn btn--primary" key={"wycena"}>
                  Wycena
                </button>
              </Link>
            </NavbarList>
            <CrossBox
              visible={this.state.activeMenu}
              windowWidth={Number(this.state.width)}
              onClick={() => this.setState({ activeMenu: false })}
            >
              <ImCross />
            </CrossBox>
          </Navbar>
          {this.state.width && this.state.width < 1024 ? (
            <GiHamburgerMenu
              onClick={() =>
                this.setState({ activeMenu: !this.state.activeMenu })
              }
            />
          ) : (
            ""
          )}
        </Container>
      </MainHeaderWrapper>
    );
  }
}

export default headerComponent;
