---
title: "BrowserWasm32GameBuildTarget"
description: "Reference for BrowserWasm32GameBuildTarget in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.a3a75fee6ab8411b
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32GameBuildTarget`

This reference describes `BrowserWasm32GameBuildTarget` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IGameBuildTarget`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-262016404859f260) | Method |
| [`PackageAsync`](#api-9e9b191942d738da) | Method |
| [`Validate`](#api-44d1ded00b682cf1) | Method |
| [`defaultManagedDeployment`](#api-50f82831dd58db8b) | Property |
| [`displayName`](#api-369036d99455cc65) | Property |
| [`id`](#api-3b74c9b984dbabda) | Property |
| [`runtimeIdentifier`](#api-83e68237a0dadb1c) | Property |

## Type declaration

<a id="api-a3a75fee6ab8411b"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget 2d440c808a0a093bdc1611e6e2301a80d0e00788534c737dc5b785a121f4704e -->

```csharp
public sealed class Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget : Inno.Build.IGameBuildTarget
```

Packages a verified browser Player as an independently hostable static site.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L12).

## `#ctor`

<a id="api-262016404859f260"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.#ctor(Inno.Build.IPlayerSupportPackValidator) 9adebbeeff2538cdd45c120c0e82decf2af84c7013d6ec6ff9ca50f8c3d37ca0 -->

```csharp
public Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.BrowserWasm32GameBuildTarget(Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Creates a site packager bound to the selected native closure validator.

**Parameter `supportPackValidator`:** The borrowed validator for the distribution's browser Support Pack.

**Throws `System.ArgumentNullException`:** The validator is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L26).

## `PackageAsync`

<a id="api-9e9b191942d738da"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken) 9d23f8ba659867e4f697c454d3ef2224b9940797273f826af0dc066b9714061c -->

```csharp
public System.Threading.Tasks.ValueTask<string> Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Composes an independently hostable site from a verified browser Support Pack and content pack.

**Parameter `context`:** The verified runtime and packaged project content.

**Parameter `cancellationToken`:** Cancels copying before the build pipeline commits the site.

**Returns:** The staged static-site directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L73).

## `Validate`

<a id="api-44d1ded00b682cf1"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.Validate(System.String) 8a632752e0f154bbde4f8eff0943baa404c469b7167791137f836ea93081fab3 -->

```csharp
public void Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.Validate(string directory)
```

Validates the target closure before runtime script compilation.

**Parameter `directory`:** The Support Pack directory selected by the build catalog.

**Throws `System.IO.InvalidDataException`:** The required platform inputs are incomplete or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L41).

## `defaultManagedDeployment`

<a id="api-50f82831dd58db8b"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.defaultManagedDeployment def66f8920849fad9e67a7781c684c93d75d86631065a73393359d96c42387e4 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.defaultManagedDeployment { get; }
```

Gets the managed publisher selected when the profile does not specify an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L49).

## `displayName`

<a id="api-369036d99455cc65"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.displayName e11c142958a7b955a0f9a2c1e6995edca2f3ceeb6f8669d7e91cbd1e49e8d7ab -->

```csharp
public string Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.displayName { get; }
```

Gets the name shown by authoring hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L57).

## `id`

<a id="api-3b74c9b984dbabda"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.id 052b2c508edbc4d463315a2164a651d78b2e9a633cfcfaa1d15308f546a28fc3 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.id { get; }
```

Gets the browser WebAssembly target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L46).

## `runtimeIdentifier`

<a id="api-83e68237a0dadb1c"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.runtimeIdentifier a52a9365f92cfa41348d1e988144dc2f0c30ce9197539c8acee8fe64073d4d4a -->

```csharp
public string Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.runtimeIdentifier { get; }
```

Gets the managed toolchain target identifier required by this platform composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Targets/BrowserWasm32GameBuildTarget.cs#L52).
