---
title: "EditorStatistic"
description: "Reference for EditorStatistic in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.e85126a325238e19
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorStatistic`

This reference describes `EditorStatistic` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d1741334162ee9ed) | Method |
| [`groupId`](#api-15478774006ce1f8) | Property |
| [`groupName`](#api-3a165a7701827971) | Property |
| [`groupOrder`](#api-e92816320153f7a7) | Property |
| [`id`](#api-27c66b1723bade1f) | Property |
| [`label`](#api-902af0ea2bbed897) | Property |
| [`order`](#api-76afbbe5cf70c691) | Property |
| [`value`](#api-5775c293a4501414) | Property |

## Type declaration

<a id="api-e85126a325238e19"></a>
<!-- api: T:InnoEditor.Core.EditorStatistic c82569f55dac2c049d51e9d32cb3c631e32ca67fe1b4d8298e0e703cfa0cd3d1 -->

```csharp
public sealed class InnoEditor.Core.EditorStatistic
```

Describes one immutable, presentation-ready statistic without retaining provider instances or types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L88).

## `#ctor`

<a id="api-d1741334162ee9ed"></a>
<!-- api: M:InnoEditor.Core.EditorStatistic.#ctor(InnoEditor.Core.EditorStatisticId,InnoEditor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32) 1f752ac476a749a65bb262f0df1592c9b290fb2908f91f6d70873f62b9124c4d -->

```csharp
public InnoEditor.Core.EditorStatistic.EditorStatistic(InnoEditor.Core.EditorStatisticId id, InnoEditor.Core.EditorStatisticGroupId groupId, string groupName, string label, string value, int groupOrder = 0, int order = 0)
```

Creates one statistic contribution.

**Parameter `id`:** Globally stable statistic identity used for replacement within a frame.

**Parameter `groupId`:** Stable visual group identity.

**Parameter `groupName`:** User-facing group heading.

**Parameter `label`:** User-facing metric label.

**Parameter `value`:** Already formatted user-facing value.

**Parameter `groupOrder`:** Ascending group presentation order.

**Parameter `order`:** Ascending metric order within the group.

**Throws `System.ArgumentException`:** Thrown when an identifier, group name, label, or value is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L117).

## `groupId`

<a id="api-15478774006ce1f8"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.groupId b3446b2f44c36db76535e3df8d6e3e92748c9bd601f3d5e9917b4e58649b02fa -->

```csharp
public InnoEditor.Core.EditorStatisticGroupId InnoEditor.Core.EditorStatistic.groupId { get; }
```

Gets the stable visual group identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L150).

## `groupName`

<a id="api-3a165a7701827971"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.groupName e22be147d4e26ae609a72cc7b158c17825b9a69b77eb5616c5f6da687879341d -->

```csharp
public string InnoEditor.Core.EditorStatistic.groupName { get; }
```

Gets the user-facing group heading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L155).

## `groupOrder`

<a id="api-e92816320153f7a7"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.groupOrder 2d1226450c10fea2454b473a2e5f54835c84031e0f19a279b40113a9560260d3 -->

```csharp
public int InnoEditor.Core.EditorStatistic.groupOrder { get; }
```

Gets ascending group presentation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L170).

## `id`

<a id="api-27c66b1723bade1f"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.id 378cf7aabf681029e672d89e0d164232c624192268934543e3a66d006f50bb40 -->

```csharp
public InnoEditor.Core.EditorStatisticId InnoEditor.Core.EditorStatistic.id { get; }
```

Gets the globally stable statistic identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L145).

## `label`

<a id="api-902af0ea2bbed897"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.label dd68c1dfc5351a2b709c2ef903ae82e8d24a0f0d4f881274bcb74c6d68ebe90b -->

```csharp
public string InnoEditor.Core.EditorStatistic.label { get; }
```

Gets the user-facing metric label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L160).

## `order`

<a id="api-76afbbe5cf70c691"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.order bdceb37959eebc3ff5cbcb3310cd5a6d4a680e307270f08a2b408993a758bb46 -->

```csharp
public int InnoEditor.Core.EditorStatistic.order { get; }
```

Gets ascending metric order within the group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L175).

## `value`

<a id="api-5775c293a4501414"></a>
<!-- api: P:InnoEditor.Core.EditorStatistic.value 5d0d0253f250d948ca3a464a9dad2fae2ab503faa59094483c7bb2cfa37c24c0 -->

```csharp
public string InnoEditor.Core.EditorStatistic.value { get; }
```

Gets the presentation-ready value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L165).
