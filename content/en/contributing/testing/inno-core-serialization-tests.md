---
title: Serialization and generation tests
description: Verify identity rewriting, registry lifetime and retained generation snapshots.
uid: project.inno-core-serialization-tests
kind: project
owners:
  - Inno.Core.Serialization.Tests
---
# Serialization and generation tests

`Inno.Core.Serialization.Tests` verifies the [Serialization contracts](../../api/projects/inno-core-serialization.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite checks nested serialized identity remapping without rewriting raw binary payloads, the pure-marker role of ISerializable, rejection after registry disposal, and captured generations remaining usable across refresh and worker continuation. Managed .NET type/module adapters participate in the actual project references.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Serialization.Tests/Inno.Core.Serialization.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Serialization.Tests/Inno.Core.Serialization.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Serialization Behavior

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Serialization.Tests/SerializationBehaviorTests.cs). Representative entry points:

- `IdentityRemapperRewritesNestedSerializedValuesWithoutChangingRawBinary`
- `ISerializable_IsPureMarkerInterface`
- `PublicOperations_RejectDisposedRegistry`
- `CapturedGeneration_RemainsUsableAcrossRefreshAndWorkerContinuation`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
