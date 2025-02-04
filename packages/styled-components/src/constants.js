// @flow
import uuidv4 from 'uuid/v4';

declare var SC_DISABLE_SPEEDY: ?boolean;

export const SC_ATTR =
  (typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
  'data-styled';

export const SC_VERSION_ATTR = 'data-styled-version';

export const SC_INSTANCE_ATTR = 'data-styled-instance';

export const SC_INSTANCE_ID = uuidv4();

export const SC_STREAM_ATTR = 'data-styled-streamed';

export const IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

export const DISABLE_SPEEDY =
  (typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY) ||
  (typeof process !== 'undefined' &&
    (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY)) ||
  process.env.NODE_ENV !== 'production';

// Shared empty execution context when generating static styles
export const STATIC_EXECUTION_CONTEXT = {};
