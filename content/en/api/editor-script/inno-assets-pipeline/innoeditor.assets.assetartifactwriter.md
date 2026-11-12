---
title: "AssetArtifactWriter"
description: "Reference for AssetArtifactWriter in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.c452a35889f66369
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetArtifactWriter`

This reference describes `AssetArtifactWriter` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3103b795c2f34c4) | Method |
| [`ReportDiagnostic`](#api-bcec0094662c60bf) | Method |
| [`WriteAsync`](#api-4edee9b780c03684) | Method |

## Type declaration

<a id="api-c452a35889f66369"></a>
<!-- api: T:InnoEditor.Assets.AssetArtifactWriter 29279ead9c1e64386986a92416a6f80d82381b8728a1877dcf2ad32829bb5cbc -->

```csharp
public sealed class InnoEditor.Assets.AssetArtifactWriter
```

Collects immutable named outputs for an aggregate asset build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L11).

## `#ctor`

<a id="api-f3103b795c2f34c4"></a>
<!-- api: M:InnoEditor.Assets.AssetArtifactWriter.#ctor 0eac855614ca7acd1975f9ffd4bfbcae2864e4d74703cf721d05bc14d0e228df -->

```csharp
public InnoEditor.Assets.AssetArtifactWriter.AssetArtifactWriter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L11).

## `ReportDiagnostic`

<a id="api-bcec0094662c60bf"></a>
<!-- api: M:InnoEditor.Assets.AssetArtifactWriter.ReportDiagnostic(System.String) 3d661b38d4870a8cfdbb6465eda80498b5ef216fc011005660207dcaa45c2433 -->

```csharp
public void InnoEditor.Assets.AssetArtifactWriter.ReportDiagnostic(string message)
```

Adds a build diagnostic.

**Parameter `message`:** The diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L60).

## `WriteAsync`

<a id="api-4edee9b780c03684"></a>
<!-- api: M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope) 56d67f9092378c77925fb46639b75f264d0b94552bb0d219813bf77394433b82 -->

```csharp
public System.Threading.Tasks.ValueTask InnoEditor.Assets.AssetArtifactWriter.WriteAsync(string outputName, System.ReadOnlyMemory<byte> bytes, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), InnoEditor.Assets.AssetDeploymentScope deploymentScope = InnoEditor.Assets.AssetDeploymentScope.Runtime)
```

Writes one named build output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Returns:** A completed operation after the output has been staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L36).
