# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMeeting*](#getmeeting)
  - [*ListMeetings*](#listmeetings)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*JoinMeeting*](#joinmeeting)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMeeting
You can execute the `GetMeeting` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMeeting(vars: GetMeetingVariables): QueryPromise<GetMeetingData, GetMeetingVariables>;

interface GetMeetingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMeetingVariables): QueryRef<GetMeetingData, GetMeetingVariables>;
}
export const getMeetingRef: GetMeetingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMeeting(dc: DataConnect, vars: GetMeetingVariables): QueryPromise<GetMeetingData, GetMeetingVariables>;

interface GetMeetingRef {
  ...
  (dc: DataConnect, vars: GetMeetingVariables): QueryRef<GetMeetingData, GetMeetingVariables>;
}
export const getMeetingRef: GetMeetingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMeetingRef:
```typescript
const name = getMeetingRef.operationName;
console.log(name);
```

### Variables
The `GetMeeting` query requires an argument of type `GetMeetingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMeetingVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMeeting` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMeetingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMeeting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMeeting, GetMeetingVariables } from '@dataconnect/generated';

// The `GetMeeting` query requires an argument of type `GetMeetingVariables`:
const getMeetingVars: GetMeetingVariables = {
  id: ..., 
};

// Call the `getMeeting()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMeeting(getMeetingVars);
// Variables can be defined inline as well.
const { data } = await getMeeting({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMeeting(dataConnect, getMeetingVars);

console.log(data.meeting);

// Or, you can use the `Promise` API.
getMeeting(getMeetingVars).then((response) => {
  const data = response.data;
  console.log(data.meeting);
});
```

### Using `GetMeeting`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMeetingRef, GetMeetingVariables } from '@dataconnect/generated';

// The `GetMeeting` query requires an argument of type `GetMeetingVariables`:
const getMeetingVars: GetMeetingVariables = {
  id: ..., 
};

// Call the `getMeetingRef()` function to get a reference to the query.
const ref = getMeetingRef(getMeetingVars);
// Variables can be defined inline as well.
const ref = getMeetingRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMeetingRef(dataConnect, getMeetingVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.meeting);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.meeting);
});
```

## ListMeetings
You can execute the `ListMeetings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMeetings(): QueryPromise<ListMeetingsData, undefined>;

interface ListMeetingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMeetingsData, undefined>;
}
export const listMeetingsRef: ListMeetingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMeetings(dc: DataConnect): QueryPromise<ListMeetingsData, undefined>;

interface ListMeetingsRef {
  ...
  (dc: DataConnect): QueryRef<ListMeetingsData, undefined>;
}
export const listMeetingsRef: ListMeetingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMeetingsRef:
```typescript
const name = listMeetingsRef.operationName;
console.log(name);
```

### Variables
The `ListMeetings` query has no variables.
### Return Type
Recall that executing the `ListMeetings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMeetingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListMeetings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMeetings } from '@dataconnect/generated';


// Call the `listMeetings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMeetings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMeetings(dataConnect);

console.log(data.meetings);

// Or, you can use the `Promise` API.
listMeetings().then((response) => {
  const data = response.data;
  console.log(data.meetings);
});
```

### Using `ListMeetings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMeetingsRef } from '@dataconnect/generated';


// Call the `listMeetingsRef()` function to get a reference to the query.
const ref = listMeetingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMeetingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.meetings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.meetings);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## JoinMeeting
You can execute the `JoinMeeting` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
joinMeeting(vars: JoinMeetingVariables): MutationPromise<JoinMeetingData, JoinMeetingVariables>;

interface JoinMeetingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinMeetingVariables): MutationRef<JoinMeetingData, JoinMeetingVariables>;
}
export const joinMeetingRef: JoinMeetingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
joinMeeting(dc: DataConnect, vars: JoinMeetingVariables): MutationPromise<JoinMeetingData, JoinMeetingVariables>;

interface JoinMeetingRef {
  ...
  (dc: DataConnect, vars: JoinMeetingVariables): MutationRef<JoinMeetingData, JoinMeetingVariables>;
}
export const joinMeetingRef: JoinMeetingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the joinMeetingRef:
```typescript
const name = joinMeetingRef.operationName;
console.log(name);
```

### Variables
The `JoinMeeting` mutation requires an argument of type `JoinMeetingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface JoinMeetingVariables {
  meetingId: UUIDString;
  role: string;
}
```
### Return Type
Recall that executing the `JoinMeeting` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `JoinMeetingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface JoinMeetingData {
  participant_insert: Participant_Key;
}
```
### Using `JoinMeeting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, joinMeeting, JoinMeetingVariables } from '@dataconnect/generated';

// The `JoinMeeting` mutation requires an argument of type `JoinMeetingVariables`:
const joinMeetingVars: JoinMeetingVariables = {
  meetingId: ..., 
  role: ..., 
};

// Call the `joinMeeting()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await joinMeeting(joinMeetingVars);
// Variables can be defined inline as well.
const { data } = await joinMeeting({ meetingId: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await joinMeeting(dataConnect, joinMeetingVars);

console.log(data.participant_insert);

// Or, you can use the `Promise` API.
joinMeeting(joinMeetingVars).then((response) => {
  const data = response.data;
  console.log(data.participant_insert);
});
```

### Using `JoinMeeting`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, joinMeetingRef, JoinMeetingVariables } from '@dataconnect/generated';

// The `JoinMeeting` mutation requires an argument of type `JoinMeetingVariables`:
const joinMeetingVars: JoinMeetingVariables = {
  meetingId: ..., 
  role: ..., 
};

// Call the `joinMeetingRef()` function to get a reference to the mutation.
const ref = joinMeetingRef(joinMeetingVars);
// Variables can be defined inline as well.
const ref = joinMeetingRef({ meetingId: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = joinMeetingRef(dataConnect, joinMeetingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.participant_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.participant_insert);
});
```

