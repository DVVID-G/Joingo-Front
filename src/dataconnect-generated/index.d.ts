import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ChatMessage_Key {
  id: UUIDString;
  __typename?: 'ChatMessage_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
}

export interface GetMeetingData {
  meeting?: {
    id: UUIDString;
    title: string;
    startTime: TimestampString;
    endTime?: TimestampString | null;
    description?: string | null;
    meetingId: string;
  } & Meeting_Key;
}

export interface GetMeetingVariables {
  id: UUIDString;
}

export interface JoinMeetingData {
  participant_insert: Participant_Key;
}

export interface JoinMeetingVariables {
  meetingId: UUIDString;
  role: string;
}

export interface ListMeetingsData {
  meetings: ({
    id: UUIDString;
    title: string;
    startTime: TimestampString;
    endTime?: TimestampString | null;
    description?: string | null;
    meetingId: string;
  } & Meeting_Key)[];
}

export interface MeetingHistory_Key {
  userId: UUIDString;
  meetingId: UUIDString;
  __typename?: 'MeetingHistory_Key';
}

export interface Meeting_Key {
  id: UUIDString;
  __typename?: 'Meeting_Key';
}

export interface Participant_Key {
  userId: UUIDString;
  meetingId: UUIDString;
  __typename?: 'Participant_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetMeetingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMeetingVariables): QueryRef<GetMeetingData, GetMeetingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMeetingVariables): QueryRef<GetMeetingData, GetMeetingVariables>;
  operationName: string;
}
export const getMeetingRef: GetMeetingRef;

export function getMeeting(vars: GetMeetingVariables): QueryPromise<GetMeetingData, GetMeetingVariables>;
export function getMeeting(dc: DataConnect, vars: GetMeetingVariables): QueryPromise<GetMeetingData, GetMeetingVariables>;

interface JoinMeetingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinMeetingVariables): MutationRef<JoinMeetingData, JoinMeetingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: JoinMeetingVariables): MutationRef<JoinMeetingData, JoinMeetingVariables>;
  operationName: string;
}
export const joinMeetingRef: JoinMeetingRef;

export function joinMeeting(vars: JoinMeetingVariables): MutationPromise<JoinMeetingData, JoinMeetingVariables>;
export function joinMeeting(dc: DataConnect, vars: JoinMeetingVariables): MutationPromise<JoinMeetingData, JoinMeetingVariables>;

interface ListMeetingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMeetingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMeetingsData, undefined>;
  operationName: string;
}
export const listMeetingsRef: ListMeetingsRef;

export function listMeetings(): QueryPromise<ListMeetingsData, undefined>;
export function listMeetings(dc: DataConnect): QueryPromise<ListMeetingsData, undefined>;

