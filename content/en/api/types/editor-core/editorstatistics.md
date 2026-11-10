---
title: "EditorStatistics"
description: "Reference for EditorStatistics in Inno.Editor.Core."
uid: api.inno.editor.core.b7254ac55c2ccaae
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorStatistics`

This reference describes `EditorStatistics` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-11f38f58f353f128) | Method |
| [`GetSnapshot`](#api-d569e7c004928ea1) | Method |
| [`Publish`](#api-9e16cd3c99f20354) | Method |
| [`Publish`](#api-ccc45b5d15a14517) | Method |

## Type declaration

<a id="api-b7254ac55c2ccaae"></a>
<!-- api: T:Inno.Editor.Core.EditorStatistics 315a02d03e58e6766bff506605835f6b649230f75711c0c0a61d9de236413324 -->

```csharp
public sealed class Inno.Editor.Core.EditorStatistics
```

Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers.

**Constraints:** Contributions contain only stable identifiers and strings. A contribution is retained for the
current frame and one completed-frame handoff so panel draw order cannot lose data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L185).

## `#ctor`

<a id="api-11f38f58f353f128"></a>
<!-- api: M:Inno.Editor.Core.EditorStatistics.#ctor efac35a9c85cd7700eaafde9f3e12c26f2de41b7bb1332b91c0bfbd37ee2c325 -->

```csharp
public Inno.Editor.Core.EditorStatistics.EditorStatistics()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L185).

## `GetSnapshot`

<a id="api-d569e7c004928ea1"></a>
<!-- api: M:Inno.Editor.Core.EditorStatistics.GetSnapshot 13a566f21062f7295cdaee9e168de36f67fa93e58c2bc35a525441c39978cff3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Core.EditorStatistic> Inno.Editor.Core.EditorStatistics.GetSnapshot()
```

Gets a deterministic snapshot combining current contributions with the previous completed
frame for providers that draw after their consumer.

**Returns:** An immutable, sorted snapshot containing at most one value for each stable statistic ID.
Unchanged content reuses the same snapshot; previously returned snapshots remain valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L238).

## `Publish`

<a id="api-9e16cd3c99f20354"></a>
<!-- api: M:Inno.Editor.Core.EditorStatistics.Publish(Inno.Editor.Core.EditorStatistic) 2c7d80c557d438de0bc21d0fcae3b053d1e9479a03332685921af8d05eda6e05 -->

```csharp
public void Inno.Editor.Core.EditorStatistics.Publish(Inno.Editor.Core.EditorStatistic statistic)
```

Publishes or replaces one statistic for the current editor frame.

**Parameter `statistic`:** Immutable contribution containing no runtime provider references.

**Throws `System.ArgumentNullException`:** Thrown when `statistic` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L202).

## `Publish`

<a id="api-ccc45b5d15a14517"></a>
<!-- api: M:Inno.Editor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable{Inno.Editor.Core.EditorStatistic}) ebeafb93092b7ba0ea1be840201c609eb5bf39bf044b7a47342ef5aa56b53788 -->

```csharp
public void Inno.Editor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable<Inno.Editor.Core.EditorStatistic> statistics)
```

Publishes or replaces several statistics for the current editor frame.

**Parameter `statistics`:** Contributions to publish in enumeration order.

**Throws `System.ArgumentNullException`:** Thrown when `statistics` or one of its values is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L223).
