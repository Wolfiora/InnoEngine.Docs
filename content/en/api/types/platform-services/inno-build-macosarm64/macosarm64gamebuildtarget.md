---
title: "MacOSArm64GameBuildTarget"
description: "Reference for MacOSArm64GameBuildTarget in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.30d57e0cfc7fae92
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64GameBuildTarget`

This reference describes `MacOSArm64GameBuildTarget` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IGameBuildTarget`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-832f3e6eeb2dfd77) | Method |
| [`PackageAsync`](#api-f4ebd03d132ed6fd) | Method |
| [`Validate`](#api-9f3fec00f10206d4) | Method |
| [`defaultManagedDeployment`](#api-b5ed5e67a7ed238c) | Property |
| [`displayName`](#api-a4081fbcf5bda9f1) | Property |
| [`id`](#api-0edf1067fb6c8f71) | Property |
| [`runtimeIdentifier`](#api-155e46dd320bbf98) | Property |

## Type declaration

<a id="api-30d57e0cfc7fae92"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget 809612a1c26bdfbc3c22c0b9dcd480c8fb2626bc3e0840cf621592daacf906ed -->

```csharp
public sealed class Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget : Inno.Build.IGameBuildTarget
```

Packages a verified macOS ARM64 Support Pack as a native application bundle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L13).

## `#ctor`

<a id="api-832f3e6eeb2dfd77"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.#ctor(Inno.Build.IPlayerSupportPackValidator) 9a622ec007be695ffba4e34962e8bf0d077988c1600075c0e777340d682b5b22 -->

```csharp
public Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.MacOSArm64GameBuildTarget(Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Creates a platform packager with the complete validator selected by its distribution.

**Parameter `supportPackValidator`:** The borrowed platform and component-closure validator.

**Throws `System.ArgumentNullException`:** The validator is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L26).

## `PackageAsync`

<a id="api-f4ebd03d132ed6fd"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken) 3c9d56578d16aeff3cc63c36efd2237bf82d0919792748ae910e6f1d301a1fe6 -->

```csharp
public System.Threading.Tasks.ValueTask<string> Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Composes a macOS application bundle in isolated staging.

**Parameter `context`:** The verified Support Pack, packaged content, and output staging paths.

**Parameter `cancellationToken`:** The token that cancels composition before commit.

**Returns:** The staged application bundle path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L73).

## `Validate`

<a id="api-9f3fec00f10206d4"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.Validate(System.String) 196a43d9f503197c994a673d33bc3c11fd76e847eba3959ec6f6df59ba85b41f -->

```csharp
public void Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.Validate(string directory)
```

Validates the target closure before runtime script compilation.

**Parameter `directory`:** The Support Pack directory selected by the build catalog.

**Throws `System.IO.InvalidDataException`:** The required platform inputs are incomplete or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L41).

## `defaultManagedDeployment`

<a id="api-b5ed5e67a7ed238c"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.defaultManagedDeployment 72ae248ef23f40077bffe1ca72eceaa93faa60d3d8a02a38de2cbfe08cdfd6b7 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.defaultManagedDeployment { get; }
```

Gets the managed publisher selected when the profile does not specify an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L49).

## `displayName`

<a id="api-a4081fbcf5bda9f1"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.displayName 33256e52522c73ea38c74a093a06fc12f20220d0b208b488963640a564381a4f -->

```csharp
public string Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.displayName { get; }
```

Gets the target name presented by authoring hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L57).

## `id`

<a id="api-0edf1067fb6c8f71"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.id b48a2fd9b753e1e6737168f40517ac073ad14255483dfd51080e0d6b2ab1a922 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.id { get; }
```

Gets the macOS ARM64 target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L46).

## `runtimeIdentifier`

<a id="api-155e46dd320bbf98"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.runtimeIdentifier 6fa533e52ff34e3787c70c1ab2dc24db6b4ed26dfd21a7be0e14cfb5064d127f -->

```csharp
public string Inno.Build.MacOSArm64.MacOSArm64GameBuildTarget.runtimeIdentifier { get; }
```

Gets the managed toolchain target identifier required by this platform composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Targets/MacOSArm64GameBuildTarget.cs#L52).
