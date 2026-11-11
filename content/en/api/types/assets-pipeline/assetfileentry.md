---
title: "AssetFileEntry"
description: "Reference for AssetFileEntry in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.c6a87deb077d00d0
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetFileEntry`

This reference describes `AssetFileEntry` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Identity.IdentityObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7a4589875c0f9ea0) | Method |
| [`assetPath`](#api-ab746be5cb5ef2b4) | Property |
| [`extension`](#api-ee3ab92b7be13c04) | Property |
| [`isDirectory`](#api-7762459684a74e88) | Property |
| [`isReadOnly`](#api-0902445e3d992e6f) | Property |
| [`isSample`](#api-e984f6f754221597) | Property |
| [`isSampleContent`](#api-b8a2ea658f3f2c8c) | Property |
| [`name`](#api-ca53cc2352f2d8f9) | Property |
| [`nameWithoutExtension`](#api-8f4dde89bb7ea3fa) | Property |
| [`parentAssetPath`](#api-aca4e8ea64ef79a4) | Property |
| [`source`](#api-3f871ca2631ea3f3) | Property |

## Type declaration

<a id="api-c6a87deb077d00d0"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetFileEntry d131476b89c8624e074d43af010a596cce67d4332abd8d7b7587875c6dc6863d -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetFileEntry : Inno.Core.Identity.IdentityObject
```

One node in the asset source filesystem index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L11).

## `#ctor`

<a id="api-7a4589875c0f9ea0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileEntry.#ctor a449f17a386b5c7bb45104f5e63302e3975518ba7b1c64b4c74685c3ec738347 -->

```csharp
public Inno.Assets.Pipeline.AssetFileEntry.AssetFileEntry()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L11).

## `assetPath`

<a id="api-ab746be5cb5ef2b4"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.assetPath 4af2017cd19fbb1aeac7fc3b81de0f582e9ad75bb04213d71a604c956e82d1dd -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetFileEntry.assetPath { get; internal set; }
```

Gets the isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L30).

## `extension`

<a id="api-ee3ab92b7be13c04"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.extension 9e2903fc89d0b812c33cd19c431b168fd87c8c3e2426542ea12ce158fc1bfdb4 -->

```csharp
public string Inno.Assets.Pipeline.AssetFileEntry.extension { get; internal set; }
```

Gets the normalized lower-case file extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L64).

## `isDirectory`

<a id="api-7762459684a74e88"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.isDirectory 49d3623c367a78db0823d8e2099dd75451199811c4696afae24aeedac372f1c9 -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileEntry.isDirectory { get; internal set; }
```

Gets whether the entry represents a directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L60).

## `isReadOnly`

<a id="api-0902445e3d992e6f"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.isReadOnly cb304d69bab0b52bfc71cff8dcc83e79634574d9049c1c42998b5528d35bcb54 -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileEntry.isReadOnly { get; internal set; }
```

Gets whether source mutations are forbidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L40).

## `isSample`

<a id="api-e984f6f754221597"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.isSample 4caac15bddb0f03bf875816af822e46f71ecae0f698fd885c0ad84d35965d4fa -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileEntry.isSample { get; internal set; }
```

Gets whether this entry is the root of an installed Plugin sample awaiting Project import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L45).

## `isSampleContent`

<a id="api-b8a2ea658f3f2c8c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.isSampleContent 1e1a80b690436b6f772751223592f264f6987ac7a6699f88e1a984f94c7981aa -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileEntry.isSampleContent { get; internal set; }
```

Gets whether this entry belongs to an installed Plugin sample subtree awaiting Project import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L50).

## `name`

<a id="api-ca53cc2352f2d8f9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.name c45201cb862643f61a131743ae5493e68dece283f509b64bf4da5921a500d89f -->

```csharp
public string Inno.Assets.Pipeline.AssetFileEntry.name { get; }
```

Gets the final source path segment, or the semantic mount-root label when this entry is a source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L16).

## `nameWithoutExtension`

<a id="api-8f4dde89bb7ea3fa"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.nameWithoutExtension c6d14e89936d731a0535e0484a287ece3e54364864d0c40137043c7578e41c43 -->

```csharp
public string Inno.Assets.Pipeline.AssetFileEntry.nameWithoutExtension { get; }
```

Gets the final source path segment without its last extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L25).

## `parentAssetPath`

<a id="api-aca4e8ea64ef79a4"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.parentAssetPath 84a3ffd701faf4a4f7bc8df3a34ceba50b1f0fe8662a9c05d336a0db131f9098 -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetFileEntry.parentAssetPath { get; internal set; }
```

Gets the isolated parent directory path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L55).

## `source`

<a id="api-3f871ca2631ea3f3"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileEntry.source ed597ed1d1298e8b5e8393542ffc13e6d02dff06414f59c6997e09a4d81805ba -->

```csharp
public Inno.Assets.AssetSourceId Inno.Assets.Pipeline.AssetFileEntry.source { get; }
```

Gets the owning source mount identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileEntry.cs#L35).
