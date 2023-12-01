'use client'
import React from "react";
import {Input} from "@nextui-org/react";

const handleInput = (setter: any) => (event: any) => {
  setter(event.target.value)
}

export function InputField({ value, placeholder, setHook }: any) {
  return (
    <Input 
      size="md"
      className="mb-2"
      type={value}
      variant="bordered" 
      placeholder={placeholder} 
      labelPlacement="inside"
      onChange={handleInput(setHook)} 
      label={value}
    />)
}
  