---
title: "BrowserWasm32BuildModule"
description: "Reference for BrowserWasm32BuildModule in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.c282a3d423fc6b76
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32BuildModule`

This reference describes `BrowserWasm32BuildModule` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContribution`](#api-71e6697404375b45) | Method |
| [`target`](#api-f3722fa3268840dd) | Property |

## Type declaration

<a id="api-c282a3d423fc6b76"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32BuildModule f62ef6f888fd548f6a019750228ae6edf18ef4c1e2e0f6ecbe3476a1316490a0 -->

```csharp
public static class Inno.Build.BrowserWasm32.BrowserWasm32BuildModule
```

Owns the implemented Browser target facts and complete publication contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/BrowserWasm32BuildModule.cs#L11).

## `CreateContribution`

<a id="api-71e6697404375b45"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator) af931f43ee88b424d3547a1013c8389761b50c20d74fe2749e865d8874aafc21 -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Build.BrowserWasm32.BrowserWasm32BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext context, Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.IPlayerSupportPackValidator supportPackValidator, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator)
```

Contributes the platform's target, product inputs and SDK resolver as one registration.

**Parameter `context`:** The borrowed SDK and execution-host selection.

**Parameter `nativePlan`:** The selected shared Player component closure.

**Parameter `supportPackValidator`:** The borrowed platform and selected static-closure validator.

**Parameter `bindingGenerator`:** The generator configured by this platform integration.

**Returns:** A complete immutable contribution without starting tools or creating files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/BrowserWasm32BuildModule.cs#L37).

## `target`

<a id="api-f3722fa3268840dd"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32BuildModule.target 44688264661a9d0eda1c4cde60b07836705bd18bb8c8404cb8b0efd1bf8dd4fa -->

```csharp
public static Inno.Build.PlatformTargetDescriptor Inno.Build.BrowserWasm32.BrowserWasm32BuildModule.target { get; }
```

Gets the explicit implemented product target, independent of the tool execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/BrowserWasm32BuildModule.cs#L16).
