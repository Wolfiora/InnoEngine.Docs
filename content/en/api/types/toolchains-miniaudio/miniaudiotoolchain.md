---
title: "MiniAudioToolchain"
description: "Reference for MiniAudioToolchain in Inno.Build.Toolchains.MiniAudio."
uid: api.inno.build.toolchains.miniaudio.b7087cc3a2b9127b
kind: api
owners:
  - Inno.Build.Toolchains.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-miniaudio#product-ownership-contract
---
# `MiniAudioToolchain`

This reference describes `MiniAudioToolchain` in `Inno.Build.Toolchains.MiniAudio`. Read the [shared contract](../../projects/inno-build-toolchains-miniaudio.md#product-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-df211cc1b1abbeea) | Method |
| [`CreateRecipe`](#api-84e5ab74f8fa7f27) | Method |
| [`componentDescriptor`](#api-46489018ec014f41) | Property |

## Type declaration

<a id="api-b7087cc3a2b9127b"></a>
<!-- api: T:Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain 3d05a0c07cc7ded385b994113af187652542844349846e99148eb9ed11e843dc -->

```csharp
public static class Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain
```

Owns this backend's native recipe while SDK selection remains with the platform provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/build/Inno.Build.Toolchains.MiniAudio/MiniAudioToolchain.cs#L13).

## `BuildAsync`

<a id="api-df211cc1b1abbeea"></a>
<!-- api: M:Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) 5e103d03b0555eeb0e2418f33e0e8ce01551362a2e87af6296538e740192c102 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds the component using the explicitly selected target SDK and validates the complete native product.

**Parameter `context`:** The operation-owned checkout, configuration, tools and target.

**Parameter `cancellationToken`:** Cancels and drains active tool processes before publication.

**Returns:** The immutable validated product; a failed or canceled candidate is not published.

**Throws `System.InvalidOperationException`:** The SDK is unassigned or native compilation or export validation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/build/Inno.Build.Toolchains.MiniAudio/MiniAudioToolchain.cs#L49).

## `CreateRecipe`

<a id="api-84e5ab74f8fa7f27"></a>
<!-- api: M:Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 678e5bdc9ce2c3ca67222ccbbd0fff8b22299c724ad4825a28e16370183993d1 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares the standalone source, SDK and ordered options without compiling or generating bindings.

**Parameter `context`:** The operation with an explicit target toolchain and this component's shared-library options.

**Returns:** A frozen declaration also consumed by BuildAsync; selected binding outputs are added by publication.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** Target tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses static rather than standalone shared linkage.

**Throws `System.IO.FileNotFoundException`:** The component's declared build project is absent from the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/build/Inno.Build.Toolchains.MiniAudio/MiniAudioToolchain.cs#L100).

## `componentDescriptor`

<a id="api-46489018ec014f41"></a>
<!-- api: P:Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.componentDescriptor 49dcc467a03ccfff4c10df866d425a7e802c46aa133c5871f7071719d9a50a59 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.MiniAudio.MiniAudioToolchain.componentDescriptor { get; }
```

Gets the component's sole source, binding and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/build/Inno.Build.Toolchains.MiniAudio/MiniAudioToolchain.cs#L21).
