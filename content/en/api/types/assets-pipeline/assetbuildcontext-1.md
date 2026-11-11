---
title: "AssetBuildContext`1"
description: "Reference for AssetBuildContext`1 in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.0f74bcf0b3f4d1bb
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# ``AssetBuildContext`1``

This reference describes ``AssetBuildContext`1`` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3bd00847d6ad3140) | Method |
| [`definition`](#api-6438099ecafab877) | Property |
| [`inputs`](#api-f87ffd238a22bf8c) | Property |

## Type declaration

<a id="api-0f74bcf0b3f4d1bb"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetBuildContext`1 703c80f34a5965e9f8d33af75d8e226760824a008c992c860e82041bdfa0490a -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetBuildContext<TDefinition> where TDefinition : Inno.Assets.AssetObject
```

Provides a stable input snapshot to an aggregate asset build.

**Type parameter `TDefinition`:** The build definition asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L14).

## `#ctor`

<a id="api-3bd00847d6ad3140"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetBuildContext`1.#ctor(`0,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetInfo}) 862528f79ed919b1c9b3490e7ecaa70e5ecbc518bbf9490714bfa998fe1c72e6 -->

```csharp
public Inno.Assets.Pipeline.AssetBuildContext<TDefinition>.AssetBuildContext(TDefinition definition, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetInfo> inputs)
```

Creates a build context.

**Parameter `definition`:** The build definition.

**Parameter `inputs`:** The immutable input catalog snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L25).

## `definition`

<a id="api-6438099ecafab877"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildContext`1.definition 8dc14083dbe554a946c7c4fabb3d1186f11315570a1f15fb65936f85c1fd7f30 -->

```csharp
public TDefinition Inno.Assets.Pipeline.AssetBuildContext<TDefinition>.definition { get; }
```

Gets the build definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L36).

## `inputs`

<a id="api-f87ffd238a22bf8c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildContext`1.inputs 7e0028dc72e94a43e4895bf91c89e38dcf3763fb7c99cd670c9527dbf8a305bb -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetInfo> Inno.Assets.Pipeline.AssetBuildContext<TDefinition>.inputs { get; }
```

Gets the input catalog snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildContext.cs#L41).
