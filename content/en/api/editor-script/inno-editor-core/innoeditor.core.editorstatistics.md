---
title: "EditorStatistics"
description: "Reference for EditorStatistics in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.77e7fa0c830e6b2e
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorStatistics`

This reference describes `EditorStatistics` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b02e07de4afeb982) | Method |
| [`GetSnapshot`](#api-c4a14d05182a4357) | Method |
| [`Publish`](#api-76eab3364823dc28) | Method |
| [`Publish`](#api-c200034180ef9ed2) | Method |

## Type declaration

<a id="api-77e7fa0c830e6b2e"></a>
<!-- api: T:InnoEditor.Core.EditorStatistics db807b83a38c4153945c553984a103e7218185bdbad4000a8769727f5094ee1e -->

```csharp
public sealed class InnoEditor.Core.EditorStatistics
```

Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers.

**Constraints:** Contributions contain only stable identifiers and strings. A contribution is retained for the
current frame and one completed-frame handoff so panel draw order cannot lose data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L185).

## `#ctor`

<a id="api-b02e07de4afeb982"></a>
<!-- api: M:InnoEditor.Core.EditorStatistics.#ctor bb7f5bccb2db58cc24d50361f4f7ea71b24ff51c402ea39e7c1e9cece94dd384 -->

```csharp
public InnoEditor.Core.EditorStatistics.EditorStatistics()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L185).

## `GetSnapshot`

<a id="api-c4a14d05182a4357"></a>
<!-- api: M:InnoEditor.Core.EditorStatistics.GetSnapshot 2fe143e0d4fdb9fd4cb297756ec08c089001efdc0b266e806effc48fc27eaabc -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Core.EditorStatistic> InnoEditor.Core.EditorStatistics.GetSnapshot()
```

Gets a deterministic snapshot combining current contributions with the previous completed
frame for providers that draw after their consumer.

**Returns:** An immutable, sorted snapshot containing at most one value for each stable statistic ID.
Unchanged content reuses the same snapshot; previously returned snapshots remain valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L238).

## `Publish`

<a id="api-76eab3364823dc28"></a>
<!-- api: M:InnoEditor.Core.EditorStatistics.Publish(InnoEditor.Core.EditorStatistic) 14d1cd63623fd46cd04effac74119cbab9ed86f6fa683b20bf97942b87ff13e1 -->

```csharp
public void InnoEditor.Core.EditorStatistics.Publish(InnoEditor.Core.EditorStatistic statistic)
```

Publishes or replaces one statistic for the current editor frame.

**Parameter `statistic`:** Immutable contribution containing no runtime provider references.

**Throws `System.ArgumentNullException`:** Thrown when `statistic` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L202).

## `Publish`

<a id="api-c200034180ef9ed2"></a>
<!-- api: M:InnoEditor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable{InnoEditor.Core.EditorStatistic}) 0dddb61596685c6b5ca155c61b037c996f5cdedb7947012d3f05b456e8dc0ff2 -->

```csharp
public void InnoEditor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable<InnoEditor.Core.EditorStatistic> statistics)
```

Publishes or replaces several statistics for the current editor frame.

**Parameter `statistics`:** Contributions to publish in enumeration order.

**Throws `System.ArgumentNullException`:** Thrown when `statistics` or one of its values is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L223).
