"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;

var _config = _interopRequireDefault(require("../config"));

var _promiseMysql = _interopRequireDefault(require("promise-mysql"));

var dbSettings = {
  host: _config["default"].dbHost,
  user: _config["default"].dbuser,
  password: _config["default"].dbPassword,
  database: _config["default"].dbDatabase
};

var getConnection = function getConnection() {
  var connetion = null;

  try {
    connetion = _promiseMysql["default"].createConnection(dbSettings);
  } catch (e) {
    console.error("error de conexion a la base de datos");
  }

  return connetion;
};

exports.getConnection = getConnection;