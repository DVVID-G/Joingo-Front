import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'eisc-meet',
  location: 'us-east4'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const getMeetingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMeeting', inputVars);
}
getMeetingRef.operationName = 'GetMeeting';

export function getMeeting(dcOrVars, vars) {
  return executeQuery(getMeetingRef(dcOrVars, vars));
}

export const joinMeetingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinMeeting', inputVars);
}
joinMeetingRef.operationName = 'JoinMeeting';

export function joinMeeting(dcOrVars, vars) {
  return executeMutation(joinMeetingRef(dcOrVars, vars));
}

export const listMeetingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMeetings');
}
listMeetingsRef.operationName = 'ListMeetings';

export function listMeetings(dc) {
  return executeQuery(listMeetingsRef(dc));
}

