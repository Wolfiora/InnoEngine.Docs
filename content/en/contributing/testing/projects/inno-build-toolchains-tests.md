---
title: Build input and cache protocol tests
description: Verify exact identities, frozen preparation, protected readers and resumable retirement.
uid: project.inno-build-toolchains-tests
kind: project
owners:
  - Inno.Build.Toolchains.Tests
---
# Build input and cache protocol tests

`Inno.Build.Toolchains.Tests` verifies the neutral contracts behind [immutable build artifacts](../../../architecture/build-artifacts.md). It directly references the toolchain library, without Editor, BGCS or a concrete native backend. A test of a native-input protocol does not need to compile a native product.

## Exact inputs and SDK graphs

Input descriptions preserve overlapping roots, ordered macros and translation-unit markers. Logical root identities belong to their individual descriptions; unknown roots, absolute paths, traversal, drive paths, backslashes, length changes and cancellation fail explicitly.

Fingerprint and phase tests detect same-length, timestamp-preserving edits, reject directory aliases where required, and deduplicate reads only within the valid phase. A failed batch must drain readers and retry the complete required read; cancellation after inventory cannot publish a partial successful snapshot.

Real SDK graph cases capture batched properties, references and compilation symbols. Framework selection covers ordinary and browser-qualified targets plus explicit `TargetingPackVersion`; it does not infer a reference-pack version from the host. Failing SDK targets preserve the original diagnostic output and inner failure rather than reporting only an exit code.

## Frozen preparation and import

Product-preparation fixtures distinguish a frozen request from each consumer's independent read protection. Changed content invalidates reuse, waiting can be canceled, and freshness is checked at the required publication boundaries.

Artifact import moves only immutable payload and manifest into another fixture checkout. The destination publisher registers its own owner. Same-length tampering, missing files, extra members and mismatched identities are rejected. Import cannot hide a real producer failure.

## Inventory and retirement

Dry-run does not mutate persisted progress. A writer invalidates its affected inventory shard. A real filesystem-event fixture cancels after the first checkpoint in the 64-shard inventory; no artifact may retire before the entire protection graph is known. A resumed pass preserves completed shard bytes and timestamps until their inputs actually change.

Retirement retains active readers, dependencies, persistent lock files and unregistered user directories. Metadata that cannot establish its process owner remains protected. The failure tests verify that an invalid metadata claim does not erase already completed retirement results or suppress its diagnostic; explicit maintenance still fails visibly.

## Development build provenance

Real SDK fixtures use the repository's props and targets. A report-only commit preserves DLL/PDB bytes and the DLL timestamp in default, Debug, SourceDebug and CI development contexts. Portable PDB inspection checks embedded source. Release still records the precise commit and real Source Link after the report commit.

These checks separate development output reuse from release provenance. They do not turn a matching timestamp into content evidence.

## Run and maintain

Use [the shared plan](../../validate-change.md), or a focused neutral-protocol diagnostic:

```powershell
dotnet test tests/build/Inno.Build.Toolchains.Tests/Inno.Build.Toolchains.Tests.csproj --configuration Release --disable-build-servers -m:1 -nodeReuse:false
```

SDK graph fixtures require the actual selected SDK. File and ownership fixtures release only their own temporary roots and leases. Protocol success does not certify native compilation, ABI, product export or device execution; those remain separate owners and environments.

[Browse the pinned assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/build/Inno.Build.Toolchains.Tests).
