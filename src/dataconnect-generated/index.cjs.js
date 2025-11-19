const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'eisc-meet',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const getMeetingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMeeting', inputVars);
}
getMeetingRef.operationName = 'GetMeeting';
exports.getMeetingRef = getMeetingRef;

exports.getMeeting = function getMeeting(dcOrVars, vars) {
  return executeQuery(getMeetingRef(dcOrVars, vars));
};

const joinMeetingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinMeeting', inputVars);
}
joinMeetingRef.operationName = 'JoinMeeting';
exports.joinMeetingRef = joinMeetingRef;

exports.joinMeeting = function joinMeeting(dcOrVars, vars) {
  return executeMutation(joinMeetingRef(dcOrVars, vars));
};

const listMeetingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMeetings');
}
listMeetingsRef.operationName = 'ListMeetings';
exports.listMeetingsRef = listMeetingsRef;

exports.listMeetings = function listMeetings(dc) {
  return executeQuery(listMeetingsRef(dc));
};
