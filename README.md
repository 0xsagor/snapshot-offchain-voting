# Snapshot Off-Chain Voting

This repository provides the configuration and logic to link a DAO's on-chain assets with **Snapshot.org**. It enables "Gasless Governance," where the weight of a vote is calculated based on on-chain balances, but the act of voting is an off-chain signature.

## Why Hybrid Governance?
* **Zero Gas Costs**: Users sign a message (EIP-712) instead of sending a transaction.
* **Higher Participation**: Removing friction leads to 10x higher voter turnout.
* **Optimistic Execution**: Uses **oSnap** (via UMA) to automatically execute the results of a Snapshot vote on-chain if no one challenges the outcome during a "challenge period."

## Strategy Types
* **ERC-20 Balance**: 1 Token = 1 Vote.
* **Whitelist**: Only specific addresses can vote.
* **Quadratic Voting**: $Weight = \sqrt{Tokens}$, reducing the influence of "Whales."
