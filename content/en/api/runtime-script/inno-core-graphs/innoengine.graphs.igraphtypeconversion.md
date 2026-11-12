---
title: "IGraphTypeConversion"
description: "Reference for IGraphTypeConversion in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.cc884a8ac3bd8e2a
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `IGraphTypeConversion`

This reference describes `IGraphTypeConversion` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`CanConvert`](#api-c532bd31d9896928) | Method |

## Type declaration

<a id="api-cc884a8ac3bd8e2a"></a>
<!-- api: T:InnoEngine.Graphs.IGraphTypeConversion 4c6ed8d8b39c136790d1675681b0a17bb6466390f999fd2f58ffc3dc0d5aeae3 -->

```csharp
public interface InnoEngine.Graphs.IGraphTypeConversion
```

Determines whether one graph value type can be converted to another.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L194).

## `CanConvert`

<a id="api-c532bd31d9896928"></a>
<!-- api: M:InnoEngine.Graphs.IGraphTypeConversion.CanConvert(System.String,System.String) 18840da28c520b4bd5bdd3bf5eabcd0397de2468d53fcdf63f8572e61997870c -->

```csharp
bool InnoEngine.Graphs.IGraphTypeConversion.CanConvert(string sourceTypeId, string destinationTypeId)
```

Tests a directed value conversion.

**Parameter `sourceTypeId`:** Source value type identifier.

**Parameter `destinationTypeId`:** Destination value type identifier.

**Returns:** `true` when the conversion is valid; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L208).
