module.exports = {
    name: "Portable Crafter",
    category: "Miscellaneous",
    description: "Open a Crafting Table without ever making one. [{key}]",
    options: [
        {
            title: "Key",
            question: "What Key should activate the power?",
            placeholder: "{key}",
            example: "primary, secondary",
        },
    ],
    json: `{
    "name":"{name}",
    "description":"{description}",
    "type": "origins:active_self",
    "entity_action": {
        "type": "origins:crafting_table"
    },
    "cooldown": 1,
    "hud_render": {
        "should_render": false
    },
    "key": {
        "key": "key.origins.{key}_active"
    }
}`
}
