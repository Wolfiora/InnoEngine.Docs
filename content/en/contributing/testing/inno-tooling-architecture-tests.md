---
title: Architecture and API boundary tests
description: Verify source policy, compiled public boundaries and documentation contracts.
uid: project.inno-tooling-architecture-tests
kind: project
owners:
  - Inno.Tooling.Architecture.Tests
---
# Architecture and API boundary tests

`Inno.Tooling.Architecture.Tests` calls the public [architecture tool](../../api/projects/inno-tooling-architecture.md) with deliberately valid and invalid fixtures. It checks that the validator detects the intended violation without disabling the real rule or rebuilding the entire Build toolchain for each case.

## Source policy

Temporary solutions have an explicit known baseline for missing product composition. Each added violation must produce the expected additional diagnostic: global using directives, concrete BGFX exposure from Player, hand-built asset resolver context, non-native APIs exposing MiniAudio types, or failure callbacks swallowing retirement errors.

Pending and timeout handling must inspect wrapped exception trees. A valid `Exception` filter using `RetirementPendingException.Find` must not be rejected. These intentionally incomplete fixtures are not runnable engine products.

## Compiled symbol boundaries

`ArchitectureSymbolTests` uses the tool's Roslyn package to compile actual dependency and product assemblies before invoking the public command. It exercises:

- Fields, properties, events, delegates, base types, interfaces and protected extension points.
- Generic constraints, public nested types, arrays, tuples, collections and task results.
- Unsafe pointers, unmanaged function pointers and nested types in closed generic owners.
- Private, private-protected and internal containers that legitimately hide implementation.
- Real BGFX, BGFX Tools, SDL3 and MiniAudio assembly identities, including aliases.
- Concrete adapters exposed by Shell, Player or Editor versus allowed neutral contracts.
- Editor project references, effective visibility and `PrivateAssets="compile"`.
- SDL3 consumer ownership restricted to its declared platform, presentation, native, toolchain and test boundaries.

The matrix verifies static compiled boundaries. It cannot prove arbitrary reflection, dynamic callbacks, native entry points or GC lifetime safe.

## Project references and output ownership

SDK fixtures isolate two unrelated projects: an example can use its own reference closure, not an unrelated assembly merely because that assembly was already built. `Compile Remove`, conditional symbols and design-time `ResolveReferences` determine the actual API inputs without preparing engine products.

Output-owner cases retain stale default outputs while compiling real dependencies. Both independent evaluation and a supplied SDK snapshot must resolve the selected owner's public contracts. Making a required dependency compile-private must fail; ignoring unresolved types cannot turn the result green.

Repository-input cases use public assembly metadata and collectible assemblies to verify declared source ownership. Null, missing, relative, invalid and duplicate declarations are rejected. Public reflection/Emit creates fixtures; it does not inspect production private members.

## Documentation and examples

Structure and contract checks have distinct responsibilities. Fixtures reject missing pages, duplicate project authorities, invalid links/anchors, stale signatures, missing symbols and undocumented external product boundaries. The unified plan avoids repeating the same global structure scan for every owner.

Examples on architecture and category pages participate in compilation as well as project examples. Script examples use separate Runtime and Editor reference fixtures and reject wrong roles, missing references or exposed host implementations. This does not replace compiling examples against actual engine-generated script references.

The same real compiler reports also pass through CI receipt reconciliation. Each logical script assembly retains its own content hash: Runtime examples require the Runtime surface, and Editor examples require both surfaces. Missing or borrowed surfaces cannot be hidden behind a combined identity or a set of framework references.

Documentation command, reference and example tests verify the public adapter and compilation boundaries. Snapshot parsing, concurrent reading and content freshness now belong to [the independent documentation test owner](inno-tooling-documentation-tests.md); they are not duplicated here.

## Run and maintain

Use [the unified plan](../validate-change.md) for current-checkout source, solution, references, compiled API and document obligations. A focused validator diagnostic is:

```powershell
dotnet test tests/tooling/Inno.Tooling.Architecture.Tests/Inno.Tooling.Architecture.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

The suite needs the SDK and local VSTest process communication. Compiled-symbol fixtures produce their own required assemblies; repository symbol acceptance needs matching selected outputs. Tests that capture Console serialize that capture and restore it in cleanup. Follow [suite maintenance](../validate-change.md#extend-a-suite-safely).

[Browse the pinned assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/tooling/Inno.Tooling.Architecture.Tests). CLI routing is verified separately through `BuildApplication.Run`; a fixture's expected diagnostics do not certify the entire current repository.
