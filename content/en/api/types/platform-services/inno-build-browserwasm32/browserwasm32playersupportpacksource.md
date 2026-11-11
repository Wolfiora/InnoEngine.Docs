---
title: "BrowserWasm32PlayerSupportPackSource"
description: "Reference for BrowserWasm32PlayerSupportPackSource in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.d5b35760f336625e
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32PlayerSupportPackSource`

This reference describes `BrowserWasm32PlayerSupportPackSource` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.SupportPacks.IPlayerSupportPackSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-45d3102dedc9968f) | Method |
| [`CreatePlanAsync`](#api-6f5f0b89391913b0) | Method |
| [`Validate`](#api-99b7550f9bc8bf9b) | Method |
| [`target`](#api-bcdd8d892e52a109) | Property |

## Type declaration

<a id="api-d5b35760f336625e"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource 9229af74a813e8598f7471f3087f16fba6e4d802204a049e8bbf40339816d32d -->

```csharp
public sealed class Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource : Inno.Build.SupportPacks.IPlayerSupportPackSource
```

Prepares Browser runtime sources and one frozen native closure for isolated publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32PlayerSupportPackSource.cs#L17).

## `#ctor`

<a id="api-45d3102dedc9968f"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.#ctor(Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId,Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator) 8a61a578694b122d2709d4e386d63bf109b4db5b87d241745469b22fe7e8e332 -->

```csharp
public Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.BrowserWasm32PlayerSupportPackSource(Inno.Build.Toolchains.BuildHostDescriptor host, Inno.Build.BuildTargetId toolsTarget, Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator, Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Captures independent Browser product and offline compiler selections.

**Parameter `host`:** The execution machine permitted to run the selected SDK.

**Parameter `toolsTarget`:** The explicit target of offline tools used while preparing the product.

**Parameter `nativePlan`:** The borrowed immutable Player component closure.

**Parameter `bindingGenerator`:** The borrowed generation service used by the Browser component batch.

**Parameter `supportPackValidator`:** The borrowed platform and selected static-closure validator.

**Throws `System.ArgumentNullException`:** The host or native plan is null.

**Throws `System.ArgumentException`:** The offline tool target is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32PlayerSupportPackSource.cs#L49).

## `CreatePlanAsync`

<a id="api-6f5f0b89391913b0"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken) f99770c605bc4080ee79bcf37c4516f39e8a99ea9ee953cb0570c3b60574966e -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPlan> Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext context, System.Threading.CancellationToken cancellationToken)
```

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32PlayerSupportPackSource.cs#L71).

## `Validate`

<a id="api-99b7550f9bc8bf9b"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.Validate(System.String) 4fa0dd334418d5049eb10e959addfc3d7fe153babd07c82bc33519018a5f2e49 -->

```csharp
public void Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.Validate(string directory)
```

Rejects an incomplete or incompatible platform closure.

**Parameter `directory`:** The prepared or installed Support Pack directory.

**Throws `System.IO.InvalidDataException`:** A required platform input is absent or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32PlayerSupportPackSource.cs#L146).

## `target`

<a id="api-bcdd8d892e52a109"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.target cb8bcca1f7862b8027ac3313cdca8488113cfe1d9b212aa39e4319b4a6f95dfa -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.target { get; }
```

Gets the stable target identity implemented by this source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32PlayerSupportPackSource.cs#L68).
