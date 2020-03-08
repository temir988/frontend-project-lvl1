#!/usr/bin/env node

import greeting from '../src/greeting.js';
import brainEven from '../src/brainEven.js';

const userName = greeting();

brainEven(userName);
