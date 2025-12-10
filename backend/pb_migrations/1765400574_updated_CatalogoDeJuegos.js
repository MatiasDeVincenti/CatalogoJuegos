/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4046807239")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select961728715",
    "maxSelect": 2,
    "name": "platforms",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "PC",
      "Xbox",
      "PlayStation",
      "Switch"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4046807239")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select961728715",
    "maxSelect": 2,
    "name": "platform",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "PC",
      "Xbox",
      "PlayStation",
      "Switch"
    ]
  }))

  return app.save(collection)
})
