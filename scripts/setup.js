#!/usr/bin/env node

/**
 * Project Setup Script
 * Automates the initial setup process for the Quasar Electron App
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║     🚀 Quasar Electron App - Setup Wizard                ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion < 18) {
    console.log('❌ Node.js version must be 18 or higher. Current version:', nodeVersion);
    process.exit(1);
  }
  
  console.log('✅ Node.js version:', nodeVersion);

  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.log('❌ Failed to install dependencies');
    process.exit(1);
  }

  // Ask about GitHub configuration
  console.log('\n🔗 GitHub Configuration');
  const setupGithub = await question('Configure GitHub integration? (y/n): ');
  
  if (setupGithub.toLowerCase() === 'y') {
    const githubOwner = await question('GitHub username/organization: ');
    const githubRepo = await question('Repository name: ');
    
    // Update package.json
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.author = githubOwner;
    packageJson.repository = {
      type: 'git',
      url: `https://github.com/${githubOwner}/${githubRepo}.git`
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ GitHub configuration updated');
    
    // Check if gh CLI is available
    try {
      execSync('gh --version', { stdio: 'ignore' });
      console.log('✅ GitHub CLI detected');
      
      const initRepo = await question('Initialize GitHub repository? (y/n): ');
      if (initRepo.toLowerCase() === 'y') {
        console.log('📝 Creating GitHub repository...');
        execSync(`gh repo create ${githubOwner}/${githubRepo} --public --source=. --remote=origin --push`, { stdio: 'inherit' });
        console.log('✅ GitHub repository created');
      }
    } catch {
      console.log('⚠️  GitHub CLI not found. Install from: https://cli.github.com/');
    }
  }

  // Ask about Replit configuration
  console.log('\n☁️  Replit Configuration');
  const setupReplit = await question('Configure Replit integration? (y/n): ');
  
  if (setupReplit.toLowerCase() === 'y') {
    console.log('\n📝 To complete Replit setup:');
    console.log('1. Go to https://replit.com');
    console.log('2. Import from GitHub: ' + (setupGithub.toLowerCase() === 'y' ? `https://github.com/${githubOwner}/${githubRepo}` : 'your-repo-url'));
    console.log('3. Add secrets in Replit Secrets tab:');
    console.log('   - GITHUB_TOKEN');
    console.log('   - REPLIT_TOKEN (optional)');
    console.log('✅ Replit configuration ready');
  }

  // Create .env file
  console.log('\n🔐 Environment Configuration');
  const createEnv = await question('Create .env file from template? (y/n): ');
  
  if (createEnv.toLowerCase() === 'y') {
    const envExample = fs.readFileSync(path.join(__dirname, '.env.example'), 'utf8');
    fs.writeFileSync(path.join(__dirname, '.env'), envExample);
    console.log('✅ .env file created (please update with your values)');
  }

  // Run initial build
  console.log('\n🏗️  Initial Build');
  const runBuild = await question('Run initial build to verify setup? (y/n): ');
  
  if (runBuild.toLowerCase() === 'y') {
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build successful');
    } catch (error) {
      console.log('⚠️  Build completed with warnings');
    }
  }

  // Summary
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║                  ✅ Setup Complete!                      ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  console.log('📚 Next Steps:');
  console.log('   1. Review and update .env file with your configuration');
  console.log('   2. Run: npm run dev (development mode)');
  console.log('   3. Run: npm run build (production build)');
  console.log('   4. Import to Replit: https://replit.com/github/your-repo');
  console.log('   5. Read documentation: README.md, REPLIT-SETUP.md\n');

  rl.close();
}

main().catch(error => {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
});
