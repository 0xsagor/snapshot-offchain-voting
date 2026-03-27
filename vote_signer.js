const { ethers } = require("ethers");
const snapshot = require("@snapshot-labs/snapshot.js");

async function signSnapshotVote() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const hub = 'https://hub.snapshot.org'; // Testnet: https://testnet.hub.snapshot.org
  const client = new snapshot.Client712(hub);

  const receipt = await client.vote(wallet, wallet.address, {
    space: 'yourdao.eth',
    proposal: '0x...', // IPFS hash of the proposal
    type: 'single-choice',
    choice: 1, // 1 for 'For', 2 for 'Against'
    reason: 'I support this initiative for community growth',
    app: 'my-dao-app'
  });

  console.log('Vote submitted successfully:', receipt);
}

signSnapshotVote().catch(console.error);
