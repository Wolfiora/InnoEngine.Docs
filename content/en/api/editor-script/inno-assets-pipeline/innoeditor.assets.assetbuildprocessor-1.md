---
title: "AssetBuildProcessor`1"
description: "Reference for AssetBuildProcessor`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.d112aa393ca69f72
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# ``AssetBuildProcessor`1``

This reference describes ``AssetBuildProcessor`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Assets.AssetBuildProcessor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2f974cd3185d9e61) | Method |
| [`BuildAsync`](#api-967e0d303fd1b158) | Method |
| [`definitionType`](#api-9ad4db240197a2d3) | Property |

## Type declaration

<a id="api-d112aa393ca69f72"></a>
<!-- api: T:InnoEditor.Assets.AssetBuildProcessor`1 cf9bfd4b5375b70094404d3c52c235bc3caa83c73418a103eeaf8e09f4b5207a -->

```csharp
public abstract class InnoEditor.Assets.AssetBuildProcessor<TDefinition> where TDefinition : InnoEngine.Assets.AssetObject : InnoEditor.Assets.AssetBuildProcessor
```

Provides a strongly typed aggregate asset build processor.

**Type parameter `TDefinition`:** The definition asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L78).

## `#ctor`

<a id="api-2f974cd3185d9e61"></a>
<!-- api: M:InnoEditor.Assets.AssetBuildProcessor`1.#ctor 8e6e933c7872fd7a13f53b8224cd7e9aa6a887b7a27d66379005da1cdd920a7c -->

```csharp
protected InnoEditor.Assets.AssetBuildProcessor<TDefinition>.AssetBuildProcessor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L78).

## `BuildAsync`

<a id="api-967e0d303fd1b158"></a>
<!-- api: M:InnoEditor.Assets.AssetBuildProcessor`1.BuildAsync(InnoEditor.Assets.AssetBuildContext{`0},InnoEditor.Assets.AssetArtifactWriter,System.Threading.CancellationToken) 4030f51fb555d38fe48307337e9777609d2644892f886856c33d92aff5219205 -->

```csharp
protected abstract System.Threading.Tasks.ValueTask InnoEditor.Assets.AssetBuildProcessor<TDefinition>.BuildAsync(InnoEditor.Assets.AssetBuildContext<TDefinition> context, InnoEditor.Assets.AssetArtifactWriter output, System.Threading.CancellationToken cancellationToken)
```

Builds immutable outputs from a consistent asset snapshot.

**Parameter `context`:** The build context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the build.

**Returns:** An operation that completes when all outputs are staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L101).

## `definitionType`

<a id="api-9ad4db240197a2d3"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildProcessor`1.definitionType dcf7f93c48908fe3747f0e512f98042de608c5f3600a0232533566351f18b0ec -->

```csharp
public override sealed System.Type InnoEditor.Assets.AssetBuildProcessor<TDefinition>.definitionType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L84).
