module.exports = {
	name: "Effct Immunity",
	category: "Status Effects",
	description: "Makes you immune to Effects",
	options: [{
		title: "Effect",
		question: "What Effect should the Player be immune to?",
		placeholder: "{effect}",
    example: "weakness , speed , etc."
	}],
	json: `{
    "type": "origins:effect_immunity",
    "effects": [
        "minecraft:{effect}"
    ]
  }`
}
