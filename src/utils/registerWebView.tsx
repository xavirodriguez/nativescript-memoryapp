import { registerElement } from 'react-nativescript';
import { WebView } from '@nativescript/core';

// Register the NativeScript WebView element so it can be used in JSX.
registerElement('webView', () => WebView);
