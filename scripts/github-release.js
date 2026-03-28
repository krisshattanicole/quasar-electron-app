#!/usr/bin/env node

/**
 * GitHub Release Helper Script
 * Creates a GitHub release with built artifacts
 * 
 * Usage: npm run github:release
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const version = packageJson.version;
const tagName = `v${version}`;

console.log(`\n🚀 Creating GitHub release ${tagName}...\n`);

try {
  // Check if gh CLI is available
  try {
    execSync('gh --version', { stdio: 'ignore' });
  } catch {
    console.error('❌ GitHub CLI (gh) is not installed.');
    console.error('   Install from: https://cli.github.com/');
    console.error('   Or run: winget install GitHub.cli\n');
    process.exit(1);
  }

  // Check if authenticated
  try {
    execSync('gh auth status', { stdio: 'ignore' });
  } catch {
    console.error('❌ Not authenticated with GitHub.');
    console.error('   Run: gh auth login\n');
    process.exit(1);
  }

  // Build the app
  console.log('📦 Building Electron app...');
  execSync('npm run build', { stdio: 'inherit' });

  // Find built files
  const distPath = path.join(__dirname, '..', 'dist', 'electron', 'Packaged');
  const exeFiles = fs.readdirSync(distPath).filter(f => f.endsWith('.exe'));

  if (exeFiles.length === 0) {
    console.error('❌ No built .exe files found in dist/electron/Packaged/');
    process.exit(1);
  }

  console.log(`\n📁 Found ${exeFiles.length} executable(s):`);
  exeFiles.forEach(f => console.log(`   - ${f}`));

  // Create release
  console.log(`\n📝 Creating release ${tagName}...`);
  
  const releaseArgs = [
    'release', 'create', tagName,
    '--title', `QuasarElectronApp v${version}`,
    '--generate-notes',
    ...exeFiles.map(f => path.join(distPath, f))
  ];

  execSync(`gh ${releaseArgs.join(' ')}`, { stdio: 'inherit' });

  console.log('\n✅ Release created successfully!');
  console.log(`🔗 https://github.com/krisshattanicole/quasar-electron-app/releases/tag/${tagName}\n`);

} catch (error) {
  console.error('\n❌ Error creating release:', error.message);
  process.exit(1);
}
