import router from "next/router";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lighten } from "polished";
import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";

const DropdownWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 607px) {
    width: 100%;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: #333;
  cursor: pointer;
  width: 250px;
  color: #fff;
  @media screen and (max-width: 607px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #333;
  border-top: none;
  z-index: 1;
`;

type OptionProps = {
  bgColor: string;
};

const Option = styled.div<OptionProps>`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #f0f0f0;
    background-color: ${(props) => lighten(0.2, props.bgColor)};
  }
`;


type DropdownProps = {
  options: any[];
  onSelect: (value: string | undefined) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valueOption, setValueOption] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
 
  function navigateToCategory(category: string | undefined) {

    const queryParams = router.query

    const newQueryParams = { ...queryParams, category }
  
    // const queryStr = new URLSearchParams(newQueryParams).toString()
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);



  return (
      <DropdownWrapper ref={wrapperRef}>
        <DropdownButton onClick={toggleDropdown}>
          {valueOption !== "" ? valueOption : 'Wybierz kategorie'}
          <IconWrapper>
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              fontSize={"13px"}
              style={{ marginRight: "5px" }}
            />
          </IconWrapper>
        </DropdownButton>
        {isOpen && (
          <DropdownContent>
                          <Option
                key={undefined}
                bgColor="#333"
                onClick={() => {
                  setValueOption('Wszystko') 
                  setIsOpen(false)
                  navigateToCategory(undefined)
                  onSelect(undefined)
                }}
              >
                {'Wszystko'}
              </Option>
            {options.map((option) => (
              <Option
                key={option.name}
                bgColor="#333"
                onClick={() => {
                  setValueOption(option.text) 
                  setIsOpen(false)
                  navigateToCategory(option.name)
                  onSelect(option.name)
                }}
              >
                {option.text}
              </Option>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
  );
};

export default Dropdown;
