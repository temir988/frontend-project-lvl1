#!/usr/bin/env node

import greeting from '../src/greeting.js';
import brainPrime from '../src/games/brainPrime.js';

const userName = greeting();

brainPrime(userName);
