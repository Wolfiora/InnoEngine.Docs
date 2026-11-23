---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-tooling-documentation-integration-tests
symbol: project:Inno.Tooling.Documentation.Integration.Tests
title: Inno.Tooling.Documentation.Integration.Tests
kind: project
owners:
- Inno.Tooling.Documentation.Integration.Tests
sourceFingerprint: 1029bbfb984201310c7d6a130e451827e49531db54b0ff5e9bc98f7cfdca2da0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify immutable publication, exact queries and explicit contract continuations.
outdated: false
---
# Inno.Tooling.Documentation.Integration.Tests

`Inno.Tooling.Documentation.Integration.Tests` exercises the public structured interfaces of [the documentation library](../../../architecture/projects/inno-tooling-documentation.md). Prepared reads operate without an engine source checkout, SDK evaluation, native preparation or network access. This separation is what lets a future MCP adapter use the same contracts as the CLI.

## Publication and ownership

Fixtures reject unsafe links, executable HTML, invalid examples and include cycles before replacing the last complete generation. Moves preserve page identity, deletion affects only the new snapshot, and same-length edits with restored timestamps are detected during explicit refresh.

Concurrent readers retain consistent generations while writers publish. Cancellation behind a protected page leaves the current generation intact. Confirming unchanged content does not rewrite an open index. Query-only implementation changes reuse parsed pages; parser changes require fresh parsing.

Corrupt published payloads fail reads. Explicit preparation repairs only the owned cache; a read does not silently rewrite it or claim the mutable source checkout remains unchanged.

## Search and complete contracts

Exact symbol lookups preserve surface qualification, overload ambiguity and required contract relationships. Unrelated member names cannot contaminate every section on a type page. Natural task headings rank ahead of incidental examples and assembly indexes, while identifier queries retain reference priority.

Large sections round-trip original text, including surrogate pairs. Structured continuations identify incomplete results instead of returning a truncated excerpt as a complete contract. Resource identities and pagination do not require console-text parsing.

Empty search, missing targets, engine mismatch, cancellation and execution failure remain distinct. A fresh document catalog retains explicit source API verification status; declarations and examples in Markdown are not certificates of source execution.

## Run and maintain

The test project declares the integration layer because it exercises real files, publication and concurrency. Its query fixtures do not build engine products. Compiling the test assembly still requires the selected .NET SDK:

```powershell
dotnet test tests/tools/Inno.Tooling.Documentation.Integration.Tests/Inno.Tooling.Documentation.Integration.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Each fixture owns its temporary root and releases leases before cleanup. Keep the same public, transport-independent requests when adding an adapter; do not reproduce the search engine in a CLI or MCP test.

[Browse the pinned snapshot fixtures](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/tools/Inno.Tooling.Documentation.Integration.Tests/DocumentationSnapshotTests.cs). Example compilation remains a separate [validation responsibility](../../example-validation.md).
