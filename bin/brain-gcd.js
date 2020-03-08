#!/usr/bin/env node

import greeting from '../src/greeting.js';
import brainGcd from '../src/games/brainGcd.js';

const userName = greeting();

brainGcd(userName);
