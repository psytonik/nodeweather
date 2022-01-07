#!/usr/bin/env nodeimport {getArgs} from './helpers/args.js';import {printError,printSuccess,printHelp} from './services/log.service.js';import {saveKeyValue} from './services/storage.service.js';const saveToken = async (token)=> {    try {        await saveKeyValue('token', token);        printSuccess('Token successfully saved');    } catch (e){        printError(e.message, + ' ' + 'Something Went Wrong');    }};const initCLI = () => {    const args = getArgs(process.argv);    if(args.h) {        // output help        printHelp();    }    if(args.s){        // save city    }    if(args.t){        // token        return saveToken(args.t);    }    /// output weather}initCLI();