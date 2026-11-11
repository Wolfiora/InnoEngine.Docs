---
title: "AssetSample"
description: "Reference for AssetSample in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.fbb3301a05e67b56
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSample`

This reference describes `AssetSample` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`fileType`](#api-2a7b1dd7c68ea9b4) | Field |
| [`Contains`](#api-570536f49b99cca6) | Method |
| [`GetImportName`](#api-0c3f30917b49977a) | Method |
| [`HasSampleDirectoryName`](#api-2a63ce6d837b204e) | Method |
| [`IsRoot`](#api-6fe115db69c57370) | Method |
| [`IsRuntimeExcluded`](#api-e98ef5d1856d2730) | Method |

## Type declaration

<a id="api-fbb3301a05e67b56"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSample 227724b656d9f982f50ac0aa8a7ef4c2832190b7cdb01b5c08e8f410acfdc32d -->

```csharp
public static class Inno.Assets.Pipeline.AssetSample
```

Defines authoring sample directories and their installed Plugin behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L11).

## `fileType`

<a id="api-2a7b1dd7c68ea9b4"></a>
<!-- api: F:Inno.Assets.Pipeline.AssetSample.fileType 3ea235e12a53432bb8c73dc61a07683e3df96151bbc26ab2ecce87fef6175409 -->

```csharp
public const string Inno.Assets.Pipeline.AssetSample.fileType = ".isample"
```

Gets the logical File Browser type used for a sample directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L16).

## `Contains`

<a id="api-570536f49b99cca6"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSample.Contains(Inno.Assets.AssetPath,System.Boolean) 131ddf659f8512517ea653885c5f324d7dcc074032b2962bb77bff9ba7c98516 -->

```csharp
public static bool Inno.Assets.Pipeline.AssetSample.Contains(Inno.Assets.AssetPath path, bool isDirectory)
```

Determines whether a source path is a sample directory or is contained by one.

**Parameter `path`:** The isolated source path to inspect.

**Parameter `isDirectory`:** Whether the path itself represents a directory.

**Returns:** `true` when the path belongs to an installed Plugin source and any directory
    segment starts with `~`. Project content is never hidden from authoring import by this method.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L64).

## `GetImportName`

<a id="api-0c3f30917b49977a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSample.GetImportName(Inno.Assets.AssetPath) 0af725212b71dcc2ba9bc7c4e27600cf92e7126b1272fe3017143ec0d84bb5eb -->

```csharp
public static string Inno.Assets.Pipeline.AssetSample.GetImportName(Inno.Assets.AssetPath path)
```

Gets the original sample directory name for a writable Project copy.

**Parameter `path`:** A sample directory path whose final segment starts with `~`.

**Returns:** The unchanged final directory segment, including every leading `~`.

**Throws `System.ArgumentException`:** Thrown when `path` does not identify a sample directory or has no
usable name after its prefix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L84).

## `HasSampleDirectoryName`

<a id="api-2a63ce6d837b204e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSample.HasSampleDirectoryName(Inno.Assets.AssetPath) df88e9271ff305a65572d1ad469f50c0c99045446f36b0462cc65c4e0ca0fc0c -->

```csharp
public static bool Inno.Assets.Pipeline.AssetSample.HasSampleDirectoryName(Inno.Assets.AssetPath path)
```

Determines whether the final path segment uses the sample-directory naming convention.

**Parameter `path`:** The isolated source path to inspect.

**Returns:** `true` when the final segment starts with `~`, regardless of whether
    the path belongs to the writable Project source or an installed Plugin source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L28).

## `IsRoot`

<a id="api-6fe115db69c57370"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSample.IsRoot(Inno.Assets.AssetPath) 97d668814841ea91da52cdd2324c4480827b35ddc1631891e8610cc19f5cbbf6 -->

```csharp
public static bool Inno.Assets.Pipeline.AssetSample.IsRoot(Inno.Assets.AssetPath path)
```

Determines whether the final segment identifies a sample directory.

**Parameter `path`:** The isolated source path to inspect.

**Returns:** `true` when the path belongs to an installed Plugin source and its final
    segment starts with `~`. A Project directory with the same name remains normal writable
    authoring content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L46).

## `IsRuntimeExcluded`

<a id="api-e98ef5d1856d2730"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSample.IsRuntimeExcluded(Inno.Assets.AssetPath,System.Boolean) 9897e0dd2f03edfc3b6eb9607d6fe35d1013a64b167beffd06256c66c74d19fb -->

```csharp
public static bool Inno.Assets.Pipeline.AssetSample.IsRuntimeExcluded(Inno.Assets.AssetPath path, bool isDirectory)
```

Determines whether a path belongs to an authoring-only sample subtree that must not enter a
Player runtime closure.

**Parameter `path`:** The isolated source path to inspect.

**Parameter `isDirectory`:** Whether the path itself represents a directory.

**Returns:** `true` when any directory segment starts with `~`, including in the
    writable Project source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSample.cs#L108).
