---
title: Documentation snapshot and query tests
description: Verify immutable publication, exact queries and explicit contract continuations.
uid: project.inno-tooling-documentation-tests
kind: project
owners:
  - Inno.Tooling.Documentation.Tests
---
# Documentation snapshot and query tests

`Inno.Tooling.Documentation.Tests` exercises the public structured interfaces of [the documentation library](../../../architecture/projects/inno-tooling-documentation.md). Prepared reads operate without an engine source checkout, SDK evaluation, native preparation or network access. This separation is what lets a future MCP adapter use the same contracts as the CLI.

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
dotnet test tests/tooling/Inno.Tooling.Documentation.Tests/Inno.Tooling.Documentation.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Each fixture owns its temporary root and releases leases before cleanup. Keep the same public, transport-independent requests when adding an adapter; do not reproduce the search engine in a CLI or MCP test.

[Browse the pinned snapshot fixtures](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/tooling/Inno.Tooling.Documentation.Tests/DocumentationSnapshotTests.cs). Example compilation remains a separate [validation responsibility](../../example-validation.md).
