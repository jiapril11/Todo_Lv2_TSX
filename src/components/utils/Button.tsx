import React from "react";
import { css, styled } from "styled-components";

export enum StyleType {
  FORM_SUBMIT = "FORM_SUBMIT",
  DELETE = "DELETE",
  CHANGE = "CHANGE",
  LINK = "LINK",
}

interface ButtonProps {
  type?: "button" | "submit";
  children: React.ReactNode;
  styleType: StyleType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  type = "button",
  styleType,
  children,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton type={type} $styleType={styleType} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const formStyles = css`
  padding: 4px 10px;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
`;

const StyledButton = styled.button<{ $styleType: StyleType }>`
  ${(props) => {
    switch (props.$styleType) {
      case StyleType.FORM_SUBMIT:
        return css`
          ${formStyles}
          background: #00ac00;
          font-weight: 700;
          color: #fff;
        `;
      case StyleType.DELETE:
        return css`
          ${formStyles}
          background: #ff4d4d;
          color: #fff;
        `;
      case StyleType.CHANGE:
        return css`
          ${formStyles}
          background: #ffaa00;
          color: #fff;
        `;
      case StyleType.LINK:
        return css`
          ${formStyles}
          background: #2b90e8;
          color: #fff;
        `;
      default:
        return ``;
    }
  }}
`;
