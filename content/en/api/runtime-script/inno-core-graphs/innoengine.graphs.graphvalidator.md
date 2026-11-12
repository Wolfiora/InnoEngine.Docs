---
title: "GraphValidator"
description: "Reference for GraphValidator in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.be92c19bf1b8aa87
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphValidator`

This reference describes `GraphValidator` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-5263d322ed3df8f3) | Method |

## Type declaration

<a id="api-be92c19bf1b8aa87"></a>
<!-- api: T:InnoEngine.Graphs.GraphValidator b177156ed49ef68f9490bd42b7f72b4c390de08799e2e0bac1a6a56ee18252e1 -->

```csharp
public static class InnoEngine.Graphs.GraphValidator
```

Validates neutral graph topology against generation-scoped node definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L122).

## `Validate`

<a id="api-5263d322ed3df8f3"></a>
<!-- api: M:InnoEngine.Graphs.GraphValidator.Validate(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.IGraphNodeDefinitionResolver,InnoEngine.Graphs.IGraphTypeConversion,System.Boolean) 23429d3ba1be418d47d8514591ab6185f08fec3c244ef427c7ab6e4efa109200 -->

```csharp
public static InnoEngine.Graphs.GraphValidationResult InnoEngine.Graphs.GraphValidator.Validate(InnoEngine.Graphs.GraphDocument document, InnoEngine.Graphs.IGraphNodeDefinitionResolver resolver, InnoEngine.Graphs.IGraphTypeConversion? conversion = null, bool allowCycles = false)
```

Validates node availability, ports, edge types, capacity, required inputs and cycles.

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

**Returns:** A deterministic validation result. Missing definitions remain warnings so documents stay editable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L142).
