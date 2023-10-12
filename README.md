# ReactJs wrapper for VueJs apps

This library exports a ReactJs wrapper for VueJs applications. This is meant to show how we can create and consume VueJs applications within ReactJs projects

## How to consume

Please, see below how to consume <VideoPlayer /> component

```js
import { VideoPlayer } from '@dolbyio/rts-react-plugin';

export const RealTimeStreaming = () => {
  return <VideoPlayer accountId="accountId" streamName="streamName" />;
};
```

## Running app locally

### Pre requisits

- NodeJs >= v18
- Yarn >= v1.22

### How to run

- yarn dev
