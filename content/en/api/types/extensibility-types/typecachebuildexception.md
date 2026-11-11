---
title: "TypeCacheBuildException"
description: "Reference for TypeCacheBuildException in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.7e0166142ae9cf5e
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `TypeCacheBuildException`

This reference describes `TypeCacheBuildException` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Exception`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-345abf404d40e874) | Method |
| [`loaderExceptions`](#api-847b3aa4d26ef3af) | Property |

## Type declaration

<a id="api-7e0166142ae9cf5e"></a>
<!-- api: T:Inno.Extensibility.Types.TypeCacheBuildException 75dd7e924f577ceb4973fe1b0c9b3d4fff03529dfb193539d3e6f6e229a5a2cf -->

```csharp
public sealed class Inno.Extensibility.Types.TypeCacheBuildException : System.Exception
```

Reports one or more failures encountered while building a type-cache snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheBuildException.cs#L9).

## `#ctor`

<a id="api-345abf404d40e874"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheBuildException.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.Exception}) bd220ae0d05034963dc14467573b2572a0416c47eaa96bc7226f9da8a2f6384a -->

```csharp
public Inno.Extensibility.Types.TypeCacheBuildException.TypeCacheBuildException(string message, System.Collections.Generic.IReadOnlyList<System.Exception> loaderExceptions)
```

Creates an exception for a failed type-cache snapshot build.

**Parameter `message`:** A summary of the build failure.

**Parameter `loaderExceptions`:** The underlying type-loader failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheBuildException.cs#L20).

## `loaderExceptions`

<a id="api-847b3aa4d26ef3af"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCacheBuildException.loaderExceptions a2640e9510e8454654bd685840d45e43f12a992b86b2adb1f260a43dd70623da -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Exception> Inno.Extensibility.Types.TypeCacheBuildException.loaderExceptions { get; }
```

Gets the individual type-loader failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheBuildException.cs#L32).
