module.exports = {
	name: "Launch",
	category: "Movement",
	description: "Launches the Player in the Air",
	options: [{
		title: "Cooldown",
		question: "How much Cooldown should the Ability have?",
		placeholder: "{cooldown}",
    example: "Is in Ticks, means 20 Ticks are 1 Second"
	},
  {
		title: "Height",
		question: "How high should the Player get Launched?",
		placeholder: "{height}",
    example: "2 is the Height of the Elytrian"
	},
  {
		title: "Key",
		question: "What Key to activate?",
		placeholder: "{key}",
    example: "primary , secondary"
	}],
	json: `{
    "type": "origins:launch",
    "cooldown": {cooldown},
    "hud_render": {
        "bar_index": 4
    },    "speed": {height},
    "key": {
        "key": "key.origins.{key}_active",
        "continuous": true
    }
  }`
}
