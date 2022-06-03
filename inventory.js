module.exports = {
    name: "Inventory",
    category: "Miscellaneous",
    description: "Gives the Player a Shulk-like Inventory",
    options: [{
            title: "Title",
            question: "What Name should the Inventory itself have ?",
            placeholder: "{title}"
        }, 
	{
            title: "Key",
            question: "What Key should the Inventory use ?",
            placeholder: "{key}",
            example: "primary , secondary"
        },
        {
            title: "Drops",
            question: "Should the Inventory drop on death ?",
            placeholder: "{drop}",
            example: "true , false"
        }
    ],
    json: `{
        "name": "{name}",
        "description": "{description}",
        "type": "origins:inventory",
          "title": "{title}",
          "drop_on_death": {drop},
            "key": {
              "key": "key.origins.{key}_active",
               "continuous": false
        }
    }`
}
