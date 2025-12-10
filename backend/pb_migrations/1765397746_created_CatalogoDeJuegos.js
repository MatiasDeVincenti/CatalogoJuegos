/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1579384326",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2366146245",
        "max": 0,
        "min": 0,
        "name": "cover",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number3402113753",
        "max": null,
        "min": null,
        "name": "price",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "number3145888567",
        "max": null,
        "min": null,
        "name": "year",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "select2203071480",
        "maxSelect": 1,
        "name": "genre",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "RPG",
          "Acción",
          "Roguelike",
          "Carreras",
          "Simulación",
          "Aventura",
          "Metroidvania"
        ]
      },
      {
        "hidden": false,
        "id": "select1710984090",
        "maxSelect": 1,
        "name": "developer",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "CD Projekt Red",
          "Santa Monica Studio",
          "Rockstar Games",
          "FromSoftware",
          "Team Cherry",
          "Supergiant Games",
          "Bethesda",
          "Insomniac Games",
          "Nintendo",
          "Playground Games",
          "ConcernedApe"
        ]
      },
      {
        "hidden": false,
        "id": "number3632866850",
        "max": null,
        "min": null,
        "name": "rating",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_4046807239",
    "indexes": [],
    "listRule": null,
    "name": "CatalogoDeJuegos",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4046807239");

  return app.delete(collection);
})
