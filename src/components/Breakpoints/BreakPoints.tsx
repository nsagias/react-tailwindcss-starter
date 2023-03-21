import { useEffect, useState } from "react";
import useWindowDimensions from "../../Utils/useWindowDimensions";


export default function BreakPoints() {


  const { width } = useWindowDimensions()
  return (
    <>{width}</>
  );
}