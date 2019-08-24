webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/Register/RegisterContainer.js":
/*!******************************************************!*\
  !*** ./src/containers/Register/RegisterContainer.js ***!
  \******************************************************/
/*! exports provided: RegisterContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterContainer", function() { return RegisterContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/trim */ "./node_modules/lodash/trim.js");
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/split */ "./node_modules/lodash/split.js");
/* harmony import */ var lodash_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Stepper_GradientStepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Stepper/GradientStepper */ "./src/components/Stepper/GradientStepper.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles */ "./src/containers/Register/styles.js");








var _jsxFileName = "/Users/bl4deofsoul/Desktop/CLWEB/cl-web-fe/src/containers/Register/RegisterContainer.js";










var STEPS = [{
  label: 'ข้อมูล นศ.',
  icon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    className: "fas fa-user-graduate",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })
}, {
  label: 'ข้อมูลส่วนตัว',
  icon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    className: "fas fa-user",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })
}, {
  label: 'ข้อมูลการติดต่อ',
  icon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    className: "fas fa-phone-volume",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })
}];
var MAJOR = [{
  label: 'วิศวะกรรมซอฟต์แวร์',
  value: 'SE'
}, {
  label: 'การจัดการสมัยใหม่และเทคโนโลยีสารสนเทศ',
  value: 'MMIT'
}, {
  label: 'แอนิเมชั่นและวิชวลเอฟเฟกต์',
  value: 'ANI'
}, {
  label: 'ดิจิทัลเกม',
  value: 'DG'
}, {
  label: 'บูรณาการอุตสาหกรรมดิจิทัล',
  value: 'DII'
}];
var defaultForm = {
  stdID: '',
  major: '',
  name: '',
  nickName: '',
  gender: 'female'
};
var RegisterContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterContainer, _Component);

  function RegisterContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegisterContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RegisterContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      currentStep: 1,
      formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm),
      errors: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm)
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        var _assertThisInitialize = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
            setValue = _assertThisInitialize.setValue;

        var value = event.target.value;
        console.log('value', value);
        event.persist();

        if (name === 'stdID') {
          var regex = /[^0-9]/g;
          var filtered = value.replace(regex, '');
          setValue(name, filtered.substring(0, 9));
        } else if (name === 'name' || name === 'nickName') {
          var nameRegex = /[!$%^&*\(\)_+|~\-=`{}\[\]:";<>?,./]/g;
          var firstCharRegex = /[!$%^&*\(\)_+|~\-=`'{}\[\]:";<>?,./\s]/;

          if (!value.charAt(0).match(firstCharRegex)) {
            var removeCharacter = value.replace(nameRegex, '');
            setValue(name, removeCharacter.replace('  ', ' '));
          }
        } else {
          setValue(name, value);
        }
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setValue", function (name, value) {
      return _this.setState(function (state) {
        return {
          formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.formValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value)),
          errors: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.errors, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, ''))
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmitStep1", function () {
      var stdIDValidate = /[0-9]{9}/g;
      var formValues = _this.state.formValues;

      var newErrors = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm);

      if (!formValues.stdID) {
        newErrors.stdID = 'กรุณากรอกรหัสนักศึกษา';
      } else if (!formValues.stdID.match(stdIDValidate)) {
        newErrors.stdID = 'รหัสนักศึกษาต้องมี9ตัวอักษร';
      }

      if (!formValues.major) {
        newErrors.major = 'กรุณาเลือกสาขา';
      } // Form decision


      if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default()(newErrors, defaultForm)) {
        _this.setState({
          currentStep: 1
        });
      } else {
        _this.setState({
          errors: newErrors
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmitStep2", function () {
      var formValues = _this.state.formValues;

      var newErrors = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm);

      if (!formValues.name) {
        newErrors.name = 'กรุณากรอกชื่อและนามสกุล';
      } else if (lodash_split__WEBPACK_IMPORTED_MODULE_13___default()(lodash_trim__WEBPACK_IMPORTED_MODULE_12___default()(formValues.name), ' ').length === 1) {
        newErrors.name = 'กรุณากรอกนามสกุล';
      }

      if (!formValues.nickName) {
        newErrors.nickName = 'กรุณากรอกชื่อเล่น';
      } // Form decision


      if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default()(newErrors, defaultForm)) {
        _this.setState({
          currentStep: 2
        });
      } else {
        _this.setState({
          errors: newErrors
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmitStep3", function () {
      _this.props.handleClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "ButtonStep", function (_ref) {
      var _ref$onClick = _ref.onClick,
          onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? '' : _ref$title,
          _ref$showIcon = _ref.showIcon,
          showIcon = _ref$showIcon === void 0 ? false : _ref$showIcon;
      var classes = _this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.stepButtonContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "contained",
        color: "secondary",
        onClick: onClick,
        className: classes.stepButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        align: "center",
        className: classes.stepButtonText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, title), showIcon && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderFormStep", function () {
      var classes = _this.props.classes;
      var _this$state = _this.state,
          formValues = _this$state.formValues,
          errors = _this$state.errors,
          currentStep = _this$state.currentStep;

      var _assertThisInitialize2 = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
          ButtonStep = _assertThisInitialize2.ButtonStep;

      if (currentStep === 0) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: classes.inputContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
          className: classes.inputStyle,
          error: !!errors.stdID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          htmlFor: "stdID",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, "\u0E23\u0E2B\u0E31\u0E2A \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
          id: "stdID",
          value: formValues.stdID,
          onChange: _this.handleChange('stdID'),
          "aria-describedby": "stdID-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
          id: "stdID-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, errors.stdID || ' ')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          id: "major",
          select: true,
          label: "\u0E2A\u0E32\u0E02\u0E32",
          className: classes.inputStyle,
          value: formValues.major,
          onChange: _this.handleChange('major'),
          error: !!errors.major,
          helperText: errors.major || ' ',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, MAJOR.map(function (option) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
            key: option.value,
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, option.label);
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonStep, {
          title: "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B",
          onClick: _this.handleSubmitStep1,
          showIcon: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }));
      }

      if (currentStep === 1) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: classes.inputContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
          className: classes.inputStyle,
          error: !!errors.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
          id: "name",
          value: formValues.name,
          onChange: _this.handleChange('name'),
          "aria-describedby": "name-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
          id: "name-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, errors.name || ' ')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
          className: classes.inputStyle,
          error: !!errors.nickName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          htmlFor: "nickName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
          id: "nickName",
          value: formValues.nickName,
          onChange: _this.handleChange('nickName'),
          "aria-describedby": "nickName-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
          id: "nickName-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, errors.nickName || ' ')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"], {
          "aria-label": "gender",
          name: "gender",
          className: classes.genderSelector,
          value: formValues.gender,
          onChange: _this.handleChange('gender'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControlLabel"], {
          value: "female",
          control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }),
          label: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
            color: "textPrimary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, "\u0E1C\u0E39\u0E49\u0E2B\u0E0D\u0E34\u0E07"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControlLabel"], {
          value: "male",
          control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            },
            __self: this
          }),
          label: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
            color: "textPrimary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          }, "\u0E1C\u0E39\u0E49\u0E0A\u0E32\u0E22"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonStep, {
          title: "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22",
          onClick: _this.handleSubmitStep2,
          showIcon: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }));
      }

      if (currentStep === 2) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: classes.inputContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonStep, {
          title: "\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",
          onClick: _this.handleSubmitStep3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RegisterContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          classes = _this$props.classes,
          handleClose = _this$props.handleClose;
      var currentStep = this.state.currentStep;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        className: classes.modal,
        open: visible,
        onClose: handleClose,
        closeAfterTransition: true,
        BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Backdrop"],
        BackdropProps: {
          timeout: 500
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Fade"], {
        "in": visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        className: classes.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Stepper_GradientStepper__WEBPACK_IMPORTED_MODULE_16__["default"], {
        activeStep: currentStep,
        steps: STEPS,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: classes.formStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, this.renderFormStep()))));
    }
  }]);

  return RegisterContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RegisterContainer, "propTypes", {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RegisterContainer, "defaultProps", {
  visible: false,
  handleClose: function handleClose() {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"])(RegisterContainer));

/***/ })

})
//# sourceMappingURL=index.js.2f48a45964c5d3bfea29.hot-update.js.map