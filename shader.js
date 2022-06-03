module.exports = {
	name: "Shader",
	category: "Player",
	description: "Apply a post-processing shader to the Player",
	options: [{
		title: "Shader",
		question: "What Shader should be used?",
		placeholder: "{shader}",
    example: "Here are the Shaders: shorturl.at/nzKX4"
	}],
	json: `{
    "type": "origins:shader",
    "shader": "minecraft:shaders/post/{shader}.json"
    }`
}
