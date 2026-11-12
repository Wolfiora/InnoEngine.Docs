---
title: "AssetBuildContext`1"
description: "Reference for AssetBuildContext`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.e931f712e2bb4e38
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# ``AssetBuildContext`1``

This reference describes ``AssetBuildContext`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d80812da56b2160) | Method |
| [`definition`](#api-22f280924094ee57) | Property |
| [`inputs`](#api-a1f83b7b7cb813e0) | Property |

## Type declaration

<a id="api-e931f712e2bb4e38"></a>
<!-- api: T:InnoEditor.Assets.AssetBuildContext`1 fbeda641bd1c55e992df3af5176fd2ba17081b9f31b8936b43758f67d5d3e107 -->

```csharp
public sealed class InnoEditor.Assets.AssetBuildContext<TDefinition> where TDefinition : InnoEngine.Assets.AssetObject
```

Provides a stable input snapshot to an aggregate asset build.

**Type parameter `TDefinition`:** The build definition asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L14).

## `#ctor`

<a id="api-8d80812da56b2160"></a>
<!-- api: M:InnoEditor.Assets.AssetBuildContext`1.#ctor(`0,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetInfo}) b84900121c942e209cb2fc9917225282bdef7e1d9aa2451950fee2e09f4b0df9 -->

```csharp
public InnoEditor.Assets.AssetBuildContext<TDefinition>.AssetBuildContext(TDefinition definition, System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetInfo> inputs)
```

Creates a build context.

**Parameter `definition`:** The build definition.

**Parameter `inputs`:** The immutable input catalog snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L25).

## `definition`

<a id="api-22f280924094ee57"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildContext`1.definition 16deeb99c3fbe5af671dd139d9418f2b17e75fb88609ea7f413015807661f302 -->

```csharp
public TDefinition InnoEditor.Assets.AssetBuildContext<TDefinition>.definition { get; }
```

Gets the build definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L36).

## `inputs`

<a id="api-a1f83b7b7cb813e0"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildContext`1.inputs fd79ba9943d65a5efbecaef52b8eafd4bf1ae3d988ffb78e0e45cd6ca278382b -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetInfo> InnoEditor.Assets.AssetBuildContext<TDefinition>.inputs { get; }
```

Gets the input catalog snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L41).
