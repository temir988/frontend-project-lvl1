#!/usr/bin/env node

import greeting from '../src/greeting.js';
import brainProgression from '../src/games/brainProgression.js';

const userName = greeting();

brainProgression(userName);
