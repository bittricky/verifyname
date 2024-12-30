import npmName from 'npm-name';
import chalk from 'chalk';

export async function checkPackageName(name) {
	try {
		const isTaken = await npmName(name);
		if (isTaken) {
			return {
				available: true,
				messages: [
					chalk.green(
						`✓ The package name '${name}' is available!`
					)
				]
			};
		} else {
			return {
				available: false,
				messages: [
					chalk.red(
						`✗ The package name '${name}' is already taken.`
					),
					chalk.gray(
						`View it at: https://www.npmjs.com/package/${name}`
					)
				]
			};
		}
	} catch (error) {
		return {
			available: false,
			messages: [
				chalk.red(`Error checking package name: ${error.message}`)
			]
		};
	}
}
