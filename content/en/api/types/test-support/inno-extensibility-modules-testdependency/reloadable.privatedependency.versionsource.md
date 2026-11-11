---
title: "Reloadable.PrivateDependency.VersionSource"
description: "Reference for Reloadable.PrivateDependency.VersionSource in Inno.Extensibility.Modules.TestDependency."
uid: api.inno.extensibility.modules.testdependency.4cf333fe028c4867
kind: api
owners:
  - Inno.Extensibility.Modules.TestDependency
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules-testdependency
---
# `Reloadable.PrivateDependency.VersionSource`

This reference describes `Reloadable.PrivateDependency.VersionSource` in `Inno.Extensibility.Modules.TestDependency`. Read the [shared contract](../../../../contributing/testing/support/inno-extensibility-modules-testdependency.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`baseVersion`](#api-2d776909cdd34679) | Property |

## Type declaration

<a id="api-4cf333fe028c4867"></a>
<!-- api: T:Reloadable.PrivateDependency.VersionSource cc89043516eb4b46f352ba960054c53773a64effae47ec00ba50d929be4d94f7 -->

```csharp
public static class Reloadable.PrivateDependency.VersionSource
```

Provides a private module dependency whose value exposes the selected generation's dependency resolution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestDependency/VersionSource.cs#L6).

## `baseVersion`

<a id="api-2d776909cdd34679"></a>
<!-- api: P:Reloadable.PrivateDependency.VersionSource.baseVersion 354417ad7d5245a6ced289df9c2e06454d0f4a14cbd884fe713c6973606f5a86 -->

```csharp
public static int Reloadable.PrivateDependency.VersionSource.baseVersion { get; }
```

Gets the fixed base value used to distinguish the two reloadable module implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestDependency/VersionSource.cs#L11).
