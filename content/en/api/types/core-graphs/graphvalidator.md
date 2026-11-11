---
title: "GraphValidator"
description: "Reference for GraphValidator in Inno.Core.Graphs."
uid: api.inno.core.graphs.81c4efa1b2653e70
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphValidator`

This reference describes `GraphValidator` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-69a2b245b8fffaae) | Method |

## Type declaration

<a id="api-81c4efa1b2653e70"></a>
<!-- api: T:Inno.Core.Graphs.GraphValidator e4a425c99aa82156084051f762f70b89a1fe125b8645dde74418c1dc705a2da5 -->

```csharp
public static class Inno.Core.Graphs.GraphValidator
```

Validates neutral graph topology against generation-scoped node definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L122).

## `Validate`

<a id="api-69a2b245b8fffaae"></a>
<!-- api: M:Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.IGraphNodeDefinitionResolver,Inno.Core.Graphs.IGraphTypeConversion,System.Boolean) 97199353f1e63a63f82e7fc3aa451a4a005450e8b5395b93054a91914f7fcd08 -->

```csharp
public static Inno.Core.Graphs.GraphValidationResult Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument document, Inno.Core.Graphs.IGraphNodeDefinitionResolver resolver, Inno.Core.Graphs.IGraphTypeConversion? conversion = null, bool allowCycles = false)
```

Validates node availability, ports, edge types, capacity, required inputs and cycles.

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

**Returns:** A deterministic validation result. Missing definitions remain warnings so documents stay editable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L142).
