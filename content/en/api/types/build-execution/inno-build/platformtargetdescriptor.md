---
title: "PlatformTargetDescriptor"
description: "Reference for PlatformTargetDescriptor in Inno.Build."
uid: api.inno.build.011491807c9f206e
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `PlatformTargetDescriptor`

This reference describes `PlatformTargetDescriptor` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dcff370c8af796a9) | Method |
| [`abi`](#api-e314b3496675ca12) | Property |
| [`architecture`](#api-8145ef0936e7c2a2) | Property |
| [`id`](#api-4d11f42154fca77d) | Property |
| [`platform`](#api-e056491794bcfb44) | Property |
| [`runtimeIdentifier`](#api-63342bf22a2cf272) | Property |
| [`supportsEditor`](#api-083806b422d7a925) | Property |

## Type declaration

<a id="api-011491807c9f206e"></a>
<!-- api: T:Inno.Build.PlatformTargetDescriptor 098ad18ffedd28703e7a6aed814cb3b6c209dd8fb935651937cdbf9241a88191 -->

```csharp
public sealed class Inno.Build.PlatformTargetDescriptor
```

Declares immutable product target facts independently of the machine executing build tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L8).

## `#ctor`

<a id="api-dcff370c8af796a9"></a>
<!-- api: M:Inno.Build.PlatformTargetDescriptor.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,System.String,System.Boolean) 50e28e7aee9a67d142da76053d991b6bcaa8ae0b686d055531bd9bb32987ff60 -->

```csharp
public Inno.Build.PlatformTargetDescriptor.PlatformTargetDescriptor(Inno.Build.BuildTargetId id, string platform, string architecture, string abi, string runtimeIdentifier, bool supportsEditor)
```

Creates an explicit platform, processor, ABI and managed-runtime mapping.

**Parameter `id`:** The stable publication target identity.

**Parameter `platform`:** The platform package owning system integration.

**Parameter `architecture`:** The target processor architecture, such as x64, arm64 or wasm32.

**Parameter `abi`:** The native ABI selected by this platform implementation.

**Parameter `runtimeIdentifier`:** The exact managed toolchain runtime identifier.

**Parameter `supportsEditor`:** Whether this implemented target supports the shared Editor product.

**Throws `System.ArgumentException`:** An identity or required target fact is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L34).

## `abi`

<a id="api-e314b3496675ca12"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.abi c04a75f6e67dd2900afb8c85bf96dd1455fef88c9c4bf09e1f491f33fd5c3437 -->

```csharp
public string Inno.Build.PlatformTargetDescriptor.abi { get; }
```

Gets the explicitly selected native ABI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L73).

## `architecture`

<a id="api-8145ef0936e7c2a2"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.architecture 8cd942c95e2d010205075e692b678e294eae62cafba640fa2a98403fc0b67552 -->

```csharp
public string Inno.Build.PlatformTargetDescriptor.architecture { get; }
```

Gets the explicitly declared processor architecture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L68).

## `id`

<a id="api-4d11f42154fca77d"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.id 857e31cbb10380571bbc8b3003cd31207435625dd4de25f717502d32275fc747 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.PlatformTargetDescriptor.id { get; }
```

Gets the stable publication target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L58).

## `platform`

<a id="api-e056491794bcfb44"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.platform 6c767dce1ca809022f19e7f5363f01a0ebcc733a521cd2a2735b6cdc0a0b02b4 -->

```csharp
public string Inno.Build.PlatformTargetDescriptor.platform { get; }
```

Gets the owning platform package.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L63).

## `runtimeIdentifier`

<a id="api-63342bf22a2cf272"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.runtimeIdentifier 4791062ae93eafe8605c737f8d64299c9609954661dbc5c8a3703b9d57bc9ac1 -->

```csharp
public string Inno.Build.PlatformTargetDescriptor.runtimeIdentifier { get; }
```

Gets the managed runtime mapping without deriving it from the target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L78).

## `supportsEditor`

<a id="api-083806b422d7a925"></a>
<!-- api: P:Inno.Build.PlatformTargetDescriptor.supportsEditor 0da43852284f2af275d3512d81fa1b1ca4381f2c9d84486c05e1fdfc19bbbe61 -->

```csharp
public bool Inno.Build.PlatformTargetDescriptor.supportsEditor { get; }
```

Gets whether this target provides an implemented Editor host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PlatformTargetDescriptor.cs#L83).
