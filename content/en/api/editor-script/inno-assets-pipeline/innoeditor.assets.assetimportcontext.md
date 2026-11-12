---
title: "AssetImportContext"
description: "Reference for AssetImportContext in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.bf0f2b55b3cbdb14
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetImportContext`

This reference describes `AssetImportContext` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c8c9ca77470d7a85) | Method |
| [`AcquireArtifact`](#api-554c0985352b6c1a) | Method |
| [`DependsOnArtifact`](#api-140a927170edb158) | Method |
| [`DependsOnAsset`](#api-91957aa0ade37747) | Method |
| [`DependsOnAsset`](#api-97e3674c9c12ee2c) | Method |
| [`DependsOnCustomInput`](#api-66f55ed8950322b6) | Method |
| [`DependsOnSource`](#api-d4f4feada707336c) | Method |
| [`ReadSourceBytes`](#api-4c9d540f8b78e3ed) | Method |
| [`ReadSourceUtf8Text`](#api-92898f4cc5e03298) | Method |
| [`ReadUtf8Text`](#api-7f013c9420080662) | Method |
| [```ResolveDependency``1```](#api-a438724a703fed91) | Method |
| [`absolutePath`](#api-827aa649d1126732) | Property |
| [`assetPath`](#api-e3392728787f770e) | Property |
| [`extension`](#api-2375d2cf0491b460) | Property |
| [`importSettings`](#api-11a865f3607172ff) | Property |
| [`persistentId`](#api-6f7b31ed9fc8902c) | Property |
| [`serialization`](#api-944ebc8a45bc55b4) | Property |
| [`services`](#api-7a54bf6b0922e344) | Property |
| [`sourceBytes`](#api-08499fc98cc08793) | Property |
| [`sourceHash`](#api-2c91528cfc7c457e) | Property |

## Type declaration

<a id="api-bf0f2b55b3cbdb14"></a>
<!-- api: T:InnoEditor.Assets.AssetImportContext 10437b50f11e47c26063d3dd92063ce32a93ccc88dd7b6740b4d1dabed954b7c -->

```csharp
public sealed class InnoEditor.Assets.AssetImportContext
```

Collects source data and dependency declarations for one import operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L16).

## `#ctor`

<a id="api-c8c9ca77470d7a85"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.#ctor 075bf15e9f405f058d6fed189dced05431cf7b1642bfd277009c1726bcd0c4dc -->

```csharp
public InnoEditor.Assets.AssetImportContext.AssetImportContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L16).

## `AcquireArtifact`

<a id="api-554c0985352b6c1a"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.AcquireArtifact(System.Guid,System.String) 8b14d5aa3cc2baeedae6eb0d1feed6b7cfb41f6845110c45bf94c87cac4c514f -->

```csharp
public InnoEngine.Assets.ArtifactLease InnoEditor.Assets.AssetImportContext.AcquireArtifact(System.Guid assetId, string outputName)
```

Acquires an immutable dependency output and records its invalidation dependency automatically.

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

**Returns:** A caller-owned lease that must be disposed after reading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L106).

## `DependsOnArtifact`

<a id="api-140a927170edb158"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.DependsOnArtifact(System.Guid) 9e29c1053baf26cb77f0d199c450034e5f46339f4e8dd968a16eb8504db244a3 -->

```csharp
public void InnoEditor.Assets.AssetImportContext.DependsOnArtifact(System.Guid persistentId)
```

Declares an imported artifact that invalidates this imported asset.

**Parameter `persistentId`:** The persistent identity of the artifact owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L301).

## `DependsOnAsset`

<a id="api-91957aa0ade37747"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.DependsOnAsset(InnoEngine.Assets.AssetDependency) 073df606830d4ef3fa9fde0f1eb4962df4c5b9b81778a90109b34de491fd4b58 -->

```csharp
public void InnoEditor.Assets.AssetImportContext.DependsOnAsset(InnoEngine.Assets.AssetDependency dependency)
```

Declares a direct runtime dependency by persistent descriptor.

**Parameter `dependency`:** The persistent dependency descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L243).

## `DependsOnAsset`

<a id="api-97e3674c9c12ee2c"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.DependsOnAsset(InnoEngine.Assets.AssetPath) 72586d6eda9a58ea76d6f0cb1c57b1a1e6ce3d6891c3a22a64a08c77c619818d -->

```csharp
public void InnoEditor.Assets.AssetImportContext.DependsOnAsset(InnoEngine.Assets.AssetPath path)
```

Declares a direct runtime dependency by isolated source path.

**Parameter `path`:** The isolated dependency path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L230).

## `DependsOnCustomInput`

<a id="api-66f55ed8950322b6"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.DependsOnCustomInput(System.String,System.String) 544f25e4c0c3d0110f21ce181ba1e09af23a841bc5f3e845e00e130231d62998 -->

```csharp
public void InnoEditor.Assets.AssetImportContext.DependsOnCustomInput(string key, string fingerprint)
```

Declares a custom deterministic input that invalidates this asset.

**Parameter `key`:** The input identifier.

**Parameter `fingerprint`:** The current deterministic input fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L320).

## `DependsOnSource`

<a id="api-d4f4feada707336c"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.DependsOnSource(InnoEngine.Assets.AssetPath) e55cb41bd9c335a8230b56b4fcbae0f257534f1eaef20a2d631694784217c1d6 -->

```csharp
public void InnoEditor.Assets.AssetImportContext.DependsOnSource(InnoEngine.Assets.AssetPath path)
```

Declares a source file that invalidates this imported asset.

**Parameter `path`:** The isolated dependency path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L285).

## `ReadSourceBytes`

<a id="api-4c9d540f8b78e3ed"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.ReadSourceBytes(InnoEngine.Assets.AssetPath) 131ac61d15bdbfd0205212022d5a1444d1e3bb210b75ef4b1e01bdd5897eed0c -->

```csharp
public System.ReadOnlyMemory<byte> InnoEditor.Assets.AssetImportContext.ReadSourceBytes(InnoEngine.Assets.AssetPath path)
```

Reads another source from the same candidate mount snapshot and records it as an import dependency.

**Parameter `path`:** An isolated path whose mount dependency was declared when it crosses Plugin boundaries.

**Returns:** An immutable source snapshot owned by the import operation.

**Throws `System.InvalidOperationException`:** Thrown when the source crosses an undeclared mount boundary or references the writable Project from a Plugin.

**Throws `System.IO.FileNotFoundException`:** Thrown when the resolved source does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L199).

## `ReadSourceUtf8Text`

<a id="api-92898f4cc5e03298"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.ReadSourceUtf8Text(InnoEngine.Assets.AssetPath) c014e2755b171cd2ff43b3b4880a68e748676a9afc16680eeb80b8faa377e8b2 -->

```csharp
public string InnoEditor.Assets.AssetImportContext.ReadSourceUtf8Text(InnoEngine.Assets.AssetPath path)
```

Reads another source as UTF-8 from the current candidate mount snapshot and records the dependency.

**Parameter `path`:** An isolated source path.

**Returns:** Decoded UTF-8 text without an optional byte-order mark.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L216).

## `ReadUtf8Text`

<a id="api-7f013c9420080662"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.ReadUtf8Text 6550c200e2c85400f83e3b06fe6188549956df8c2a8cbe207083693cf73a9058 -->

```csharp
public string InnoEditor.Assets.AssetImportContext.ReadUtf8Text()
```

Reads the source bytes as UTF-8 text.

**Returns:** The decoded text without an optional byte-order mark.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L179).

## ```ResolveDependency``1```

<a id="api-a438724a703fed91"></a>
<!-- api: M:InnoEditor.Assets.AssetImportContext.ResolveDependency``1(InnoEngine.Assets.AssetPath) 206d77d76c040974a37ebd4da1b1a12e16888bcd3dfeac2dd38effc4a892b1b8 -->

```csharp
public TAsset InnoEditor.Assets.AssetImportContext.ResolveDependency<TAsset>(InnoEngine.Assets.AssetPath path) where TAsset : InnoEngine.Assets.AssetObject
```

Resolves and declares a strongly typed runtime asset dependency during import.

**Type parameter `TAsset`:** Expected asset type.

**Parameter `path`:** Isolated dependency path.

**Returns:** The currently committed dependency asset.

**Throws `System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L263).

## `absolutePath`

<a id="api-827aa649d1126732"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.absolutePath 38f699fb33c0e78a93205fe1ac9e29d21f002b8e3d2903db112146f4300431a1 -->

```csharp
public string InnoEditor.Assets.AssetImportContext.absolutePath { get; }
```

Gets the absolute source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L122).

## `assetPath`

<a id="api-e3392728787f770e"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.assetPath 7eb127cec56b676f57497f9b77b95eecff4a5245b34572eed808ba0c997c2021 -->

```csharp
public InnoEngine.Assets.AssetPath InnoEditor.Assets.AssetImportContext.assetPath { get; }
```

Gets the isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L117).

## `extension`

<a id="api-2375d2cf0491b460"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.extension ef1ad3fc7df02f017f30e7d7db6d2953d29c4beeb70504c2107e5835c43bf276 -->

```csharp
public string InnoEditor.Assets.AssetImportContext.extension { get; }
```

Gets the normalized lower-case source extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L171).

## `importSettings`

<a id="api-11a865f3607172ff"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.importSettings 3695443f9b4973736762cb7f209bfb49b2adfa5922deff84951afbb8652bae50 -->

```csharp
public InnoEngine.Serialization.ISerializable? InnoEditor.Assets.AssetImportContext.importSettings { get; }
```

Gets the settings restored from this source's sidecar against the isolated import generation.
The value is detached and changes made during import are not saved to the sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L166).

## `persistentId`

<a id="api-6f7b31ed9fc8902c"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.persistentId 28877a1409929100a1fa947b992e6ecd78cd0b5253175d9dbfe8fe60e47e4b0b -->

```csharp
public System.Guid InnoEditor.Assets.AssetImportContext.persistentId { get; }
```

Gets the persistent identity assigned to the source asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L137).

## `serialization`

<a id="api-944ebc8a45bc55b4"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.serialization b5b6c888d03643daf5081d41acf7e5cb2687982e2b8cbb5463c4b057783cf23d -->

```csharp
public InnoEngine.Serialization.SerializationRegistry InnoEditor.Assets.AssetImportContext.serialization { get; }
```

Gets the serialization registry bound to the active import generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L149).

## `services`

<a id="api-7a54bf6b0922e344"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.services 45487efbdeab84ee196cc79e1808201d1c7a600e69d5ab919703282e366f2179 -->

```csharp
public InnoEditor.Assets.AssetSerializationServices InnoEditor.Assets.AssetImportContext.services { get; }
```

Gets the narrow structured serialization API bound to this importer candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L160).

## `sourceBytes`

<a id="api-08499fc98cc08793"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.sourceBytes b0948523ece3ee2770b8add8ca1dbc0eaa83461fc3f2cca7896bcec937c06b6d -->

```csharp
public System.ReadOnlyMemory<byte> InnoEditor.Assets.AssetImportContext.sourceBytes { get; }
```

Gets the raw source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L127).

## `sourceHash`

<a id="api-2c91528cfc7c457e"></a>
<!-- api: P:InnoEditor.Assets.AssetImportContext.sourceHash 48e2b22030dc887d35e326223855cc56d3f065e1c2e0a136e0bb685cd4273d79 -->

```csharp
public string InnoEditor.Assets.AssetImportContext.sourceHash { get; }
```

Gets the deterministic source hash.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L132).
