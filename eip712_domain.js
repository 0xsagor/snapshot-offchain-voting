/**
 * Defines the EIP-712 domain for secure off-chain signing.
 * This prevents replay attacks across different chains or spaces.
 */
const domain = {
  name: 'snapshot',
  version: '0.1.0'
};

const types = {
  Vote: [
    { name: 'from', type: 'address' },
    { name: 'space', type: 'string' },
    { name: 'timestamp', type: 'uint64' },
    { name: 'proposal', type: 'bytes32' },
    { name: 'choice', type: 'uint32' },
    { name: 'reason', type: 'string' },
    { name: 'app', type: 'string' },
    { name: 'metadata', type: 'string' }
  ]
};

module.exports = { domain, types };
