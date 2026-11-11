---
title: "IGraphTypeConversion"
description: "Reference for IGraphTypeConversion in Inno.Core.Graphs."
uid: api.inno.core.graphs.0ac60beeac3d9bfa
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `IGraphTypeConversion`

This reference describes `IGraphTypeConversion` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CanConvert`](#api-85eb4cf471500ab9) | Method |

## Type declaration

<a id="api-0ac60beeac3d9bfa"></a>
<!-- api: T:Inno.Core.Graphs.IGraphTypeConversion 3386d7be80663ba8f8fb63a8698d3c933dc6b0d6f6f19cd48fbf28db24b5ee7f -->

```csharp
public interface Inno.Core.Graphs.IGraphTypeConversion
```

Determines whether one graph value type can be converted to another.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L194).

## `CanConvert`

<a id="api-85eb4cf471500ab9"></a>
<!-- api: M:Inno.Core.Graphs.IGraphTypeConversion.CanConvert(System.String,System.String) a314004aa55fe6dbe2cc865e5831adf2cda6df8c4b510d479c8fa37bd08f65f0 -->

```csharp
bool Inno.Core.Graphs.IGraphTypeConversion.CanConvert(string sourceTypeId, string destinationTypeId)
```

Tests a directed value conversion.

**Parameter `sourceTypeId`:** Source value type identifier.

**Parameter `destinationTypeId`:** Destination value type identifier.

**Returns:** `true` when the conversion is valid; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L208).
