---
title: "NativeComponentBuildOptions"
description: "Reference for NativeComponentBuildOptions in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.b05d894e634861e1
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeComponentBuildOptions`

This reference describes `NativeComponentBuildOptions` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bd366f9911b12e13) | Method |
| [`bindingIncludeDirectories`](#api-056a665e904ddca4) | Property |
| [`bindingLibraryName`](#api-d3409c6c4392ed23) | Property |
| [`cmakeArguments`](#api-752694328cba8a50) | Property |
| [`inputPaths`](#api-b8b496060446f5f3) | Property |
| [`libraryKind`](#api-f3c9d2713e00e5fb) | Property |
| [`linkPlan`](#api-e9ccca055ae8d066) | Property |

## Type declaration

<a id="api-b05d894e634861e1"></a>
<!-- api: T:Inno.Build.Toolchains.NativeComponentBuildOptions e68168750478f563802ba9b2be757d362385350cbadf1bb4a70ad2d36dc5f77e -->

```csharp
public sealed class Inno.Build.Toolchains.NativeComponentBuildOptions
```

Freezes product-owned linkage, ordered component definitions and their configuration inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L27).

## `#ctor`

<a id="api-bd366f9911b12e13"></a>
<!-- api: M:Inno.Build.Toolchains.NativeComponentBuildOptions.#ctor(Inno.Build.Toolchains.NativeLibraryKind,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String,System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan) 6290de5cf8acc140a6de577e347efe6e541105d9fe51c7fa872b5ec0a91ad461 -->

```csharp
public Inno.Build.Toolchains.NativeComponentBuildOptions.NativeComponentBuildOptions(Inno.Build.Toolchains.NativeLibraryKind libraryKind, System.Collections.Generic.IEnumerable<string>? cmakeArguments = null, System.Collections.Generic.IEnumerable<string>? inputPaths = null, string? bindingLibraryName = null, System.Collections.Generic.IEnumerable<string>? bindingIncludeDirectories = null, Inno.Build.Toolchains.NativeLinkPlan? linkPlan = null)
```

Captures component configuration without selecting an SDK or starting a build.

**Parameter `libraryKind`:** The explicitly requested linkage; a recipe must support it before execution starts.

**Parameter `cmakeArguments`:** Ordered, unique CMake definitions belonging to this component, excluding SDK and linkage selection.

**Parameter `inputPaths`:** Portable checkout-relative configuration files included in content hashing and stability checks.

**Parameter `linkPlan`:** Component-specific platform link settings, or null for the selected SDK plan.

**Parameter `bindingLibraryName`:** The explicit native import identity, or null to retain the component identity.

**Parameter `bindingIncludeDirectories`:** Additional checkout-relative binding headers owned by an integration.

**Throws `System.ArgumentException`:** Linkage is invalid, definitions are ambiguous or override SDK selection, or an input escapes the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L55).

## `bindingIncludeDirectories`

<a id="api-056a665e904ddca4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.bindingIncludeDirectories 50d8f11e652512fde4a48a4225138e1e9f3868a59d51b4640a3c96954823bc7d -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeComponentBuildOptions.bindingIncludeDirectories { get; }
```

Gets additional checkout-relative binding header roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L116).

## `bindingLibraryName`

<a id="api-d3409c6c4392ed23"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.bindingLibraryName a44b6d74d608847c449e1b48ca992a58b228a98f11283041a4658f7e680dd221 -->

```csharp
public string? Inno.Build.Toolchains.NativeComponentBuildOptions.bindingLibraryName { get; }
```

Gets the explicit native import identity, or null for the component default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L106).

## `cmakeArguments`

<a id="api-752694328cba8a50"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.cmakeArguments 3586389cd00cb131a75c77a30de3fb80226f7cbf37cb5a7cec2c91e905c8008e -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeComponentBuildOptions.cmakeArguments { get; }
```

Gets the immutable ordered component definitions; order contributes to artifact identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L96).

## `inputPaths`

<a id="api-b8b496060446f5f3"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.inputPaths 89f5a348b17567219a65a3cd29317eb2890c7b6e1de9985fd633ae91e5e540e4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeComponentBuildOptions.inputPaths { get; }
```

Gets logical configuration input paths whose actual bytes participate in the recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L101).

## `libraryKind`

<a id="api-f3c9d2713e00e5fb"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.libraryKind 28ccd8895a9a52c1cd2335a9c903a79ecee0bad61dd12bd5293f0622a0014012 -->

```csharp
public Inno.Build.Toolchains.NativeLibraryKind Inno.Build.Toolchains.NativeComponentBuildOptions.libraryKind { get; }
```

Gets the linkage selected by the product rather than by the execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L91).

## `linkPlan`

<a id="api-e9ccca055ae8d066"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentBuildOptions.linkPlan fc99bc5c11958631f39c1ac91b04530b4bb8bb0a1c33be54b371e751f876b038 -->

```csharp
public Inno.Build.Toolchains.NativeLinkPlan? Inno.Build.Toolchains.NativeComponentBuildOptions.linkPlan { get; }
```

Gets component-specific platform link settings, or null for the target defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentBuildOptions.cs#L111).
