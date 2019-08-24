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
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Stepper_GradientStepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Stepper/GradientStepper */ "./src/components/Stepper/GradientStepper.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/containers/Register/styles.js");








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
      lineNumber: 26
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
      lineNumber: 35
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
      lineNumber: 44
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
  major: ''
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
      currentStep: 0,
      formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm),
      errors: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm)
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        var _assertThisInitialize = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
            setValue = _assertThisInitialize.setValue;

        var value = event.target.value;
        event.persist();

        if (name === 'stdID') {
          var regex = /[^0-9]/g;
          var filtered = value.replace(regex, '');
          setValue(name, filtered.substring(0, 9));
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
      }

      if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default()(newErrors, defaultForm)) {} else {
        _this.setState({
          errors: newErrors
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
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
      var _this$state = this.state,
          formValues = _this$state.formValues,
          errors = _this$state.errors;
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
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Fade"], {
        "in": visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        className: classes.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Stepper_GradientStepper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activeStep: 0,
        steps: STEPS,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: classes.formStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        className: classes.inputStyle,
        error: !!errors.stdID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
        htmlFor: "stdID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "\u0E23\u0E2B\u0E31\u0E2A \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "stdID",
        value: formValues.stdID,
        onChange: this.handleChange('stdID'),
        "aria-describedby": "stdID-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormHelperText"], {
        id: "stdID-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, errors.stdID || ' ')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        id: "major",
        select: true,
        label: "\u0E2A\u0E32\u0E02\u0E32",
        className: classes.inputStyle,
        value: formValues.major,
        onChange: this.handleChange('major'),
        error: !!errors.major,
        helperText: errors.major || ' ',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, MAJOR.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
          key: option.value,
          value: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, option.label);
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "contained",
        onClick: this.handleSubmitStep1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "testttt")))));
    }
  }]);

  return RegisterContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RegisterContainer, "propTypes", {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RegisterContainer, "defaultProps", {
  visible: false,
  handleClose: function handleClose() {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(RegisterContainer));

/***/ })

})
//# sourceMappingURL=index.js.8f776c81177603d00a70.hot-update.js.map