import ReactDOM from 'react-dom/client';

import { VideoPlayer } from './components/ReactVideoPlayer';

ReactDOM.createRoot(document.getElementById('react-app')!).render(
  <VideoPlayer accountId="k9Mwad" streamName="simulcastmultiview" />,
);
