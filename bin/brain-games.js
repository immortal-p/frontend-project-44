#!/usr/bin/env node
"use strict";
import { name } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

const firstName = name;

console.log(`Hello, ${firstName}!`);
