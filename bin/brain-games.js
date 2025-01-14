#!/usr/bin/env node
"use strict";
import { getName } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

const firstName = getName();
console.log(`Hello ${firstName}`);
