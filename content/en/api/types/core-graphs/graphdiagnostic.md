---
title: "GraphDiagnostic"
description: "Reference for GraphDiagnostic in Inno.Core.Graphs."
uid: api.inno.core.graphs.7d63568c6ad9099e
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphDiagnostic`

This reference describes `GraphDiagnostic` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d13a30f83ea6dfe) | Method |
| [`code`](#api-013710118ecc82ef) | Property |
| [`edgeId`](#api-1a47afdec8c31836) | Property |
| [`message`](#api-bb932dc35e049dc7) | Property |
| [`nodeId`](#api-149b98043cbff144) | Property |
| [`severity`](#api-c6655109ccff285b) | Property |

## Type declaration

<a id="api-7d63568c6ad9099e"></a>
<!-- api: T:Inno.Core.Graphs.GraphDiagnostic bb3f11c6b30cb436536a7c4e877f4af015029bb71d07ca3e3abeea134bd5fe59 -->

```csharp
public sealed class Inno.Core.Graphs.GraphDiagnostic
```

Reports one graph validation problem using stable document identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L13).

## `#ctor`

<a id="api-8d13a30f83ea6dfe"></a>
<!-- api: M:Inno.Core.Graphs.GraphDiagnostic.#ctor(System.String,System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.Nullable{Inno.Core.Graphs.GraphNodeId},System.Nullable{Inno.Core.Graphs.GraphEdgeId}) 840183d8022dfba548d290eaed7b59a77797fd9d0f0b60752dd3761c9e11fa68 -->

```csharp
public Inno.Core.Graphs.GraphDiagnostic.GraphDiagnostic(string code, string message, Inno.Core.Diagnostics.DiagnosticSeverity severity, Inno.Core.Graphs.GraphNodeId? nodeId = null, Inno.Core.Graphs.GraphEdgeId? edgeId = null)
```

Creates a graph diagnostic.

**Parameter `code`:** Stable machine-readable diagnostic code.

**Parameter `message`:** Artist-facing diagnostic text.

**Parameter `severity`:** Diagnostic impact.

**Parameter `nodeId`:** Optional related node identifier.

**Parameter `edgeId`:** Optional related edge identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L33).

## `code`

<a id="api-013710118ecc82ef"></a>
<!-- api: P:Inno.Core.Graphs.GraphDiagnostic.code 2b012a03aee2a1e79e63946f34ac6d055d5d017a5e207672d05446da698b53bf -->

```csharp
public string Inno.Core.Graphs.GraphDiagnostic.code { get; }
```

Gets the stable machine-readable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L52).

## `edgeId`

<a id="api-1a47afdec8c31836"></a>
<!-- api: P:Inno.Core.Graphs.GraphDiagnostic.edgeId 740ca5be763ae24012b0009bd85c9510a00174090b52b952a9b901cf9e4bdf38 -->

```csharp
public Inno.Core.Graphs.GraphEdgeId? Inno.Core.Graphs.GraphDiagnostic.edgeId { get; }
```

Gets the related edge identifier, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L72).

## `message`

<a id="api-bb932dc35e049dc7"></a>
<!-- api: P:Inno.Core.Graphs.GraphDiagnostic.message 49c102beb4e8f3d2839d52738609597952fcae7394798f08889a40febac336ec -->

```csharp
public string Inno.Core.Graphs.GraphDiagnostic.message { get; }
```

Gets the artist-facing diagnostic text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L57).

## `nodeId`

<a id="api-149b98043cbff144"></a>
<!-- api: P:Inno.Core.Graphs.GraphDiagnostic.nodeId 82b5db05762f8c10950844679a77eed62d9173711b555b9887c405e4c88bbcb6 -->

```csharp
public Inno.Core.Graphs.GraphNodeId? Inno.Core.Graphs.GraphDiagnostic.nodeId { get; }
```

Gets the related node identifier, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L67).

## `severity`

<a id="api-c6655109ccff285b"></a>
<!-- api: P:Inno.Core.Graphs.GraphDiagnostic.severity 65477586913b204caecabd583f6149e60a081eaf3e666ae3e17f9af3b583bd28 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Core.Graphs.GraphDiagnostic.severity { get; }
```

Gets the diagnostic impact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L62).
