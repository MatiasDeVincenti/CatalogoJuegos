/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4046807239")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number91800107",
    "max": null,
    "min": null,
    "name": "originalPrice",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4046807239")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number91800107",
    "max": null,
    "min": null,
    "name": "original_price",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
