import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "400px",
	"height": "400px",
	"color": "#b61c1c",
	"background": "#b92828"
};
const overrides = {};

const Redvox = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Redvox, { ...Box,
	defaultProps,
	overrides
});
export default Redvox;