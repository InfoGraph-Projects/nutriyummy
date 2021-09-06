"use strict";
/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const fs = require("fs");
const express = require("express");

// Internal Resources
const Collection = require("../models/data-collection.js");
const bearerAuth = require("../auth/middleware/bearer.js");
const permissions = require("../auth/middleware/acl.js");

// Setup Router
const router = express.Router();

// Setup Models
const models = new Map();

// Checking the model
router.param("model", (req, res, next) => {
  const modelName = req.params.model;
  if (models.has(modelName)) {
    req.model = models.get(modelName);
    next();
  } else {
    const fileName = `${__dirname}/../models/${modelName}/model.js`;
    if (fs.existsSync(fileName)) {
      const model = require(fileName);
      models.set(modelName, new Collection(model));
      req.model = models.get(modelName);
      next();
    } else {
      next("Invalid Model");
    }
  }
});

// Model routes
router.get("/:model", bearerAuth, handleGetAll);
router.get("/:model/:id", bearerAuth, handleGetOne);
router.post("/:model", bearerAuth, permissions("create"), handleCreate);
router.put("/:model/:id", bearerAuth, permissions("update"), handleUpdate);
router.delete("/:model/:id", bearerAuth, permissions("delete"), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id);
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;