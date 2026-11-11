---
title: "AssetArtifactWriter"
description: "Reference for AssetArtifactWriter in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.01f9789655046883
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetArtifactWriter`

This reference describes `AssetArtifactWriter` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2ba783329f0d79ec) | Method |
| [`ReportDiagnostic`](#api-d59e99d5149b6bdc) | Method |
| [`WriteAsync`](#api-39ae535d337b9f0d) | Method |

## Type declaration

<a id="api-01f9789655046883"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetArtifactWriter fc335add62233cf2e565004befb6ad0c5543ecbf1449ad2d0a393ece5166cc94 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetArtifactWriter
```

Collects immutable named outputs for an aggregate asset build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L11).

## `#ctor`

<a id="api-2ba783329f0d79ec"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetArtifactWriter.#ctor 5492e196e4a08c672e9c48ecbd920ace0f49e20c5bbecf6771729a51442cea55 -->

```csharp
public Inno.Assets.Pipeline.AssetArtifactWriter.AssetArtifactWriter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L11).

## `ReportDiagnostic`

<a id="api-d59e99d5149b6bdc"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetArtifactWriter.ReportDiagnostic(System.String) c9051a68cb45bac7ab5d5e14e74b9710b40b910ba6917b79cad3d1b5334aeeea -->

```csharp
public void Inno.Assets.Pipeline.AssetArtifactWriter.ReportDiagnostic(string message)
```

Adds a build diagnostic.

**Parameter `message`:** The diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L60).

## `WriteAsync`

<a id="api-39ae535d337b9f0d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope) d297014ae283518a73d48f1ef02f90d2614ec610e8b479cf2882437562263e6c -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(string outputName, System.ReadOnlyMemory<byte> bytes, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), Inno.Assets.Pipeline.AssetDeploymentScope deploymentScope = Inno.Assets.Pipeline.AssetDeploymentScope.Runtime)
```

Writes one named build output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Returns:** A completed operation after the output has been staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Artifacts/AssetArtifactWriter.cs#L36).
