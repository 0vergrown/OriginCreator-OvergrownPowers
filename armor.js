module.exports = {
	name: "Restrict Armor",
	category: "Combat",
	description: "Prevents you from equipping Armor over the said Value",
	options: [{
		title: "Helmet",
		question: "How much should the Value be for the Head Slot?",
		placeholder: "{head}"
	  },{
		title: "Chestplate",
		question: "How much should the Value be for the Chest Slot?",
		placeholder: "{chest}"
	},{
		title: "Leggings",
		question: "How much should the Value be for the Legs Slot?",
		placeholder: "{legs}"
	},{
		title: "Boots",
		question: "How much should the Value be for the Feet Slot?",
		placeholder: "{feet}"
	},{
		title: "Invert",
		question: "Should it invert/reverse?",
		placeholder: "{invert}",
    example: ">(Normal) , <(Invert)"
	}
           ],
	json: `{
        "name": "{name}",
        "description": "{description}",
        "type": "origins:restrict_armor",
    "head": {
        "type": "origins:armor_value",
        "comparison": "{invert}",
        "compare_to": {head}
    },
    "chest": {
        "type": "origins:armor_value",
        "comparison": "{invert}",
        "compare_to": {chest}
    },
    "legs": {
        "type": "origins:armor_value",
        "comparison": "{invert}",
        "compare_to": {legs}
    },
    "feet": {
        "type": "origins:armor_value",
        "comparison": "{invert}",
        "compare_to": {feet}
    }
    }`
}
