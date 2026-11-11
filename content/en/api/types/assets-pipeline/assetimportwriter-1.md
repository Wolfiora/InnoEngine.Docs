---
title: "AssetImportWriter`1"
description: "Reference for AssetImportWriter`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.3860597267764520
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# ``AssetImportWriter`1``

This reference describes ``AssetImportWriter`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`DependsOnArtifact`](#api-ccf418468428cfc2) | Method |
| [`DependsOnAsset`](#api-86237c5b849ae8fa) | Method |
| [`DependsOnAsset`](#api-f0535dfd99211e5e) | Method |
| [`DependsOnCustomInput`](#api-ed2e713ca63d28fc) | Method |
| [`DependsOnSource`](#api-6bb0792da6d34073) | Method |
| [`ReportDiagnostic`](#api-e0edfbf860e69ce2) | Method |
| [`SetAsset`](#api-0751974f56ba073a) | Method |
| [`SetDeploymentScope`](#api-2073f0adb3446f02) | Method |
| [`WriteArtifactAsync`](#api-9122103630a7d7a9) | Method |
| [`asset`](#api-be4eb03ef908e7b9) | Property |

## Type declaration

<a id="api-3860597267764520"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportWriter`1 26756950c078b9cec4766cf9920a4e8b3869a802ada3a1d4ce57e562769b21d0 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImportWriter<TAsset> where TAsset : Inno.Assets.AssetObject
```

Collects the complete candidate output of one source import.

**Type parameter `TAsset`:** The imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L16).

## `DependsOnArtifact`

<a id="api-ccf418468428cfc2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.DependsOnArtifact(System.Guid) 2485bbd9915f205088328e3529d31f9aa52de9cad0910c97ac3e8ad77d35ae56 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.DependsOnArtifact(System.Guid persistentId)
```

Declares an asset artifact input that invalidates this import.

**Parameter `persistentId`:** The stable persistent identity used for lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L132).

## `DependsOnAsset`

<a id="api-86237c5b849ae8fa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.DependsOnAsset(Inno.Assets.AssetDependency) 11d3c604c331c0dd614132c5dc334bfba41b2e1d05971e1efa8698c503f98821 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.DependsOnAsset(Inno.Assets.AssetDependency dependency)
```

Declares a runtime dependency by persistent descriptor.

**Parameter `dependency`:** The dependency consumed by depends on asset; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L116).

## `DependsOnAsset`

<a id="api-f0535dfd99211e5e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.DependsOnAsset(Inno.Assets.AssetPath) 5f8fe2cee47e4b2717934eb336f7ce03f52945faf4930445c5f1d56335cc8d16 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.DependsOnAsset(Inno.Assets.AssetPath path)
```

Declares a runtime dependency by isolated source path.

**Parameter `path`:** The normalized file-system path used by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L108).

## `DependsOnCustomInput`

<a id="api-ed2e713ca63d28fc"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.DependsOnCustomInput(System.String,System.String) 8820a087f0323b09b860e8634dc12ed4ac84db5224cc8aaac5aa03285b9b62a4 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.DependsOnCustomInput(string key, string fingerprint)
```

Declares a custom deterministic import input.

**Parameter `key`:** The input identifier.

**Parameter `fingerprint`:** The deterministic input fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L143).

## `DependsOnSource`

<a id="api-6bb0792da6d34073"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.DependsOnSource(Inno.Assets.AssetPath) c131ef9f187fa556efb606697d706a4cc48afa1e503fde7bd426a5d4ff62278a -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.DependsOnSource(Inno.Assets.AssetPath path)
```

Declares a source input that invalidates this import.

**Parameter `path`:** The normalized file-system path used by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L124).

## `ReportDiagnostic`

<a id="api-e0edfbf860e69ce2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.ReportDiagnostic(System.String) 4e4ccb7fae04c9ec5e5a42256d9502a9867e986dd7d4413271590c97fef83337 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.ReportDiagnostic(string message)
```

Adds a non-fatal import diagnostic.

**Parameter `message`:** The diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L154).

## `SetAsset`

<a id="api-0751974f56ba073a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.SetAsset(`0) 05b51d482e0f1e5fad8201c9ea2b487b5876cd41636ca743d5af4c50b2435ff6 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.SetAsset(TAsset asset)
```

Assigns the managed asset produced by the importer.

**Parameter `asset`:** The imported asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L58).

## `SetDeploymentScope`

<a id="api-2073f0adb3446f02"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.SetDeploymentScope(Inno.Assets.Pipeline.AssetDeploymentScope) 9a28c9c67083f15776e45c714bab310360975b4b16d1f87985a9563adb175d8f -->

```csharp
public void Inno.Assets.Pipeline.AssetImportWriter<TAsset>.SetDeploymentScope(Inno.Assets.Pipeline.AssetDeploymentScope deploymentScope)
```

Selects the deployment scope for this imported asset.
This permits one importer to produce runtime assets and editor-only assets
from different source documents without changing their asset type.

**Parameter `deploymentScope`:** The scope of the complete imported asset, including its generated state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L43).

## `WriteArtifactAsync`

<a id="api-9122103630a7d7a9"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportWriter`1.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope) b1659512c4013a78bf7ff254f3838553e0a745ee368250ae286bfc8244774285 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.AssetImportWriter<TAsset>.WriteArtifactAsync(string outputName, System.ReadOnlyMemory<byte> bytes, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), Inno.Assets.Pipeline.AssetDeploymentScope deploymentScope = Inno.Assets.Pipeline.AssetDeploymentScope.Runtime)
```

Writes one immutable named artifact output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Returns:** A completed operation after the output has been staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L84).

## `asset`

<a id="api-be4eb03ef908e7b9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportWriter`1.asset 4f1f65d5da5b6581b087404d507bf71431e1f888928e9a4861e56eb70fb94fe7 -->

```csharp
public TAsset? Inno.Assets.Pipeline.AssetImportWriter<TAsset>.asset { get; private set; }
```

Gets the candidate asset assigned by the importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L33).
