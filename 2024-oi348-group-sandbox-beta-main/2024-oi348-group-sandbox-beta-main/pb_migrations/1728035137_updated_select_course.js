/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13k3lvzhl4ns8gi")

  // remove
  collection.schema.removeField("tb1ra8oh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13k3lvzhl4ns8gi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tb1ra8oh",
    "name": "Course_Code",
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
