---
title: "MacOSArm64BuildModule"
description: "Reference for MacOSArm64BuildModule in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.696eadcfdd89a7a4
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64BuildModule`

This reference describes `MacOSArm64BuildModule` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContribution`](#api-34607620a4fc6e10) | Method |
| [`target`](#api-10145138dd0b02a4) | Property |

## Type declaration

<a id="api-696eadcfdd89a7a4"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64BuildModule 2344e03f97d417eb757d9d85672d0dd729eca207b90a378fab2ce0bb89438f64 -->

```csharp
public static class Inno.Build.MacOSArm64.MacOSArm64BuildModule
```

Owns the implemented MacOS target facts and complete publication contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/MacOSArm64BuildModule.cs#L11).

## `CreateContribution`

<a id="api-34607620a4fc6e10"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator) 0cd8c4133eabae9f75e4c695f9a1e19c00b1a2ecb5bc8f7cac387247940fac64 -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Build.MacOSArm64.MacOSArm64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext context, Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.Composition.NativeProductContribution editorNativePlan, Inno.Build.Composition.NativeProductContribution shaderToolsPlan, Inno.Build.IPlayerSupportPackValidator supportPackValidator, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator)
```

Contributes the platform's target, product inputs and SDK resolver as one registration.

**Parameter `context`:** The borrowed SDK and execution-host selection.

**Parameter `nativePlan`:** The selected shared Player component closure.

**Parameter `editorNativePlan`:** The explicitly selected Editor component closure for ordinary product builds.

**Parameter `shaderToolsPlan`:** The host-executed offline compiler product for this explicit target.

**Parameter `supportPackValidator`:** The complete borrowed platform and selected component validator.

**Parameter `bindingGenerator`:** The generator configured by this platform integration.

**Returns:** A complete immutable contribution without starting tools or creating files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/MacOSArm64BuildModule.cs#L43).

## `target`

<a id="api-10145138dd0b02a4"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64BuildModule.target 2b865622017ea3302598c0856a9f32b652417536cc7b7468e983c19f45933563 -->

```csharp
public static Inno.Build.PlatformTargetDescriptor Inno.Build.MacOSArm64.MacOSArm64BuildModule.target { get; }
```

Gets the explicit implemented product target, independent of the tool execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/MacOSArm64BuildModule.cs#L16).
