"use client";

import { ButtonProps } from "@/types";
import Image from "next/image"

const Button = ({title, containerStyles, handleClick, btnType}: ButtonProps) => {
  return (
    <button
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
  )
}

export default Button