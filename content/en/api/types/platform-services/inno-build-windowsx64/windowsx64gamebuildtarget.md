---
title: "WindowsX64GameBuildTarget"
description: "Reference for WindowsX64GameBuildTarget in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.b5cdeab04f9a298f
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64GameBuildTarget`

This reference describes `WindowsX64GameBuildTarget` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IGameBuildTarget`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0af6a0bc7af216cf) | Method |
| [`PackageAsync`](#api-e365d8865642e769) | Method |
| [`Validate`](#api-41c27bf1ccc21a46) | Method |
| [`defaultManagedDeployment`](#api-fd3bbd9ab555393c) | Property |
| [`displayName`](#api-9cbdfcdc81c58cc6) | Property |
| [`id`](#api-dd851144c8b44168) | Property |
| [`runtimeIdentifier`](#api-c66ff44711e87d19) | Property |

## Type declaration

<a id="api-b5cdeab04f9a298f"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64GameBuildTarget 85c6b8eee555c77755ab7d6def91696aecbc38ada42dcb51861db97f9c382c77 -->

```csharp
public sealed class Inno.Build.WindowsX64.WindowsX64GameBuildTarget : Inno.Build.IGameBuildTarget
```

Packages a verified Windows x64 Support Pack as a portable application directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L12).

## `#ctor`

<a id="api-0af6a0bc7af216cf"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.#ctor(Inno.Build.IPlayerSupportPackValidator) 6cc05c9f7da009a11ea7971905662767553344f2ce46a79ef54fe42096f48632 -->

```csharp
public Inno.Build.WindowsX64.WindowsX64GameBuildTarget.WindowsX64GameBuildTarget(Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Creates a platform packager with the complete validator selected by its distribution.

**Parameter `supportPackValidator`:** The borrowed platform and component-closure validator.

**Throws `System.ArgumentNullException`:** The validator is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L25).

## `PackageAsync`

<a id="api-e365d8865642e769"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken) c310ced0fd8753663f240a376ee15a828405bcf216c7d0dec263634c8630647d -->

```csharp
public System.Threading.Tasks.ValueTask<string> Inno.Build.WindowsX64.WindowsX64GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Composes a Windows application directory in isolated staging.

**Parameter `context`:** The verified Support Pack, packaged content, and output staging paths.

**Parameter `cancellationToken`:** The token that cancels composition before commit.

**Returns:** The staged Windows application directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L72).

## `Validate`

<a id="api-41c27bf1ccc21a46"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.Validate(System.String) fa6b030ebb105ba32e2d507b7d065c369bee566d9a64090d1b71dcabc78bd7fe -->

```csharp
public void Inno.Build.WindowsX64.WindowsX64GameBuildTarget.Validate(string directory)
```

Validates the target closure before runtime script compilation.

**Parameter `directory`:** The Support Pack directory selected by the build catalog.

**Throws `System.IO.InvalidDataException`:** The required platform inputs are incomplete or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L40).

## `defaultManagedDeployment`

<a id="api-fd3bbd9ab555393c"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.defaultManagedDeployment 7f28161a8ed6b3eec0658c051a3b1e9ead84f229573a9727efdcb230b19fd112 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.WindowsX64.WindowsX64GameBuildTarget.defaultManagedDeployment { get; }
```

Gets the managed publisher selected when the profile does not specify an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L48).

## `displayName`

<a id="api-9cbdfcdc81c58cc6"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.displayName 4deb83668e4f8b12aab6ee18e342b228972a7f5f521da4bec972b022cf782f00 -->

```csharp
public string Inno.Build.WindowsX64.WindowsX64GameBuildTarget.displayName { get; }
```

Gets the target name presented by authoring hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L56).

## `id`

<a id="api-dd851144c8b44168"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.id a6f9c4aa2c198b6490e912ac1e8eeeb51f87cab747a86ae6fece2e28854d88cc -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.WindowsX64.WindowsX64GameBuildTarget.id { get; }
```

Gets the Windows x64 target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L45).

## `runtimeIdentifier`

<a id="api-c66ff44711e87d19"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64GameBuildTarget.runtimeIdentifier 119f9ce352a98333e0fe99f76e958f8d416e143897844fd553c77fc46683184a -->

```csharp
public string Inno.Build.WindowsX64.WindowsX64GameBuildTarget.runtimeIdentifier { get; }
```

Gets the managed toolchain target identifier required by this platform composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Targets/WindowsX64GameBuildTarget.cs#L51).
