---
title: "UiToolchain"
description: "Reference for UiToolchain in Inno.Build.Toolchains.UI."
uid: api.inno.build.toolchains.ui.838b011f9d9ccdbe
kind: api
owners:
  - Inno.Build.Toolchains.UI
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-ui#recipe-and-artifact-contract
---
# `UiToolchain`

This reference describes `UiToolchain` in `Inno.Build.Toolchains.UI`. Read the [shared contract](../../projects/inno-build-toolchains-ui.md#recipe-and-artifact-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-85d9be1d498bf765) | Method |
| [`CreateRecipe`](#api-880170dd20fed08c) | Method |
| [`componentDescriptor`](#api-af0771141ef8797f) | Property |

## Type declaration

<a id="api-838b011f9d9ccdbe"></a>
<!-- api: T:Inno.Build.Toolchains.UI.UiToolchain 3a9e5f2ca32714af8e7fd69b3ecc472af3846d7a1ebbdb2de787173912abbce4 -->

```csharp
public static class Inno.Build.Toolchains.UI.UiToolchain
```

Owns this backend's native recipe while SDK selection remains with the platform provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/build/Inno.Build.Toolchains.UI/UiToolchain.cs#L13).

## `BuildAsync`

<a id="api-85d9be1d498bf765"></a>
<!-- api: M:Inno.Build.Toolchains.UI.UiToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) f6d3650dbfc1530ebc439f6383e5eea2c691bc52349768df901396459423b4f6 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.UI.UiToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds the component using the explicitly selected target SDK and validates the complete native product.

**Parameter `context`:** The operation-owned checkout, configuration, tools and target.

**Parameter `cancellationToken`:** Cancels and drains active tool processes before publication.

**Returns:** The immutable validated product; a failed or canceled candidate is not published.

**Throws `System.InvalidOperationException`:** The SDK is unassigned or native compilation or export validation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/build/Inno.Build.Toolchains.UI/UiToolchain.cs#L47).

## `CreateRecipe`

<a id="api-880170dd20fed08c"></a>
<!-- api: M:Inno.Build.Toolchains.UI.UiToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 027deb14ae4aceff60ea095d5c2fdbe3286898c5539904c7f725012bb91ee9cf -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.UI.UiToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares handwritten source, SDK and bridge requirements without reading generated output.

**Parameter `context`:** The operation with explicit target tools and this component's shared-library options.

**Returns:** The producer's frozen source declaration; the publisher adds selected bridge content and location.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** Target tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses static rather than standalone shared linkage.

**Throws `System.IO.FileNotFoundException`:** The declared build project is absent from the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/build/Inno.Build.Toolchains.UI/UiToolchain.cs#L98).

## `componentDescriptor`

<a id="api-af0771141ef8797f"></a>
<!-- api: P:Inno.Build.Toolchains.UI.UiToolchain.componentDescriptor 7c2d9a36c9467735ff7481ac8ec12cb06804a3ad0f2e7b2999a530b473d1bc23 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.UI.UiToolchain.componentDescriptor { get; }
```

Gets the component's sole source, binding and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/build/Inno.Build.Toolchains.UI/UiToolchain.cs#L18).
