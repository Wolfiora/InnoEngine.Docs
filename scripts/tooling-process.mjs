import { spawn } from 'node:child_process';

/** Run a tool without shell interpolation, preserving cancellation and the first failure. */
export function run(command, args, { cwd, env = process.env, signal, capture = false } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, env, signal, windowsHide: true,
      stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit' });
    let output = '';
    if (capture) child.stdout.setEncoding('utf8').on('data', value => { output += value; });
    child.once('error', reject);
    child.once('exit', (code, terminated) => code === 0 ? resolve(output.trim())
      : reject(new Error(`${command} failed (${terminated ?? code}).`)));
  });
}
