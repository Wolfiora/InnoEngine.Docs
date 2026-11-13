---
title: Plugin source and snapshot tests
description: Verify immutable plugin publication, cache validation and activation.
uid: project.inno-plugins-tests
kind: project
owners:
  - Inno.Plugins.Tests
---
# Plugin source and snapshot tests

`Inno.Plugins.Tests` verifies the [Plugins contracts](../../../architecture/projects/inno-plugins-authoring.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Plugin source tests reject corrupt materialized caches and rebuild them without changing package identity. Concurrent scans publish one complete immutable snapshot rather than mutable catalog or manifest state. Validated code plugins activate through their actual authoring, asset and module boundaries. Cache validation is separate from claiming that every platform can load a plugin.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/plugins/Inno.Plugins.Tests/Inno.Plugins.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/plugins/Inno.Plugins.Tests/Inno.Plugins.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Plugin Source Service

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/plugins/Inno.Plugins.Tests/PluginSourceServiceTests.cs). Representative entry points:

- `CorruptedMaterializedCacheIsRejectedAndCanBeRebuiltWithoutChangingPackageIdentity`
- `ConcurrentScansPublishOneCompleteImmutableSnapshot`
- `PublishedPluginSnapshotsDoNotExposeMutableCatalogOrManifestState`
- `CodePluginActivatesImmediatelyAfterValidation`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
