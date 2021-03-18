import React from "react";
import { useOverrides, StackItem, Formspree, Menu, GoogleMap, Section, SocialMedia, Stack } from "@quarkly/components";
import { Button, Text, Hr, Icon, Image, Input, Link, List, Box } from "@quarkly/widgets";
import EmbedJS from "./EmbedJS";
import EmbedHTML from "./EmbedHTML";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"input1": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input2": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button2": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"menu1": {
		"kind": "Menu",
		"props": {}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"embedJs": {
		"kind": "EmbedJS",
		"props": {}
	},
	"embedHtml": {
		"kind": "EmbedHTML",
		"props": {}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	}
};

const Todocompon = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Button {...override("button")} />
		<StackItem {...override("stackItem")}>
			<Text {...override("text")} />
		</StackItem>
		<Button {...override("button1")} />
		<Hr {...override("hr")} />
		<Icon {...override("icon")} />
		<Image {...override("image")} />
		<Input {...override("input")} />
		<Input {...override("input1")} />
		<Link {...override("link")} />
		<List {...override("list")}>
			<Text {...override("text1")} />
		</List>
		<Text {...override("text2")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input2")} />
			<Button {...override("button2")} />
		</Formspree>
		<Menu {...override("menu")} />
		<GoogleMap {...override("googleMap")} />
		<Menu {...override("menu1")} />
		<Section {...override("section")}>
			<EmbedJS {...override("embedJs")} />
		</Section>
		<EmbedHTML {...override("embedHtml")} />
		<SocialMedia {...override("socialMedia")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				{"        "}
				<Text {...override("text4")} />
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Box>;
};

Object.assign(Todocompon, { ...Box,
	defaultProps,
	overrides
});
export default Todocompon;