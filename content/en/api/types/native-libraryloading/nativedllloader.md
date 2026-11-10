---
title: "NativeDllLoader"
description: "Reference for NativeDllLoader in Inno.Native.LibraryLoading."
uid: api.inno.native.libraryloading.a59b5df50444484c
kind: api
owners:
  - Inno.Native.LibraryLoading
apiSurface: source-clr
contracts:
  - api.projects.inno-native-libraryloading#ownership-and-failure-contracts
---
# `NativeDllLoader`

This reference describes `NativeDllLoader` in `Inno.Native.LibraryLoading`. Read the [shared contract](../../projects/inno-native-libraryloading.md#ownership-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`FindNativeFile`](#api-d4f6de88f4f13a13) | Method |
| [`FindNativeLibrary`](#api-eed6375a8e8b128e) | Method |

## Type declaration

<a id="api-a59b5df50444484c"></a>
<!-- api: T:Inno.Native.LibraryLoading.NativeDllLoader 6c93dd3d26373308fa8f20fb7d904c23255d5b168e23a209224e63b3d1e22d33 -->

```csharp
public static class Inno.Native.LibraryLoading.NativeDllLoader
```

Resolves explicitly deployed native binaries and files without consulting repository caches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDllLoader.cs#L10).

## `FindNativeFile`

<a id="api-d4f6de88f4f13a13"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDllLoader.FindNativeFile(System.String) b31632c087365cc2564ee9864b016acd6b8d3a1617910d5502c031dbc5e2a154 -->

```csharp
public static string Inno.Native.LibraryLoading.NativeDllLoader.FindNativeFile(string fileName)
```

Resolves an exact tool or resource alias from the product's explicit native deployment index.

**Parameter `fileName`:** Exact file name to locate.

**Returns:** Full path to the file.

**Throws `System.ArgumentException`:** The file name is empty, contains a path or contains a wildcard.

**Throws `System.IO.FileNotFoundException`:** The index, alias or selected payload is absent.

**Throws `System.IO.InvalidDataException`:** The product's explicit deployment index is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDllLoader.cs#L57).

## `FindNativeLibrary`

<a id="api-eed6375a8e8b128e"></a>
<!-- api: M:Inno.Native.LibraryLoading.NativeDllLoader.FindNativeLibrary(System.String) c460e3340890b800c593684e7c94ec058e3f58544ebd6c98e5c452187d0dc7a1 -->

```csharp
public static string Inno.Native.LibraryLoading.NativeDllLoader.FindNativeLibrary(string libraryName)
```

Resolves one logical module from the product's explicit deployment index without loading it.

**Parameter `libraryName`:** The exact logical library identity declared by the selected product.

**Returns:** The validated absolute library path; ownership is acquired by the consumer's module provider.

**Throws `System.ArgumentException`:** The identity is empty or contains a path or wildcard.

**Throws `System.IO.FileNotFoundException`:** The product index, library declaration or payload is missing.

**Throws `System.IO.InvalidDataException`:** The deployment index is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Interop/native/Inno.Native.LibraryLoading/NativeDllLoader.cs#L32).
