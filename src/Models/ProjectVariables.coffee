BaseModel = require '../BaseModel'
Utils = require '../Utils'

class ProjectVariables extends BaseModel
  list: (projectId, fn = null) =>
    @debug "Projects::variables()"
    @get "projects/#{Utils.parseProjectId projectId}/variables", (data) => fn data if fn

  show: (projectId, variableKey, fn = null) =>
    @debug "Projects::variable()"
    @get "projects/#{Utils.parseProjectId projectId}/variables/#{variableKey}", (data) => fn data if fn

  add: (projectId, params={}, fn = null) =>
    @debug "Projects::addVariable()"
    @post "projects/#{Utils.parseProjectId projectId}/variables", params, (data) => fn data if fn

  update: (projectId, variableKey, fn = null) =>
    @debug "Projects::saveVariable()"
    @put "projects/#{Utils.parseProjectId projectId}/variables/#{variableKey}", params, (data) => fn data if fn

  remove: (projectId, variableKey, fn = null) =>
    @debug "Projects::removeVariable()"
    @delete "projects/#{Utils.parseProjectId projectId}/variables/#{variableKey}", (data) => fn data if fn

module.exports = (client) -> new ProjectVariables client