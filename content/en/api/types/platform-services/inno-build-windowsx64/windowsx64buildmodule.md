---
title: "WindowsX64BuildModule"
description: "Reference for WindowsX64BuildModule in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.93ae69e6dcede899
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64BuildModule`

This reference describes `WindowsX64BuildModule` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContribution`](#api-23f7121b1e0f4745) | Method |
| [`target`](#api-14dfa7a6468059d7) | Property |

## Type declaration

<a id="api-93ae69e6dcede899"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64BuildModule cc70d89bef72b6575fd43c08d607e2596550ef0c25835dd6225374aa66c264ac -->

```csharp
public static class Inno.Build.WindowsX64.WindowsX64BuildModule
```

Owns the implemented Windows target facts and complete publication contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/WindowsX64BuildModule.cs#L11).

## `CreateContribution`

<a id="api-23f7121b1e0f4745"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator) c0b1ed86cce8dcf5b66638ec019236e849d7b213711f0e77cf2d91b0867178a5 -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Build.WindowsX64.WindowsX64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext context, Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.Composition.NativeProductContribution editorNativePlan, Inno.Build.Composition.NativeProductContribution shaderToolsPlan, Inno.Build.IPlayerSupportPackValidator supportPackValidator, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator)
```

Contributes the platform's target, product inputs and SDK resolver as one registration.

**Parameter `context`:** The borrowed SDK and execution-host selection.

**Parameter `nativePlan`:** The selected shared Player component closure.

**Parameter `editorNativePlan`:** The explicitly selected Editor component closure for ordinary product builds.

**Parameter `shaderToolsPlan`:** The host-executed offline compiler product for this explicit target.

**Parameter `supportPackValidator`:** The complete borrowed platform and selected component validator.

**Parameter `bindingGenerator`:** The generator configured by this platform integration.

**Returns:** A complete immutable contribution without starting tools or creating files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/WindowsX64BuildModule.cs#L43).

## `target`

<a id="api-14dfa7a6468059d7"></a>
<!-- api: P:Inno.Build.WindowsX64.WindowsX64BuildModule.target a2862673087dffc997115954946946abd46632f322d03ef68f68d015f982f664 -->

```csharp
public static Inno.Build.PlatformTargetDescriptor Inno.Build.WindowsX64.WindowsX64BuildModule.target { get; }
```

Gets the explicit implemented product target, independent of the tool execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/WindowsX64BuildModule.cs#L16).
