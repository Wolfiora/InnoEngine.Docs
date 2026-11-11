---
title: "NativeBindingPreparation"
description: "Reference for NativeBindingPreparation in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.b06ba19a53afb378
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingPreparation`

This reference describes `NativeBindingPreparation` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`PrepareAsync`](#api-c083b3f787f93623) | Method |

## Type declaration

<a id="api-b06ba19a53afb378"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingPreparation d1fb1830a7f065deb7fdc4cadd05cabbc94e0ae51632317d8157d3322e8029ae -->

```csharp
public static class Inno.Build.Toolchains.NativeBindingPreparation
```

Prepares a coherent target closure through the borrowed generator, without invoking MSBuild.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingPreparation.cs#L12).

## `PrepareAsync`

<a id="api-c083b3f787f93623"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingPreparation.PrepareAsync(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor},System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions}) 13074a5b4437b99cc9b4dd9078eb65257e554140ad1620156bfbf8853525b688 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBindingGenerationResult> Inno.Build.Toolchains.NativeBindingPreparation.PrepareAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeComponentDescriptor> components, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeComponentBuildOptions>? componentOptions = null)
```

Requests one binding batch for all generated components of a product.

**Parameter `context`:** The operation owning a frozen target selection and configured generator.

**Parameter `components`:** The declared component closure; components without bindings are excluded.

**Parameter `cancellationToken`:** Cancels generation and drains active work before returning.

**Parameter `componentOptions`:** Exact per-owner component choices, or null for component defaults.

**Returns:** An owned generation closure, empty for a product without bindings. Retain it through final consumption.

**Throws `System.InvalidOperationException`:** The tool selection or required binding generator is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingPreparation.cs#L35).
