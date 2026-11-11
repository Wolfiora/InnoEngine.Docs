---
title: "TextToolchain"
description: "Reference for TextToolchain in Inno.Build.Toolchains.Text."
uid: api.inno.build.toolchains.text.766460066ebd3059
kind: api
owners:
  - Inno.Build.Toolchains.Text
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-text#frozen-build-contract
---
# `TextToolchain`

This reference describes `TextToolchain` in `Inno.Build.Toolchains.Text`. Read the [shared contract](../../projects/inno-build-toolchains-text.md#frozen-build-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-1a2afbfb16d3f792) | Method |
| [`CreateRecipe`](#api-f1d440b0eef352fa) | Method |
| [`componentDescriptor`](#api-6ff96f4e06e6e309) | Property |

## Type declaration

<a id="api-766460066ebd3059"></a>
<!-- api: T:Inno.Build.Toolchains.Text.TextToolchain 00f28d93f5b059e4d36367f3775660a04dfa935240f80cd35f0721ab54752df8 -->

```csharp
public static class Inno.Build.Toolchains.Text.TextToolchain
```

Owns this backend's native recipe while SDK selection remains with the platform provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/build/Inno.Build.Toolchains.Text/TextToolchain.cs#L13).

## `BuildAsync`

<a id="api-1a2afbfb16d3f792"></a>
<!-- api: M:Inno.Build.Toolchains.Text.TextToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) 976474e463e4d75c143380e99ea03b1bc3544f73c141daff16167d7046f5e399 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.Text.TextToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds the component using the explicitly selected target SDK and validates the complete native product.

**Parameter `context`:** The operation-owned checkout, configuration, tools and target.

**Parameter `cancellationToken`:** Cancels and drains active tool processes before publication.

**Returns:** The immutable validated product; a failed or canceled candidate is not published.

**Throws `System.InvalidOperationException`:** The SDK is unassigned or native compilation or export validation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/build/Inno.Build.Toolchains.Text/TextToolchain.cs#L47).

## `CreateRecipe`

<a id="api-f1d440b0eef352fa"></a>
<!-- api: M:Inno.Build.Toolchains.Text.TextToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 3aa7417e9d74994b94b617ecf5805115481fcffb4b5901d0c3cbc3eeef660c05 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.Text.TextToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares handwritten source, SDK and bridge requirements without reading generated output.

**Parameter `context`:** The operation with explicit target tools and this component's shared-library options.

**Returns:** The producer's frozen source declaration; the publisher adds selected bridge content and location.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** Target tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses static rather than standalone shared linkage.

**Throws `System.IO.FileNotFoundException`:** The declared build project is absent from the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/build/Inno.Build.Toolchains.Text/TextToolchain.cs#L98).

## `componentDescriptor`

<a id="api-6ff96f4e06e6e309"></a>
<!-- api: P:Inno.Build.Toolchains.Text.TextToolchain.componentDescriptor c3ef6d778c0080bacca90aed1326f02b9ada41cc466cb0e97648ac74deff77f9 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.Text.TextToolchain.componentDescriptor { get; }
```

Gets the component's sole source, binding and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/build/Inno.Build.Toolchains.Text/TextToolchain.cs#L18).
