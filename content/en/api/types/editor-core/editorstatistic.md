---
title: "EditorStatistic"
description: "Reference for EditorStatistic in Inno.Editor.Core."
uid: api.inno.editor.core.b45f122b9ed58989
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorStatistic`

This reference describes `EditorStatistic` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6284d799df6c4faf) | Method |
| [`groupId`](#api-ff82927d25f6cd49) | Property |
| [`groupName`](#api-da2092419de6b4eb) | Property |
| [`groupOrder`](#api-9d686e2ce537eb38) | Property |
| [`id`](#api-0cad9a41683007dc) | Property |
| [`label`](#api-a48ed53cd6c9f0ce) | Property |
| [`order`](#api-0e9e5bc082858485) | Property |
| [`value`](#api-bd68675acfd10458) | Property |

## Type declaration

<a id="api-b45f122b9ed58989"></a>
<!-- api: T:Inno.Editor.Core.EditorStatistic a24284df9c83164b2b09e14d3419e69d24b6480e519a0c11e767cf55ca9088e1 -->

```csharp
public sealed class Inno.Editor.Core.EditorStatistic
```

Describes one immutable, presentation-ready statistic without retaining provider instances or types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L88).

## `#ctor`

<a id="api-6284d799df6c4faf"></a>
<!-- api: M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32) 0e2f623704af913edf3641bf324fc1187f7e26c43db53600a6ab211fdfcc4a02 -->

```csharp
public Inno.Editor.Core.EditorStatistic.EditorStatistic(Inno.Editor.Core.EditorStatisticId id, Inno.Editor.Core.EditorStatisticGroupId groupId, string groupName, string label, string value, int groupOrder = 0, int order = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L117).

## `groupId`

<a id="api-ff82927d25f6cd49"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.groupId ce365f84244ebd4d778fb5b4040639d8b74070d34f952b264e782d70a0c83d97 -->

```csharp
public Inno.Editor.Core.EditorStatisticGroupId Inno.Editor.Core.EditorStatistic.groupId { get; }
```

Gets the stable visual group identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L150).

## `groupName`

<a id="api-da2092419de6b4eb"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.groupName 6eb0e1d90c0f2199ddf5fed3f99bb7384435df61cbdf3c77d9afb3e2a0b6861c -->

```csharp
public string Inno.Editor.Core.EditorStatistic.groupName { get; }
```

Gets the user-facing group heading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L155).

## `groupOrder`

<a id="api-9d686e2ce537eb38"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.groupOrder 7b332bf3f2b5137347d755041eeba7d267ba69174318cf985b98a84d8cbb22cd -->

```csharp
public int Inno.Editor.Core.EditorStatistic.groupOrder { get; }
```

Gets ascending group presentation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L170).

## `id`

<a id="api-0cad9a41683007dc"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.id ff69609c48d31dc8f8e6fbbda707a2516b4a4cc7e9126db0e1583c0cc08739dd -->

```csharp
public Inno.Editor.Core.EditorStatisticId Inno.Editor.Core.EditorStatistic.id { get; }
```

Gets the globally stable statistic identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L145).

## `label`

<a id="api-a48ed53cd6c9f0ce"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.label 1746c9bc51de041761644e83d8d366dc6cc2a77ffe1ec755180e0a1519d3b279 -->

```csharp
public string Inno.Editor.Core.EditorStatistic.label { get; }
```

Gets the user-facing metric label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L160).

## `order`

<a id="api-0e9e5bc082858485"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.order 505040211669795bb7263c5b7cbc2d4d08f0636eb0304f229f362133e2369e4f -->

```csharp
public int Inno.Editor.Core.EditorStatistic.order { get; }
```

Gets ascending metric order within the group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L175).

## `value`

<a id="api-bd68675acfd10458"></a>
<!-- api: P:Inno.Editor.Core.EditorStatistic.value e0c8042b915ea5c360f94b0e56ae7ca700477bf40c043abe3f68eaa0cff659b5 -->

```csharp
public string Inno.Editor.Core.EditorStatistic.value { get; }
```

Gets the presentation-ready value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L165).
