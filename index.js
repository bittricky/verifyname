#!/usr/bin/env node

/**
 * verifyname
 * Command line tool to check a package name is available
 *
 * @author Mitul Patel <https://mitulpa.tel>
 */

import cli from './utils/cli.js';
import init from './utils/init.js';
import log from './utils/log.js';
import { checkPackageName } from './utils/check.js';

const { flags, input, showHelp } = cli;
const { clear, debug } = flags;

(async () => {
	await init({ clear });
	debug && log(flags);
	input.includes(`help`) && showHelp(0);

	if (input.length === 0) {
		console.log('Please provide a package name to check');
		showHelp(0);
		return;
	}

	const packageName = input[0];
	const result = await checkPackageName(packageName);
	result.messages.forEach(message => console.log(message));
})();
