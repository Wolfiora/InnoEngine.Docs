---
title: "GraphValidationResult"
description: "Reference for GraphValidationResult in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.bf5cdda7753a1796
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphValidationResult`

This reference describes `GraphValidationResult` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-791992943bdd50e8) | Method |
| [`diagnostics`](#api-c1da1a0694404426) | Property |
| [`isValid`](#api-98c4bd0fba3e1502) | Property |

## Type declaration

<a id="api-bf5cdda7753a1796"></a>
<!-- api: T:InnoEngine.Graphs.GraphValidationResult ae309b443d4fb9de2ba40411f093a7d7ce34c1f6f9f9083a3d3ed1f10f103b5f -->

```csharp
public sealed class InnoEngine.Graphs.GraphValidationResult
```

Contains deterministic graph validation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L78).

## `#ctor`

<a id="api-791992943bdd50e8"></a>
<!-- api: M:InnoEngine.Graphs.GraphValidationResult.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Graphs.GraphDiagnostic}) 2cfa4d80236a35b2c43068bf6d7cebd61c46b048f2e63d79798e5339fc58b91e -->

```csharp
public InnoEngine.Graphs.GraphValidationResult.GraphValidationResult(System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphDiagnostic> diagnostics)
```

Creates a graph validation result.

**Parameter `diagnostics`:** Diagnostics in deterministic validation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L88).

## `diagnostics`

<a id="api-c1da1a0694404426"></a>
<!-- api: P:InnoEngine.Graphs.GraphValidationResult.diagnostics a90fdead05083d03052569bdfd0c12bd1f310c1a41da5f741603ce603c6b13da -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphDiagnostic> InnoEngine.Graphs.GraphValidationResult.diagnostics { get; }
```

Gets diagnostics in deterministic validation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L97).

## `isValid`

<a id="api-98c4bd0fba3e1502"></a>
<!-- api: P:InnoEngine.Graphs.GraphValidationResult.isValid ba3725b7d2a23bc19844a0369dbfd3b3b76bb7156d6c518e454fe484af5cc3f3 -->

```csharp
public bool InnoEngine.Graphs.GraphValidationResult.isValid { get; }
```

Gets whether no error diagnostic is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L102).
