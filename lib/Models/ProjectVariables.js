(function() {
  var BaseModel, ProjectVariables, Utils,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Utils = require('../Utils');

  ProjectVariables = (function(superClass) {
    extend(ProjectVariables, superClass);

    function ProjectVariables() {
      this.remove = bind(this.remove, this);
      this.update = bind(this.update, this);
      this.add = bind(this.add, this);
      this.show = bind(this.show, this);
      this.list = bind(this.list, this);
      return ProjectVariables.__super__.constructor.apply(this, arguments);
    }

    ProjectVariables.prototype.list = function(projectId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::variables()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/variables", (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectVariables.prototype.show = function(projectId, variableKey, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::variable()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/variables/" + variableKey, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectVariables.prototype.add = function(projectId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::addVariable()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/variables", params, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectVariables.prototype.update = function(projectId, variableKey, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::saveVariable()");
      return this.put("projects/" + (Utils.parseProjectId(projectId)) + "/variables/" + variableKey, params, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectVariables.prototype.remove = function(projectId, variableKey, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::removeVariable()");
      return this["delete"]("projects/" + (Utils.parseProjectId(projectId)) + "/variables/" + variableKey, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return ProjectVariables;

  })(BaseModel);

  module.exports = function(client) {
    return new ProjectVariables(client);
  };

}).call(this);
