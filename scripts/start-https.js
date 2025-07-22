const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to generate self-signed certificates
function generateCertificates() {
  const certsDir = path.join(__dirname, '..', 'certs');
  
  // Create certs directory if it doesn't exist
  if (!fs.existsSync(certsDir)) {
    fs.mkdirSync(certsDir, { recursive: true });
  }
  
  const certPath = path.join(certsDir, 'cert.pem');
  const keyPath = path.join(certsDir, 'key.pem');
  
  // Check if certificates already exist
  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    console.log('✅ Certificates already exist');
    return { certPath, keyPath };
  }
  
  console.log('🔐 Generating self-signed certificates...');
  
  try {
    // Generate self-signed certificate using OpenSSL with secure flags
    const opensslCommand = `openssl req -x509 -newkey rsa:2048 -sha256 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost" -addext "subjectAltName=DNS:localhost,DNS:127.0.0.1,IP:127.0.0.1"`;
    execSync(opensslCommand, { stdio: 'inherit' });
    console.log('✅ Certificates generated successfully');
    return { certPath, keyPath };
  } catch (error) {
    console.error('❌ Failed to generate certificates. Make sure OpenSSL is installed.');
    console.error('You can install OpenSSL with: brew install openssl (macOS) or apt-get install openssl (Ubuntu)');
    process.exit(1);
  }
}

// Generate certificates
const { certPath, keyPath } = generateCertificates();

// Set environment variables for HTTPS
process.env.HTTPS = 'true';
process.env.SSL_CRT_FILE = certPath;
process.env.SSL_KEY_FILE = keyPath;

console.log('🚀 Starting Docusaurus with HTTPS...');
console.log(`📜 Certificate: ${certPath}`);
console.log(`🔑 Private Key: ${keyPath}`);
console.log('🌐 Your site will be available at: https://localhost:3000');

// Start the development server using pnpm
try {
  execSync('pnpm docusaurus start', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to start Docusaurus server');
  process.exit(1);
} 