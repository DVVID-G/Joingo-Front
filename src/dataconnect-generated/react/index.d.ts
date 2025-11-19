import { CreateUserData, CreateUserVariables, GetMeetingData, GetMeetingVariables, JoinMeetingData, JoinMeetingVariables, ListMeetingsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useGetMeeting(vars: GetMeetingVariables, options?: useDataConnectQueryOptions<GetMeetingData>): UseDataConnectQueryResult<GetMeetingData, GetMeetingVariables>;
export function useGetMeeting(dc: DataConnect, vars: GetMeetingVariables, options?: useDataConnectQueryOptions<GetMeetingData>): UseDataConnectQueryResult<GetMeetingData, GetMeetingVariables>;

export function useJoinMeeting(options?: useDataConnectMutationOptions<JoinMeetingData, FirebaseError, JoinMeetingVariables>): UseDataConnectMutationResult<JoinMeetingData, JoinMeetingVariables>;
export function useJoinMeeting(dc: DataConnect, options?: useDataConnectMutationOptions<JoinMeetingData, FirebaseError, JoinMeetingVariables>): UseDataConnectMutationResult<JoinMeetingData, JoinMeetingVariables>;

export function useListMeetings(options?: useDataConnectQueryOptions<ListMeetingsData>): UseDataConnectQueryResult<ListMeetingsData, undefined>;
export function useListMeetings(dc: DataConnect, options?: useDataConnectQueryOptions<ListMeetingsData>): UseDataConnectQueryResult<ListMeetingsData, undefined>;
