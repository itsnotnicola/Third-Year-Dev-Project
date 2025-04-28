/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vc98pgfv95ecxl2",
    "created": "2024-10-04 08:35:30.105Z",
    "updated": "2024-10-04 08:35:30.105Z",
    "name": "Course_Catalogue",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i1wq2j69",
        "name": "Course_id",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "quwbix5g",
        "name": "Course_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gt4ciw5i",
        "name": "Course_faculty",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vc98pgfv95ecxl2");

  return dao.deleteCollection(collection);
})
