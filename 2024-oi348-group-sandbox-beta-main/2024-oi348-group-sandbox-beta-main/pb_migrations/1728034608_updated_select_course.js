/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13k3lvzhl4ns8gi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tb1ra8oh",
    "name": "course_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13k3lvzhl4ns8gi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tb1ra8oh",
    "name": "course_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
