---
title: "GraphNodeRecord"
description: "Reference for GraphNodeRecord in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.3b5335a55bbb3828
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphNodeRecord`

This reference describes `GraphNodeRecord` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-65eb817cef24567e) | Method |
| [`RemoveValue`](#api-548d6605fddaa21b) | Method |
| [`SetValue`](#api-d2dd83ca80e6ad01) | Method |
| [`TryGetValue`](#api-b92cf3328f280277) | Method |
| [`definitionId`](#api-4283a5508d0b4d37) | Property |
| [`id`](#api-a6b0be687ececdcc) | Property |
| [`position`](#api-32b6c8d3744d8d5f) | Property |
| [`values`](#api-d28f66f857266854) | Property |

## Type declaration

<a id="api-3b5335a55bbb3828"></a>
<!-- api: T:InnoEngine.Graphs.GraphNodeRecord dfa3c8de1d1d21cdd69e2296fe7e92a84bc43580128d6bcc6c94bef50d876271 -->

```csharp
public sealed class InnoEngine.Graphs.GraphNodeRecord
```

Stores one node without retaining a CLR type or runtime extension instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L10).

## `#ctor`

<a id="api-65eb817cef24567e"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeRecord.#ctor(InnoEngine.Graphs.GraphNodeId,System.String) 5370d011c22fdc371d4a6ee2c63e9dea0a6816b51bfaf3b0e42c7c100bc4edcf -->

```csharp
public InnoEngine.Graphs.GraphNodeRecord.GraphNodeRecord(InnoEngine.Graphs.GraphNodeId id, string definitionId)
```

Creates a graph node record.

**Parameter `id`:** Stable identifier within the document.

**Parameter `definitionId`:** Stable node definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L24).

## `RemoveValue`

<a id="api-548d6605fddaa21b"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeRecord.RemoveValue(System.String) 61edc1ba22d2266a15ad958ca6372cde9df6be6b521a8837aaef4c9180345f43 -->

```csharp
public bool InnoEngine.Graphs.GraphNodeRecord.RemoveValue(string propertyId)
```

Removes a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Returns:** `true` when a property was removed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L101).

## `SetValue`

<a id="api-d2dd83ca80e6ad01"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeRecord.SetValue(System.String,InnoEngine.Graphs.GraphSerializedValue) 2f86182e1db79c7b7c187b5b0661fc94b8a642f69a044aad3335a6fd9adf260f -->

```csharp
public void InnoEngine.Graphs.GraphNodeRecord.SetValue(string propertyId, InnoEngine.Graphs.GraphSerializedValue value)
```

Creates or replaces a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Parameter `value`:** Serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L63).

## `TryGetValue`

<a id="api-b92cf3328f280277"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeRecord.TryGetValue(System.String,InnoEngine.Graphs.GraphSerializedValue@) 91465bf601f673faddab417fa273c1099e62855c7df2a3c5263bc34c75c6640d -->

```csharp
public bool InnoEngine.Graphs.GraphNodeRecord.TryGetValue(string propertyId, out InnoEngine.Graphs.GraphSerializedValue? value)
```

Tries to read a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Parameter `value`:** Receives the value when present.

**Returns:** `true` when the property exists; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L84).

## `definitionId`

<a id="api-4283a5508d0b4d37"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeRecord.definitionId f8a93be38a87317566f230ac51c4d3779268fb55d9338eccff1e37de41c53a22 -->

```csharp
public string InnoEngine.Graphs.GraphNodeRecord.definitionId { get; }
```

Gets the stable node definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L42).

## `id`

<a id="api-a6b0be687ececdcc"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeRecord.id 764a999eb3fbdb610cc8e3f5cb92423f420db6f6e3d3d12bf5da063ea8345b74 -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEngine.Graphs.GraphNodeRecord.id { get; }
```

Gets the stable node identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L37).

## `position`

<a id="api-32b6c8d3744d8d5f"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeRecord.position 814e274bb9e70e57e5a8f857dfa39fe2127d139da5deb0bd9e404ce5ddc49aaa -->

```csharp
public InnoEngine.Graphs.GraphPosition InnoEngine.Graphs.GraphNodeRecord.position { get; set; }
```

Gets or sets the graph-space node position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L47).

## `values`

<a id="api-d28f66f857266854"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeRecord.values 509acc6988fa6c351baf084f3d445eea75b735c3b34da2cfb93e3302f5567778 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEngine.Graphs.GraphSerializedValue> InnoEngine.Graphs.GraphNodeRecord.values { get; }
```

Gets neutral serialized property values keyed by stable property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L52).
