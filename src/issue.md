**./Api/Api.ts**
```ts
import axios from 'axios'

import { UserEvent } from './UserEvent'

const apiBaseUri: Record<string, string> = {
  beta: 'https://eventex5.apps.nextthing.tech',
  local: 'http://localhost:4000',
  prod: 'https://eventex5.apps.nextthing.tech',
}

// const endPoint = apiBaseUri[baseUri] ? `${apiBaseUri[baseUri]}/api/events` : baseUri




```

**./Api/index.ts**
```ts
export * from './Api'
// export * from './UserEvent'
// export * from './UserEventSystem'
```

**./index.ts**
```ts
export * from './Api'


export function HelloWorld(name) {
  return `Hello ${name}`;
}

export const reportEvent = (eventName: string, payload: object): void => {
  console.log(`Event reported: ${eventName}`, payload);
};

```

