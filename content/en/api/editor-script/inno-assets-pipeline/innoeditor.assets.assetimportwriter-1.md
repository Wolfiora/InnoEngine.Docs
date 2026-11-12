---
title: "AssetImportWriter`1"
description: "Reference for AssetImportWriter`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.27d7e5fb9aa37cb3
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# ``AssetImportWriter`1``

This reference describes ``AssetImportWriter`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-116895a4ad48b7d8) | Method |
| [`DependsOnArtifact`](#api-2db042a0acc5db15) | Method |
| [`DependsOnAsset`](#api-4ff9db15e7b7d66f) | Method |
| [`DependsOnAsset`](#api-a0e5e78691a84890) | Method |
| [`DependsOnCustomInput`](#api-60becb3627301450) | Method |
| [`DependsOnSource`](#api-44039741e3e16e28) | Method |
| [`ReportDiagnostic`](#api-ca1194a575a90b35) | Method |
| [`SetAsset`](#api-5edf23a789af146b) | Method |
| [`SetDeploymentScope`](#api-ff38430e7b524cde) | Method |
| [`WriteArtifactAsync`](#api-b9d0a633bd02efe2) | Method |
| [`asset`](#api-49e4ef1315bf8729) | Property |

## Type declaration

<a id="api-27d7e5fb9aa37cb3"></a>
<!-- api: T:InnoEditor.Assets.AssetImportWriter`1 a6e74bdbd51ca52ddf4b479ba54f1e9bfd67d0e5e156618f78c091dffb37eadd -->

```csharp
public sealed class InnoEditor.Assets.AssetImportWriter<TAsset> where TAsset : InnoEngine.Assets.AssetObject
```

Collects the complete candidate output of one source import.

**Type parameter `TAsset`:** The imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L16).

## `#ctor`

<a id="api-116895a4ad48b7d8"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.#ctor a89355bc2f226462890650b6bf4410a060e122a2d4f17d8867176ee2c0dc9a03 -->

```csharp
public InnoEditor.Assets.AssetImportWriter<TAsset>.AssetImportWriter()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L16).

## `DependsOnArtifact`

<a id="api-2db042a0acc5db15"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.DependsOnArtifact(System.Guid) 4e2588793ed51829b5cc226ec6ef9aeaa1139105e21eaf630bf3e279a4eda93d -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.DependsOnArtifact(System.Guid persistentId)
```

Declares an asset artifact input that invalidates this import.

**Parameter `persistentId`:** The stable persistent identity used for lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L132).

## `DependsOnAsset`

<a id="api-4ff9db15e7b7d66f"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.DependsOnAsset(InnoEngine.Assets.AssetDependency) 1c1e0b5ee08603ab0da7e4b8bbc9f47a446cdfef033406be9133908fca8260cf -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.DependsOnAsset(InnoEngine.Assets.AssetDependency dependency)
```

Declares a runtime dependency by persistent descriptor.

**Parameter `dependency`:** The dependency consumed by depends on asset; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L116).

## `DependsOnAsset`

<a id="api-a0e5e78691a84890"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.DependsOnAsset(InnoEngine.Assets.AssetPath) 9b8ef4261fccccebe699099a338ebc81b91f109fd0b20afb61765ee7007b0dab -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.DependsOnAsset(InnoEngine.Assets.AssetPath path)
```

Declares a runtime dependency by isolated source path.

**Parameter `path`:** The normalized file-system path used by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L108).

## `DependsOnCustomInput`

<a id="api-60becb3627301450"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.DependsOnCustomInput(System.String,System.String) 47ee01582113bee60132add22efa0968443f855b9dd655097f49ecd84d294415 -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.DependsOnCustomInput(string key, string fingerprint)
```

Declares a custom deterministic import input.

**Parameter `key`:** The input identifier.

**Parameter `fingerprint`:** The deterministic input fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L143).

## `DependsOnSource`

<a id="api-44039741e3e16e28"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.DependsOnSource(InnoEngine.Assets.AssetPath) 66b70f3f7db44ec0be7387184c61838904e3fb72480e50802cd0acc1e4445939 -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.DependsOnSource(InnoEngine.Assets.AssetPath path)
```

Declares a source input that invalidates this import.

**Parameter `path`:** The normalized file-system path used by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L124).

## `ReportDiagnostic`

<a id="api-ca1194a575a90b35"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.ReportDiagnostic(System.String) f826c3a658f5b4464098782896917cc6ef8432a4a99e07013e9e00b012ef2f9f -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.ReportDiagnostic(string message)
```

Adds a non-fatal import diagnostic.

**Parameter `message`:** The diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L154).

## `SetAsset`

<a id="api-5edf23a789af146b"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.SetAsset(`0) 684ea8483367af66ebd08d24b1d322e87d7663035722c033ad0a9dcfe9d12381 -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.SetAsset(TAsset asset)
```

Assigns the managed asset produced by the importer.

**Parameter `asset`:** The imported asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L58).

## `SetDeploymentScope`

<a id="api-ff38430e7b524cde"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.SetDeploymentScope(InnoEditor.Assets.AssetDeploymentScope) 7d9b1cd11500c79120584a35d71ccee77d561ca54b0c18cda2fd79054d9b7843 -->

```csharp
public void InnoEditor.Assets.AssetImportWriter<TAsset>.SetDeploymentScope(InnoEditor.Assets.AssetDeploymentScope deploymentScope)
```

Selects the deployment scope for this imported asset.
This permits one importer to produce runtime assets and editor-only assets
from different source documents without changing their asset type.

**Parameter `deploymentScope`:** The scope of the complete imported asset, including its generated state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L43).

## `WriteArtifactAsync`

<a id="api-b9d0a633bd02efe2"></a>
<!-- api: M:InnoEditor.Assets.AssetImportWriter`1.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope) 4533182b17e271a41703d153d9c639adf438078ada1ba907596d6b7efb07b644 -->

```csharp
public System.Threading.Tasks.ValueTask InnoEditor.Assets.AssetImportWriter<TAsset>.WriteArtifactAsync(string outputName, System.ReadOnlyMemory<byte> bytes, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), InnoEditor.Assets.AssetDeploymentScope deploymentScope = InnoEditor.Assets.AssetDeploymentScope.Runtime)
```

Writes one immutable named artifact output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Returns:** A completed operation after the output has been staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L84).

## `asset`

<a id="api-49e4ef1315bf8729"></a>
<!-- api: P:InnoEditor.Assets.AssetImportWriter`1.asset aee4e0d1ac6d8f4e12a595ea4d3055682e89411cce18dc40dde2ecbede1839cd -->

```csharp
public TAsset? InnoEditor.Assets.AssetImportWriter<TAsset>.asset { get; }
```

Gets the candidate asset assigned by the importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Importing/AssetImportWriter.cs#L33).
