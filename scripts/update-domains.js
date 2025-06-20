#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const blocklistPath = path.join(__dirname, '../external/disposable-email-domains/disposable_email_blocklist.conf');
const outputPath = path.join(__dirname, '../src/domains.json');

try {
  // Read the blocklist file
  const blocklistContent = fs.readFileSync(blocklistPath, 'utf8');
  
  // Transform using split (adapting for actual line endings) and slice(0, -1) as requested
  const domains = blocklistContent.split('\n').slice(0, -1);
  
  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(domains, null, 2));
  
  console.log(`✅ Successfully updated domains.json with ${domains.length} domains`);
} catch (error) {
  console.error('❌ Error updating domains:', error.message);
  process.exit(1);
}