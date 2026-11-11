---
title: "WindowsX64PlayerSupportPackSource"
description: "Reference for WindowsX64PlayerSupportPackSource in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.aa2fd99a36f7416f
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64PlayerSupportPackSource`

This reference describes `WindowsX64PlayerSupportPackSource` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.SupportPacks.IPlayerSupportPackSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41f03571c9c9b5a1) | Method |
| [`CreatePlanAsync`](#api-a09fa95ad4e63499) | Method |
| [`Validate`](#api-02b483415f4b5e2b) | Method |
| [`target`](#api-31ec2796d07c8cbd) | Property |

## Type declaration

<a id="api-aa2fd99a36f7416f"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource 2fef933f73b7c759a32e7b3ac498b7927da9d9e799939a8f7144beef45fc1df2 -->

```csharp
public sealed class Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource : Inno.Build.SupportPacks.IPlayerSupportPackSource
```

Prepares the Windows Player's explicit layout through shared publication mechanisms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64PlayerSupportPackSource.cs#L12).

## `#ctor`

<a id="api-41f03571c9c9b5a1"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.#ctor(Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.BuildHostDescriptor,System.String,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator) 39a226d9e655714f2a0a27d6743d258748bf287c07fee1e593a77e907af76b3d -->

```csharp
public Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.WindowsX64PlayerSupportPackSource(Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.Toolchains.BuildHostDescriptor host, string dotnetHost, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator, Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Captures the selected product closure and tool execution host.

**Parameter `nativePlan`:** The explicit Player component closure.

**Parameter `host`:** The declared machine executing platform tools.

**Parameter `bindingGenerator`:** The borrowed shared binding implementation selected by distribution.

**Parameter `dotnetHost`:** The explicit SDK executable for binding generation.

**Parameter `supportPackValidator`:** The borrowed validator selected by the distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64PlayerSupportPackSource.cs#L34).

## `CreatePlanAsync`

<a id="api-a09fa95ad4e63499"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken) 6fa758960a5563271ed13e351a8f8fd63aae893cca85990476564331cfa506c0 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPlan> Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext context, System.Threading.CancellationToken cancellationToken)
```

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64PlayerSupportPackSource.cs#L55).

## `Validate`

<a id="api-02b483415f4b5e2b"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.Validate(System.String) 88906fc6c9a136b41acfda5b716ea7f6d0bf3162336920023177dcb79fcb13b6 -->

```csharp
public void Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.Validate(string directory)
```

Rejects an incomplete or incompatible platform closure.

**Parameter `directory`:** The prepared or installed Support Pack directory.

**Throws `System.IO.InvalidDataException`:** A required platform input is absent or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64PlayerSupportPackSource.cs#L61).

## `target`

<a id="api-31ec2796d07c8cbd"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.target 167c3df97250515dee3f9b3cb0482ef5e3ce6ad503291126fe866c4a7c251518 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.target { get; }
```

Gets the stable target identity implemented by this source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64PlayerSupportPackSource.cs#L52).
