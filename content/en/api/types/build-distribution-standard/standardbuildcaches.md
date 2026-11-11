---
title: "StandardBuildCaches"
description: "Reference for StandardBuildCaches in Inno.Build.Distribution.Standard."
uid: api.inno.build.distribution.standard.ea6d9e002cae9c43
kind: api
owners:
  - Inno.Build.Distribution.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-distribution-standard#cache-and-workspace-ownership
---
# `StandardBuildCaches`

This reference describes `StandardBuildCaches` in `Inno.Build.Distribution.Standard`. Read the [shared contract](../../projects/inno-build-distribution-standard.md#cache-and-workspace-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateOwners`](#api-b6b67ab9377b97be) | Method |
| [`CreateShaderWorkspaceAsync`](#api-920b0a8e19a3d7cd) | Method |

## Type declaration

<a id="api-ea6d9e002cae9c43"></a>
<!-- api: T:Inno.Build.Distribution.Standard.StandardBuildCaches 1c1e788f0e8f2cc952295abf34db06accb94ec27cfae698207cdea979dbbbc02 -->

```csharp
public static class Inno.Build.Distribution.Standard.StandardBuildCaches
```

Registers the standard distribution's actual immutable artifact publishers for coordinated cleanup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/build/distributions/Inno.Build.Distribution.Standard/StandardBuildCaches.cs#L15).

## `CreateOwners`

<a id="api-b6b67ab9377b97be"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateOwners(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor}) 25ef827f97b70d2a13cec2c8e2d2dafd0e76faa6a876191173548f040605ac31 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.BuildCacheOwnerDescriptor> Inno.Build.Distribution.Standard.StandardBuildCaches.CreateOwners(string engineRoot, System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeComponentDescriptor> components)
```

Registers exact Native, binding and Support Pack ownership recorded by their publishers.
Unrecorded directories remain outside the cleanup authority.

**Parameter `engineRoot`:** The absolute engine checkout containing the artifact roots.

**Parameter `components`:** The actual registered component owners; shared toolchain roots are registered once.

**Returns:** Immutable owner registrations with current-generation and transitive dependency protection.

**Throws `System.ArgumentException`:** The root is blank or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/build/distributions/Inno.Build.Distribution.Standard/StandardBuildCaches.cs#L67).

## `CreateShaderWorkspaceAsync`

<a id="api-920b0a8e19a3d7cd"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateShaderWorkspaceAsync(System.String,System.Threading.CancellationToken) 46af978540d88dbeb4aa3e8e0b6f20393208562ed9a6816e0465ce410dfce449 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Core.IO.ProcessOwnedDirectory> Inno.Build.Distribution.Standard.StandardBuildCaches.CreateShaderWorkspaceAsync(string engineRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Creates a shader compilation workspace in the registered process-owned build cache.

**Parameter `engineRoot`:** The checkout owning cache maintenance and the source-independent compiler request.

**Parameter `cancellationToken`:** Cancels registration or ownership acquisition before compilation begins.

**Returns:** A fresh directory lease; the caller must retain it until compilation finishes and dispose it afterward.
Remaining claim metadata is retired by the same cache maintenance service.

**Throws `System.IO.IOException`:** The cache boundary or operation ownership cannot be established.

**Throws `System.OperationCanceledException`:** The request was canceled before workspace ownership was returned.

**Throws `System.ArgumentException`:** The checkout root is blank or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/build/distributions/Inno.Build.Distribution.Standard/StandardBuildCaches.cs#L39).
