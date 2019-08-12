/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(15);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(1);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(6);
var external_http_default = /*#__PURE__*/__webpack_require__.n(external_http_);

// EXTERNAL MODULE: external "morgan"
var external_morgan_ = __webpack_require__(7);
var external_morgan_default = /*#__PURE__*/__webpack_require__.n(external_morgan_);

// EXTERNAL MODULE: external "dotenv"
var external_dotenv_ = __webpack_require__(2);
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_);

// EXTERNAL MODULE: external "cookie-parser"
var external_cookie_parser_ = __webpack_require__(8);
var external_cookie_parser_default = /*#__PURE__*/__webpack_require__.n(external_cookie_parser_);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(0);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./src/db/index.js


external_dotenv_default.a.config();

var db_dbConnect = function dbConnect() {
  var connect = function connect() {
    external_mongoose_default.a.Promise = global.Promise;
    var db = external_mongoose_default.a.connection;
    db.on("error", console.error);
    db.once("open", function () {
      console.log("mongodb is connected");
    });
    external_mongoose_default.a.connect("mongodb://localhost:27017/scheduler", {
      useNewUrlParser: true
    });
  };

  connect();
  external_mongoose_default.a.connection.on("error", function (error) {
    console.log("몽고디비 연결 에러", error);
  });
  external_mongoose_default.a.connection.on("disconnected", function () {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다");
    connect();
  });
};

/* harmony default export */ var src_db = (db_dbConnect);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(4);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);

// CONCATENATED MODULE: ./src/db/schemas/user.js


var Schema = external_mongoose_default.a.Schema;
var userSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "default": "normal"
  },
  createAt: {
    type: Date,
    "default": Date.now
  }
}); // arrow function 으로 하면 this binding 안되서 function 으로

userSchema.pre("save", function (next) {
  this.password = external_bcrypt_default.a.hashSync(this.password, 8);
  next();
});

userSchema.methods.validateHash = function (password) {
  external_bcrypt_default.a.compareSync(password, this.password);
};

/* harmony default export */ var schemas_user = (external_mongoose_default.a.model("User", userSchema));
// EXTERNAL MODULE: external "passport"
var external_passport_ = __webpack_require__(3);
var external_passport_default = /*#__PURE__*/__webpack_require__.n(external_passport_);

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// CONCATENATED MODULE: ./src/api/auth/auth.ctrl.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





external_dotenv_default.a.config();

function signup(req, res, next) {
  /*
  const schema = Joi.object().keys({
    id: Joi.string()
      .min(4)
      .max(12)
      .required(),
    password: Joi.string()
      .min(6)
      .max(16)
      .required()
  });
   const validate = Joi.validate(req.body, schema);
  if (validate.error) {
    res.status(400).json({
      message: "validate error"
    });
    return;
  }
   */
  external_passport_default.a.authenticate("signup", function (err, user, info) {
    if (err) {
      console.log(err);
    }

    if (info !== undefined) {
      console.log(info.message);
      res.status(401).json({
        message: info.message
      });
    } else {
      // 정상적으로 들어 왔을 때
      req.login(user,
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(err) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return user.save();

                case 3:
                  console.log("user created in db");
                  res.status(200).json({
                    message: "user created"
                  });
                  _context.next = 11;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  console.log("joi validate: ", _context.t0);
                  res.status(500).json({
                    message: "error in signup auth.ctrl"
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 7]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  })(req, res, next);
}

function login(req, res, next) {
  external_passport_default.a.authenticate("login", function (err, user, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "server error on login"
      });
    }

    if (info !== undefined) {
      console.log(info.message);

      if (info.message === "Missing credentials") {
        res.status(401).json({
          message: "ID나 비밀번호를 입력해주세요"
        });
      } else {
        res.status(401).json({
          message: info.message
        });
      }
    } else {
      req.login(user, function (err) {
        var token = external_jsonwebtoken_default.a.sign({
          id: user.id
        }, "jwtSecret", {
          expiresIn: "7d"
        });
        res.cookie("jwt", token);
        var userInfo = {
          id: user.id
        };
        res.status(200).json({
          auth: true,
          userInfo: userInfo,
          message: "user found & logged in"
        });
      });
    }
  })(req, res, next);
}


// CONCATENATED MODULE: ./src/api/auth/index.js


var router = external_express_default.a.Router();
router.post("/signup", signup);
router.post("/login", login); // router.post("/login", userCtrl.login);

/* harmony default export */ var auth = (router);
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/db/schemas/schedule.js


var schedule_Schema = external_mongoose_default.a.Schema;
var scheduleSchema = new schedule_Schema({
  id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
/* harmony default export */ var schedule = (external_mongoose_default.a.model("Schedule", scheduleSchema));
// CONCATENATED MODULE: ./src/api/schedule/schedule.ctrl.js
function schedule_ctrl_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function schedule_ctrl_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { schedule_ctrl_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { schedule_ctrl_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ObjectId = external_mongoose_default.a.Types.ObjectId;

function create(_x, _x2, _x3) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = schedule_ctrl_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, id, date, text, newSchedule;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, date = _req$body.date, text = _req$body.text;
            newSchedule = new schedule({
              id: id,
              date: date,
              text: text
            });
            _context.prev = 2;
            _context.next = 5;
            return newSchedule.save();

          case 5:
            res.status(200).json({
              newSchedule: newSchedule,
              message: "성공적으로 생성"
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: "데이터베이스 오류 발생"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _create.apply(this, arguments);
}

function list(_x4, _x5, _x6) {
  return _list.apply(this, arguments);
}

function _list() {
  _list = schedule_ctrl_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var userId, scheduleList;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.params.userId;
            _context2.prev = 1;
            _context2.next = 4;
            return schedule.find({
              id: userId
            });

          case 4:
            scheduleList = _context2.sent;
            console.log(scheduleList);
            res.status(200).json({
              scheduleList: scheduleList
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "db error"
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _list.apply(this, arguments);
}

function remove(_x7, _x8, _x9) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = schedule_ctrl_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return schedule.findByIdAndRemove(id);

          case 4:
            res.status(200).json({
              message: "remove success"
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "db error"
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));
  return _remove.apply(this, arguments);
}


// CONCATENATED MODULE: ./src/api/schedule/index.js


var schedule_router = external_express_default.a.Router();
schedule_router.post("/create", create);
schedule_router.get("/:userId", list);
schedule_router["delete"]("/:id", remove);
/* harmony default export */ var api_schedule = (schedule_router);
// CONCATENATED MODULE: ./src/api/index.js



var api_router = external_express_default.a.Router();
api_router.use("/auth", auth);
api_router.use("/schedule", api_schedule);
/* harmony default export */ var api = (api_router);
// EXTERNAL MODULE: external "http-errors"
var external_http_errors_ = __webpack_require__(10);
var external_http_errors_default = /*#__PURE__*/__webpack_require__.n(external_http_errors_);

// EXTERNAL MODULE: external "passport-local"
var external_passport_local_ = __webpack_require__(5);

// EXTERNAL MODULE: external "passport-jwt"
var external_passport_jwt_ = __webpack_require__(14);

// CONCATENATED MODULE: ./src/config/passport.js
function passport_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function passport_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { passport_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { passport_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







external_dotenv_default.a.config();
external_passport_default.a.use("signup", new external_passport_local_["Strategy"]({
  usernameField: "id",
  passwordField: "password",
  session: false
},
/*#__PURE__*/
function () {
  var _ref = passport_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(id, password, done) {
    var existUser, newUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return schemas_user.findOne({
              id: id
            });

          case 3:
            existUser = _context.sent;

            if (!existUser) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", done(null, false, {
              message: "ID가 이미 존재합니다"
            }));

          case 8:
            newUser = new schemas_user({
              id: id,
              password: password
            });
            return _context.abrupt("return", done(null, newUser));

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            done(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));
external_passport_default.a.use("login", new external_passport_local_["Strategy"]({
  usernameField: "id",
  passwordField: "password",
  session: false
},
/*#__PURE__*/
function () {
  var _ref2 = passport_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id, password, done) {
    var existUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return schemas_user.findOne({
              id: id
            });

          case 3:
            existUser = _context2.sent;

            if (existUser) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", done(null, false, {
              message: "ID가 존재하지 않습니다"
            }));

          case 6:
            external_bcrypt_default.a.compare(password, existUser.password).then(function (response) {
              if (response) {
                console.log("user found & authenicated");
                return done(null, existUser);
              } else {
                console.log("password is not corrected");
                return done(null, false, {
                  message: "비밀번호가 틀렸습니다"
                });
              }
            })["catch"](function (error) {
              console.log("bcrypt error");
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            done(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}()));
// CONCATENATED MODULE: ./src/app.js









 // 명시적으로 import 안해주면 strategy 적용 안됨

external_dotenv_default.a.config();
var app = external_express_default()();
src_db();
var port = "4000" || false;
var server = external_http_default.a.createServer(app).listen(port).on("error", onError).on("listening", onListening);
/*
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
*/

if (true) {
  app.use(external_morgan_default()("combined"));
} else {}

app.use(external_cookie_parser_default()());
app.use(external_express_default.a.json());
app.use(external_express_default.a.urlencoded({
  extended: false
})); // querystring 사용

app.use(external_passport_default.a.initialize());
app.use("/api", api);
app.use(function (req, res, next) {
  next(external_http_errors_default()(404));
}); //

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port; // handle specific listen errors with friendly messages

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */


function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("express listening on " + port);
}

/***/ })
/******/ ]);