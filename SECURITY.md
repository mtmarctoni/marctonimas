# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.0.x   | Yes       |

## Reporting a Vulnerability

Email the repository owner. Do not open a public issue.

## Security Measures

This repository enforces the following security controls:

- **CI Pipeline**: All pushes and PRs are checked by automated CI
- **Secret Scanning**: TruffleHog and file-guard jobs block secret files
- **Dependency Audit**: `pnpm audit` runs on every push/PR
- **CodeQL**: Static analysis for JavaScript vulnerabilities
- **Pre-commit Hooks**: Block secret files, run typecheck and lint
- **Pre-push Hooks**: Block direct pushes to main

## Threat Model

- Static site (Astro SSG) with no server-side attack surface
- Client-side crypto interactions (ethers.js)

## Assets

- No secrets stored in the repository
- Environment variables are local development only