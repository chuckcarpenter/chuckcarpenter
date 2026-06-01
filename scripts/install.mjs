import { execSync } from 'child_process';

console.log('Installing dependencies in /vercel/share/v0-project...');
try {
  const result = execSync('pnpm install', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf8',
    stdio: 'pipe',
  });
  console.log(result);
  console.log('Done!');
} catch (err) {
  console.error('Error:', err.stdout, err.stderr);
}
