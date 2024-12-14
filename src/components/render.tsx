"use client";
import { sluggyHere } from "@/types/here";
import React, { useState } from "react";

export const Render = () => {
  const [pub] = useState<sluggyHere[]>([]);
  return <div>Render</div>;
};
