---
title: "AssetBuildProcessor`1"
description: "Reference for AssetBuildProcessor`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.b9adfdebd2300cce
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# ``AssetBuildProcessor`1``

This reference describes ``AssetBuildProcessor`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetBuildProcessor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7e70aa3a06da9d68) | Method |
| [`BuildAsync`](#api-643db1519e3d5485) | Method |
| [`definitionType`](#api-a9ecdc9bcea21f38) | Property |

## Type declaration

<a id="api-b9adfdebd2300cce"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetBuildProcessor`1 c1380bf779ca1a841a1b10320508311a80abad8bc5862408b0d68ccd181edad6 -->

```csharp
public abstract class Inno.Assets.Pipeline.AssetBuildProcessor<TDefinition> where TDefinition : Inno.Assets.AssetObject : Inno.Assets.Pipeline.AssetBuildProcessor
```

Provides a strongly typed aggregate asset build processor.

**Type parameter `TDefinition`:** The definition asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L78).

## `#ctor`

<a id="api-7e70aa3a06da9d68"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetBuildProcessor`1.#ctor 11a6847f052224cb026546d459ce465ed21d0744d625acc6ce5e480009fe53ee -->

```csharp
protected Inno.Assets.Pipeline.AssetBuildProcessor<TDefinition>.AssetBuildProcessor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L78).

## `BuildAsync`

<a id="api-643db1519e3d5485"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetBuildProcessor`1.BuildAsync(Inno.Assets.Pipeline.AssetBuildContext{`0},Inno.Assets.Pipeline.AssetArtifactWriter,System.Threading.CancellationToken) 25b0058af4b7e45de5a34af15e7d05b5cde2df48b8d5b3866dff5b0a9dfc92d4 -->

```csharp
protected abstract System.Threading.Tasks.ValueTask Inno.Assets.Pipeline.AssetBuildProcessor<TDefinition>.BuildAsync(Inno.Assets.Pipeline.AssetBuildContext<TDefinition> context, Inno.Assets.Pipeline.AssetArtifactWriter output, System.Threading.CancellationToken cancellationToken)
```

Builds immutable outputs from a consistent asset snapshot.

**Parameter `context`:** The build context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the build.

**Returns:** An operation that completes when all outputs are staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L101).

## `definitionType`

<a id="api-a9ecdc9bcea21f38"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildProcessor`1.definitionType 00e4fa74f81beca71b49c91f5ec88a550d31da64b2bcc6389e33bc3dfec7f1b5 -->

```csharp
public override sealed System.Type Inno.Assets.Pipeline.AssetBuildProcessor<TDefinition>.definitionType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L84).
