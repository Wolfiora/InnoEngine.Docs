---
title: "ProductNativeBuildResult"
description: "Reference for ProductNativeBuildResult in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.a4841030936f8abe
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ProductNativeBuildResult`

This reference describes `ProductNativeBuildResult` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct>`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0f83108c3965c863) | Method |
| [`Dispose`](#api-47090c9d3ba19bac) | Method |
| [`GetEnumerator`](#api-d469234e13c0b6a0) | Method |
| [`aggregateDirectory`](#api-a4405829c704f381) | Property |
| [`Count`](#api-88b629956c48ec5e) | Property |
| [`Item`](#api-84b0ccd8bf1b949b) | Property |

## Type declaration

<a id="api-a4841030936f8abe"></a>
<!-- api: T:Inno.Build.Toolchains.ProductNativeBuildResult e90ebdccda5b1a290f4e57a4a15e140112e48019ce95834a54a9f34dac78655c -->

```csharp
public sealed class Inno.Build.Toolchains.ProductNativeBuildResult : System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct>, System.IDisposable
```

Owns a complete ordered Native product closure and releases its reading leases together.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L12).

## `#ctor`

<a id="api-0f83108c3965c863"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeBuildResult.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.NativeBindingGenerationResult,System.String) 277b8965ca96b078f41f09b727505f770dc68097fb8f9493998d82a9bc4ae46a -->

```csharp
public Inno.Build.Toolchains.ProductNativeBuildResult.ProductNativeBuildResult(System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBuildProduct> products, Inno.Build.Toolchains.NativeBindingGenerationResult bindings, string? aggregateDirectory = null)
```

Takes ownership of a complete native and binding closure.

**Parameter `products`:** Owned products in dependency order.

**Parameter `bindings`:** The owned matching binding batch.

**Parameter `aggregateDirectory`:** A complete aggregate install directory, or null for individual products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L30).

## `Dispose`

<a id="api-47090c9d3ba19bac"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeBuildResult.Dispose 674d9f1ffed83d06c2a1912cded01ca98a155cdcecad7d0693c129d6f2ad4bef -->

```csharp
public void Inno.Build.Toolchains.ProductNativeBuildResult.Dispose()
```

Releases products in reverse dependency order after all consumers have finished.
Repeated disposal has no effect.

**Throws `System.AggregateException`:** One or more reading owners failed to release after every owner was attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L94).

## `GetEnumerator`

<a id="api-d469234e13c0b6a0"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeBuildResult.GetEnumerator 1c8ad5463936f6c6d331d90b464dca13d18ea623542aa6bab9bc7a3e9910d0c9 -->

```csharp
public System.Collections.Generic.IEnumerator<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.ProductNativeBuildResult.GetEnumerator()
```

Enumerates borrowed products in plan order without transferring their ownership.

**Returns:** An enumerator which must finish before this result is disposed.

**Throws `System.ObjectDisposedException`:** The result has already released its leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L81).

## `aggregateDirectory`

<a id="api-a4405829c704f381"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildResult.aggregateDirectory 02f3f91652ae95ad93ac2f20960ab70cba071904a66b880a27a68d4ef1c70f73 -->

```csharp
public string? Inno.Build.Toolchains.ProductNativeBuildResult.aggregateDirectory { get; }
```

Gets the complete aggregate install directory, or null for individually published products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L48).

## `Count`

<a id="api-88b629956c48ec5e"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildResult.Count 69ad90e86321f58cd73f2046782422ca661f2128f5fcb2e766a92ec3549e449f -->

```csharp
public int Inno.Build.Toolchains.ProductNativeBuildResult.Count { get; }
```

Gets the number of products in the completed build plan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L43).

## `Item`

<a id="api-84b0ccd8bf1b949b"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildResult.Item(System.Int32) 5b471921f1b921b853d017392e07d4624ebc9f85b0730be04590e0bbcf32bcd6 -->

```csharp
public Inno.Build.Toolchains.NativeBuildProduct Inno.Build.Toolchains.ProductNativeBuildResult.this[int index] { get; }
```

Borrows a product whose lease is owned by this result until disposal.

**Parameter `index`:** The zero-based position in the plan's declaration order.

**Returns:** The borrowed product; the caller must finish access before disposing the result.

**Throws `System.ObjectDisposedException`:** The result no longer owns the products.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildResult.cs#L63).
