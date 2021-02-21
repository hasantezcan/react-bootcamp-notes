import { memo } from "react";

function Title({text}) {
	console.log("Title component re-render");
	return <h3>{text}</h3>;
}

export default memo(Title);
