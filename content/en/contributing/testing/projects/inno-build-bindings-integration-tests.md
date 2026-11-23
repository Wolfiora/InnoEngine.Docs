---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-build-bindings-integration-tests
symbol: project:Inno.Build.Bindings.Integration.Tests
title: Inno.Build.Bindings.Integration.Tests
kind: project
owners:
- Inno.Build.Bindings.Integration.Tests
sourceFingerprint: 95efba46351537d1b99e6690df2c72d992762ab91c455d883abe0315ac18d4f7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify SDK input selection, immutable generation and consumer protection.
outdated: false
---
# Inno.Build.Bindings.Integration.Tests

`Inno.Build.Bindings.Integration.Tests` validates InnoEngine's binding-generation integration with the restored BGCS SDK and worker. It needs that real SDK on a supported Windows/macOS host, but does not prepare an Editor, window, GPU or engine native product. This guide documents the engine integration tests, not third-party binding member APIs.

## Admission and deterministic selection

Definitions reject executable or nonliteral values, escaping inputs and undeclared targets before creating output. An undeclared target cannot silently use the host ABI. Browser extensions, SDK paths and ABI profiles remain explicit and isolated from ambient process environment.

Generation checks exact native identities and stable managed project order, reject collisions or unsafe project names, and verify the complete published selection. Unselected target configuration does not invalidate an unrelated generation; changed selected configuration creates a distinct one. A separate process verifies that dictionary key order does not change the same configuration's identity.

## Publication and readers

Tests exercise same-length changes, corrupt-cache repair, check-only mode and complete output closure. Shared reads are reusable only within each fresh phase; a request waiting for a lock must recheck its inputs. Active consumers protect their generation from replacement, then allow repair after release.

Cancellation or generation failure preserves earlier complete outputs and never publishes a partial closure. Frozen SDK paths select independent headers without mutating process-wide environment. Cases are scheduled sequentially; lock contention and concurrency are created explicitly inside the cases that own them.

## Run and maintain

Use [the validation plan](../../validate-change.md), or diagnose a bounded SDK regression:

```powershell
dotnet test tests/build/bindings/Inno.Build.Bindings.Integration.Tests/Inno.Build.Bindings.Integration.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

A missing SDK or worker fails; a managed test host does not mean the SDK has no native worker. Parent fixtures wait for child processes before cleaning their own files. Compiler deployment, MSBuild binding consumption and real product export stay with [product integration tests](inno-build-tests.md).

[Browse the pinned binding fixtures](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/build/bindings/Inno.Build.Bindings.Integration.Tests).
