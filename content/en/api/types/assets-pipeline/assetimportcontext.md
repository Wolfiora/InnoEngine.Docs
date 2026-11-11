---
title: "AssetImportContext"
description: "Reference for AssetImportContext in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.cbea6cea61b0ca34
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImportContext`

This reference describes `AssetImportContext` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-a7b495bf9c8f4d16) | Method |
| [`DependsOnArtifact`](#api-9def9bb729f470c8) | Method |
| [`DependsOnAsset`](#api-17b1222001e1578c) | Method |
| [`DependsOnAsset`](#api-173618eb12b73fd8) | Method |
| [`DependsOnCustomInput`](#api-0e0d28372dec4cca) | Method |
| [`DependsOnSource`](#api-cf006c0a26a6bc56) | Method |
| [`ReadSourceBytes`](#api-31e7ccdb0bcee226) | Method |
| [`ReadSourceUtf8Text`](#api-8f10a8ce393759e0) | Method |
| [`ReadUtf8Text`](#api-c22e4f9750881bff) | Method |
| [```ResolveDependency``1```](#api-8358921b59686d0c) | Method |
| [`absolutePath`](#api-8dd3242b903701d7) | Property |
| [`assetPath`](#api-5cedbe3f4799759e) | Property |
| [`extension`](#api-d5c18b9d10803615) | Property |
| [`importSettings`](#api-48ab3cd8d56d6ef5) | Property |
| [`persistentId`](#api-f161271884a0cd57) | Property |
| [`references`](#api-352d7d5de4c79c57) | Property |
| [`serialization`](#api-e7acb920a11f50a8) | Property |
| [`services`](#api-793f9e1e781c4494) | Property |
| [`sourceBytes`](#api-fefc29f34b296527) | Property |
| [`sourceHash`](#api-ca7cf509219d8322) | Property |
| [`types`](#api-4a2726e30e1f0f7d) | Property |

## Type declaration

<a id="api-cbea6cea61b0ca34"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportContext de37aa617f528124905cadc4a8e1b45b11b636d0c8ab5f08c60463aec69aab4f -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImportContext
```

Collects source data and dependency declarations for one import operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L16).

## `AcquireArtifact`

<a id="api-a7b495bf9c8f4d16"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.AcquireArtifact(System.Guid,System.String) 1a1d44193785399b6dc5cba5524ce1b2aeafb376b4b681963a7ab888dc6005ed -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.Pipeline.AssetImportContext.AcquireArtifact(System.Guid assetId, string outputName)
```

Acquires an immutable dependency output and records its invalidation dependency automatically.

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

**Returns:** A caller-owned lease that must be disposed after reading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L106).

## `DependsOnArtifact`

<a id="api-9def9bb729f470c8"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.DependsOnArtifact(System.Guid) e369a0d316047c60b694f7cb7943ce83e7a0b3afe2771e6c8850a724f59edcd1 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportContext.DependsOnArtifact(System.Guid persistentId)
```

Declares an imported artifact that invalidates this imported asset.

**Parameter `persistentId`:** The persistent identity of the artifact owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L301).

## `DependsOnAsset`

<a id="api-17b1222001e1578c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.DependsOnAsset(Inno.Assets.AssetDependency) 5a98fa30b89e93cd88b1b77f885f444862d8cc070062198926575b55b9c12349 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportContext.DependsOnAsset(Inno.Assets.AssetDependency dependency)
```

Declares a direct runtime dependency by persistent descriptor.

**Parameter `dependency`:** The persistent dependency descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L243).

## `DependsOnAsset`

<a id="api-173618eb12b73fd8"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.DependsOnAsset(Inno.Assets.AssetPath) b5b5327ed31054b35d147cac9bcde30d88b773772d1595f646cdf2f29c941d88 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportContext.DependsOnAsset(Inno.Assets.AssetPath path)
```

Declares a direct runtime dependency by isolated source path.

**Parameter `path`:** The isolated dependency path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L230).

## `DependsOnCustomInput`

<a id="api-0e0d28372dec4cca"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.DependsOnCustomInput(System.String,System.String) 8edb57f21bfcd1509edf3663bff6fb1d3aa3522407e4d5e0b6fd81e670dc0358 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportContext.DependsOnCustomInput(string key, string fingerprint)
```

Declares a custom deterministic input that invalidates this asset.

**Parameter `key`:** The input identifier.

**Parameter `fingerprint`:** The current deterministic input fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L320).

## `DependsOnSource`

<a id="api-cf006c0a26a6bc56"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.DependsOnSource(Inno.Assets.AssetPath) 51b881bdcbc4ecd7e05135621eb0a8e8a345d1a34a6e072c877d0a083e3001a2 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportContext.DependsOnSource(Inno.Assets.AssetPath path)
```

Declares a source file that invalidates this imported asset.

**Parameter `path`:** The isolated dependency path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L285).

## `ReadSourceBytes`

<a id="api-31e7ccdb0bcee226"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.ReadSourceBytes(Inno.Assets.AssetPath) 21883d4578d1511d4a768ba4d0eb64b521d198f48d3975e2dd53abf062b9d23a -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Assets.Pipeline.AssetImportContext.ReadSourceBytes(Inno.Assets.AssetPath path)
```

Reads another source from the same candidate mount snapshot and records it as an import dependency.

**Parameter `path`:** An isolated path whose mount dependency was declared when it crosses Plugin boundaries.

**Returns:** An immutable source snapshot owned by the import operation.

**Throws `System.InvalidOperationException`:** Thrown when the source crosses an undeclared mount boundary or references the writable Project from a Plugin.

**Throws `System.IO.FileNotFoundException`:** Thrown when the resolved source does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L199).

## `ReadSourceUtf8Text`

<a id="api-8f10a8ce393759e0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.ReadSourceUtf8Text(Inno.Assets.AssetPath) 477e026642f352264b486a8725bd715174ddda33b062d6a66057aee236a0cbfb -->

```csharp
public string Inno.Assets.Pipeline.AssetImportContext.ReadSourceUtf8Text(Inno.Assets.AssetPath path)
```

Reads another source as UTF-8 from the current candidate mount snapshot and records the dependency.

**Parameter `path`:** An isolated source path.

**Returns:** Decoded UTF-8 text without an optional byte-order mark.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L216).

## `ReadUtf8Text`

<a id="api-c22e4f9750881bff"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.ReadUtf8Text 0dcd2dfccbb566c2a8027e3d0b642d5ed83e088819419bfe4bef0262f450ace3 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportContext.ReadUtf8Text()
```

Reads the source bytes as UTF-8 text.

**Returns:** The decoded text without an optional byte-order mark.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L179).

## ```ResolveDependency``1```

<a id="api-8358921b59686d0c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportContext.ResolveDependency``1(Inno.Assets.AssetPath) bef594343e9679c393bd56d98fbb32c6f6293a5ba998c9931e0558dcd104c0d6 -->

```csharp
public TAsset Inno.Assets.Pipeline.AssetImportContext.ResolveDependency<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Resolves and declares a strongly typed runtime asset dependency during import.

**Type parameter `TAsset`:** Expected asset type.

**Parameter `path`:** Isolated dependency path.

**Returns:** The currently committed dependency asset.

**Throws `System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L263).

## `absolutePath`

<a id="api-8dd3242b903701d7"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.absolutePath 31d1ad0e945fa21f13826429f2be8a399397581071156a4b32b5504fa22064ab -->

```csharp
public string Inno.Assets.Pipeline.AssetImportContext.absolutePath { get; }
```

Gets the absolute source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L122).

## `assetPath`

<a id="api-5cedbe3f4799759e"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.assetPath 877a6301087da516ab3ffe9af81a5f0b5bca6f077471b9cf58e9d1f47ccf8000 -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetImportContext.assetPath { get; }
```

Gets the isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L117).

## `extension`

<a id="api-d5c18b9d10803615"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.extension 95fbf3c96c4b94580a3d1ee3aa1d5e59683f6fed775bb659aea1252aaebfefd3 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportContext.extension { get; }
```

Gets the normalized lower-case source extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L171).

## `importSettings`

<a id="api-48ab3cd8d56d6ef5"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.importSettings 7e8ee5468de266c81058eee1822b0956afe64f9625dc4c58b694e499ecce36c7 -->

```csharp
public Inno.Core.Serialization.ISerializable? Inno.Assets.Pipeline.AssetImportContext.importSettings { get; internal set; }
```

Gets the settings restored from this source's sidecar against the isolated import generation.
The value is detached and changes made during import are not saved to the sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L166).

## `persistentId`

<a id="api-f161271884a0cd57"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.persistentId 93fd71a73141dbe2fa7d64095ed7e963d8da3814945c2a3cc2808ead1ce95341 -->

```csharp
public System.Guid Inno.Assets.Pipeline.AssetImportContext.persistentId { get; }
```

Gets the persistent identity assigned to the source asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L137).

## `references`

<a id="api-352d7d5de4c79c57"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.references 3bdc3a03e5b0dddc334b318232bae6ec1bf5f8a5ad59eef67615c9ab742d18f7 -->

```csharp
public Inno.Assets.IAssetReferenceResolver Inno.Assets.Pipeline.AssetImportContext.references { get; }
```

Gets the asset-reference resolver bound to the isolated candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L155).

## `serialization`

<a id="api-e7acb920a11f50a8"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.serialization 48691520354604cbabeb9d1cca16e3f5864b81dd5abeb7548bcea9c12af515ea -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Assets.Pipeline.AssetImportContext.serialization { get; }
```

Gets the serialization registry bound to the active import generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L149).

## `services`

<a id="api-793f9e1e781c4494"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.services 32eec67bf00c3e0a769283c36cfbfe9d0d39f4c06a7b3db7d8793542417447cb -->

```csharp
public Inno.Assets.Pipeline.AssetSerializationServices Inno.Assets.Pipeline.AssetImportContext.services { get; }
```

Gets the narrow structured serialization API bound to this importer candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L160).

## `sourceBytes`

<a id="api-fefc29f34b296527"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.sourceBytes d80ff30b970510dc9503000d8a0c14f9b30db0585e08ff2a2e0af37ddcd88fe6 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Assets.Pipeline.AssetImportContext.sourceBytes { get; }
```

Gets the raw source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L127).

## `sourceHash`

<a id="api-ca7cf509219d8322"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.sourceHash b060b89d5bb675dba1f25fdc2e29196d65002ba465ace5fef70dbd644df5b0a1 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportContext.sourceHash { get; }
```

Gets the deterministic source hash.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L132).

## `types`

<a id="api-4a2726e30e1f0f7d"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportContext.types 1bc9f76ba4d66616d8fd1486b27c1b526629b65468304e2c3cf553bd1e5983c6 -->

```csharp
public Inno.Extensibility.Types.TypeCatalog Inno.Assets.Pipeline.AssetImportContext.types { get; }
```

Gets the type catalog bound to the active import generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportContext.cs#L143).
