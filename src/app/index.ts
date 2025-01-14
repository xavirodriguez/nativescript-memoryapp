import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { AppNavigator } from './providers/navigation';
import { Trace } from '@nativescript/core';

Trace.setCategories(Trace.categories.Debug);
Trace.enable();

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(AppNavigator, {}, null));