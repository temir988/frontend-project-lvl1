#!/usr/bin/env node

import greeting from '../src/greeting.js';
import brainCalc from '../src/games/brainCalc.js';

const userName = greeting();

brainCalc(userName);
