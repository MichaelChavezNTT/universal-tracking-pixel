import axios from 'axios'

import { UserEvent } from './UserEvent'

const apiBaseUri: Record<string, string> = {
  beta: 'https://eventex5.apps.nextthing.tech',
  local: 'http://localhost:4000',
  prod: 'https://eventex5.apps.nextthing.tech',
}

// const endPoint = apiBaseUri[baseUri] ? `${apiBaseUri[baseUri]}/api/events` : baseUri




