---
title: "GraphValidationResult"
description: "Reference for GraphValidationResult in Inno.Core.Graphs."
uid: api.inno.core.graphs.b1c02018fc6a015a
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphValidationResult`

This reference describes `GraphValidationResult` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6a263e9499d02d46) | Method |
| [`diagnostics`](#api-2a3ebeb9b2219ecb) | Property |
| [`isValid`](#api-ffd440bfa012cae0) | Property |

## Type declaration

<a id="api-b1c02018fc6a015a"></a>
<!-- api: T:Inno.Core.Graphs.GraphValidationResult 400afcb2e0977d2015fab4ddb320c6f23fadd0b32d75531c8747e75a4f9c065b -->

```csharp
public sealed class Inno.Core.Graphs.GraphValidationResult
```

Contains deterministic graph validation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L78).

## `#ctor`

<a id="api-6a263e9499d02d46"></a>
<!-- api: M:Inno.Core.Graphs.GraphValidationResult.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Core.Graphs.GraphDiagnostic}) 9ca0a5c93e696de36d68cb7d4b8382b56d7e244820513acd2decf99226df24dd -->

```csharp
public Inno.Core.Graphs.GraphValidationResult.GraphValidationResult(System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphDiagnostic> diagnostics)
```

Creates a graph validation result.

**Parameter `diagnostics`:** Diagnostics in deterministic validation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L88).

## `diagnostics`

<a id="api-2a3ebeb9b2219ecb"></a>
<!-- api: P:Inno.Core.Graphs.GraphValidationResult.diagnostics 050dce8efc70901a6c8c35ee6aaf3368d3c0f8d7e7617e800d40da78d3d99ef0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphDiagnostic> Inno.Core.Graphs.GraphValidationResult.diagnostics { get; }
```

Gets diagnostics in deterministic validation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L97).

## `isValid`

<a id="api-ffd440bfa012cae0"></a>
<!-- api: P:Inno.Core.Graphs.GraphValidationResult.isValid f3adef6688586147a0ea704b6c3b8ca7a80c4ee5974034b56faeb16526d75b75 -->

```csharp
public bool Inno.Core.Graphs.GraphValidationResult.isValid { get; }
```

Gets whether no error diagnostic is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L102).
