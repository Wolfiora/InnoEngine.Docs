---
title: "NativeDeploymentIndex"
description: "Reference for NativeDeploymentIndex in Inno.Native.LibraryLoading."
uid: api.inno.native.libraryloading.2b35cbcbccbb04f3
kind: api
owners:
  - Inno.Native.LibraryLoading
apiSurface: source-clr
contracts:
  - api.projects.inno-native-libraryloading#ownership-and-failure-contracts
---
# `NativeDeploymentIndex`

This reference describes `NativeDeploymentIndex` in `Inno.Native.LibraryLoading`. Read the [shared contract](../../projects/inno-native-libraryloading.md#ownership-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`C_FILE_NAME`](#api-db27cea2e426c97e) | Field |
| [`#ctor`](#api-9340e5954401aba0) | Method |
| [`Decode`](#api-76456c674b4d7eb3) | Method |
| [`Encode`](#api-8d8ba2d448d9d802) | Method |
| [`ResolveFile`](#api-a9cba5bfae7cc8e7) | Method |
| [`ResolveLibrary`](#api-4cc55c8a58939258) | Method |
| [`files`](#api-3e1957da382762a2) | Property |
| [`libraries`](#api-1ab183a2227ef957) | Property |
| [`targetId`](#api-ea6b568079241692) | Property |

## Type declaration

<a id="api-2b35cbcbccbb04f3"></a>
<!-- api: T:Inno.Native.LibraryLoading.NativeDeploymentIndex 41068dc5123fad39fe49a609d95e674efd19020dcceb4b4b6ac775d6d2e45182 -->

```csharp
public sealed class Inno.Native.LibraryLoading.NativeDeploymentIndex
```

Describes exact native library and tool locations selected by a product's deployment owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L14).

## `C_FILE_NAME`

<a id="api-db27cea2e426c97e"></a>
<!-- api: F:Inno.Native.LibraryLoading.NativeDeploymentIndex.C_FILE_NAME 6fc5bb085b57a03623ae964ce3bd5df518254e5950f75b455e6cc35033e850ea -->

```csharp
public const string Inno.Native.LibraryLoading.NativeDeploymentIndex.C_FILE_NAME = "Deployment.index"
```

Gets the index filename inside the explicitly deployed native directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L19).

## `#ctor`

<a id="api-9340e5954401aba0"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDeploymentIndex.#ctor(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 303aa37b963b9be2e7d8e0e1d0d48860a5ab98df9fad52d7e0e0854fe1aa0edb -->

```csharp
public Inno.Native.LibraryLoading.NativeDeploymentIndex.NativeDeploymentIndex(string targetId, System.Collections.Generic.IReadOnlyDictionary<string, string> libraries, System.Collections.Generic.IReadOnlyDictionary<string, string> files)
```

Freezes one product target and its explicit aliases without detecting the host OS.

**Parameter `targetId`:** The exact deployment target selected by the product.

**Parameter `libraries`:** Logical import names mapped to contained paths relative to the native directory.

**Parameter `files`:** Exact tool or resource aliases mapped to contained deployment paths.

**Throws `System.ArgumentException`:** A target, alias or contained path is invalid.

**Throws `System.ArgumentNullException`:** A mapping is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L39).

## `Decode`

<a id="api-76456c674b4d7eb3"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDeploymentIndex.Decode(System.ReadOnlySpan{System.Byte}) 24ca265f3f31135a8834f373f5f2319b73efe433bd3fdda65ef0d67850e9829c -->

```csharp
public static Inno.Native.LibraryLoading.NativeDeploymentIndex Inno.Native.LibraryLoading.NativeDeploymentIndex.Decode(System.ReadOnlySpan<byte> bytes)
```

Reads only the current index format and validates its complete path mappings.

**Parameter `bytes`:** Complete encoded bytes borrowed for this call.

**Returns:** An immutable layout; malformed or incomplete input is rejected.

**Throws `System.IO.InvalidDataException`:** The index is malformed, incomplete or contains invalid mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L97).

## `Encode`

<a id="api-8d8ba2d448d9d802"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDeploymentIndex.Encode 84be1e08de5b3c8f4f77e7a7bb734bd014fe0f51ba5651c69c2cc71877206590 -->

```csharp
public byte[] Inno.Native.LibraryLoading.NativeDeploymentIndex.Encode()
```

Encodes the deployment layout without recording SDK or build cache locations.

**Returns:** Deterministic UTF-8 bytes for the current strict index format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L71).

## `ResolveFile`

<a id="api-a9cba5bfae7cc8e7"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDeploymentIndex.ResolveFile(System.String,System.String) e3fc541d55f2f4606b7c2392b77eb0ac4de20b4572bd94e8b82da1260ac2f27c -->

```csharp
public string Inno.Native.LibraryLoading.NativeDeploymentIndex.ResolveFile(string nativeDirectory, string name)
```

Resolves a tool or resource alias from the explicit deployment mappings.

**Parameter `nativeDirectory`:** The absolute directory containing the index and payload.

**Parameter `name`:** The exact registered alias.

**Returns:** The existing contained file path.

**Throws `System.IO.FileNotFoundException`:** The alias is absent or its payload is missing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L150).

## `ResolveLibrary`

<a id="api-4cc55c8a58939258"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDeploymentIndex.ResolveLibrary(System.String,System.String) 96b57dbc7a46bf66b8e8ddb49c4df926626a2ffb8cc17d3a04f3f5854c9a5dca -->

```csharp
public string Inno.Native.LibraryLoading.NativeDeploymentIndex.ResolveLibrary(string nativeDirectory, string name)
```

Resolves a selected library without scanning directories or guessing suffixes.

**Parameter `nativeDirectory`:** The absolute directory whose owner deployed the index and payload.

**Parameter `name`:** The exact logical import name.

**Returns:** The existing contained library path.

**Throws `System.IO.FileNotFoundException`:** The name is absent or the deployed payload is missing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L130).

## `files`

<a id="api-3e1957da382762a2"></a>
<!-- api: P:Inno.Native.LibraryLoading.NativeDeploymentIndex.files f20a167e04904409687a1f3f5cfc4a29a2e1f86ddf9a451d1962153ef5e32c2e -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Native.LibraryLoading.NativeDeploymentIndex.files { get; }
```

Gets immutable exact tool and resource mappings selected by composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L63).

## `libraries`

<a id="api-1ab183a2227ef957"></a>
<!-- api: P:Inno.Native.LibraryLoading.NativeDeploymentIndex.libraries 96c6afe5ce80136f32f446cb1b2c580d36f7cea470ef34baa1b5f92dce39b848 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Native.LibraryLoading.NativeDeploymentIndex.libraries { get; }
```

Gets immutable logical library mappings selected by composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L58).

## `targetId`

<a id="api-ea6b568079241692"></a>
<!-- api: P:Inno.Native.LibraryLoading.NativeDeploymentIndex.targetId 5eb7cdea3f32025452b5f0cf8f407ab100828720aa45129ed2913004dcaebb05 -->

```csharp
public string Inno.Native.LibraryLoading.NativeDeploymentIndex.targetId { get; }
```

Gets the explicit product target, without reconstructing it from OS or CPU names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDeploymentIndex.cs#L53).
