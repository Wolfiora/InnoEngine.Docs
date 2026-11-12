---
title: "GraphDiagnostic"
description: "Reference for GraphDiagnostic in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.61850973b8f903cb
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphDiagnostic`

This reference describes `GraphDiagnostic` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-95393c1174806c6a) | Method |
| [`code`](#api-5d88648758354715) | Property |
| [`edgeId`](#api-30a1b54d664c28ed) | Property |
| [`message`](#api-f852f76953e02e4b) | Property |
| [`nodeId`](#api-f2de62931d35f9e4) | Property |
| [`severity`](#api-dc7e87a598cda4b5) | Property |

## Type declaration

<a id="api-61850973b8f903cb"></a>
<!-- api: T:InnoEngine.Graphs.GraphDiagnostic 0e009954e57540bd0812b67d51d52e3b8dda5f973eb63ad6065323d2b27e8659 -->

```csharp
public sealed class InnoEngine.Graphs.GraphDiagnostic
```

Reports one graph validation problem using stable document identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L13).

## `#ctor`

<a id="api-95393c1174806c6a"></a>
<!-- api: M:InnoEngine.Graphs.GraphDiagnostic.#ctor(System.String,System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.Nullable{InnoEngine.Graphs.GraphNodeId},System.Nullable{InnoEngine.Graphs.GraphEdgeId}) d046639c8edb300aed693b586a5aeccd06950b49e8c15df790aedf63da538446 -->

```csharp
public InnoEngine.Graphs.GraphDiagnostic.GraphDiagnostic(string code, string message, InnoEngine.Diagnostics.DiagnosticSeverity severity, InnoEngine.Graphs.GraphNodeId? nodeId = null, InnoEngine.Graphs.GraphEdgeId? edgeId = null)
```

Creates a graph diagnostic.

**Parameter `code`:** Stable machine-readable diagnostic code.

**Parameter `message`:** Artist-facing diagnostic text.

**Parameter `severity`:** Diagnostic impact.

**Parameter `nodeId`:** Optional related node identifier.

**Parameter `edgeId`:** Optional related edge identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L33).

## `code`

<a id="api-5d88648758354715"></a>
<!-- api: P:InnoEngine.Graphs.GraphDiagnostic.code c67dc7bdf242289052187f6ff8010c6b4821208781c6cf6ff3261a93492155f8 -->

```csharp
public string InnoEngine.Graphs.GraphDiagnostic.code { get; }
```

Gets the stable machine-readable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L52).

## `edgeId`

<a id="api-30a1b54d664c28ed"></a>
<!-- api: P:InnoEngine.Graphs.GraphDiagnostic.edgeId e948f84a62eac81c9810f1cc959abe9f63121161810850eb089a87ae9952b038 -->

```csharp
public InnoEngine.Graphs.GraphEdgeId? InnoEngine.Graphs.GraphDiagnostic.edgeId { get; }
```

Gets the related edge identifier, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L72).

## `message`

<a id="api-f852f76953e02e4b"></a>
<!-- api: P:InnoEngine.Graphs.GraphDiagnostic.message e2ac3f58a994c00b6fa7978dc8f5ac2b840599a058ea0199225fee3ca8ac7de3 -->

```csharp
public string InnoEngine.Graphs.GraphDiagnostic.message { get; }
```

Gets the artist-facing diagnostic text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L57).

## `nodeId`

<a id="api-f2de62931d35f9e4"></a>
<!-- api: P:InnoEngine.Graphs.GraphDiagnostic.nodeId 129dd0725390d359c3d29661d20bb920534960367dbad9b5af966d075fe9f701 -->

```csharp
public InnoEngine.Graphs.GraphNodeId? InnoEngine.Graphs.GraphDiagnostic.nodeId { get; }
```

Gets the related node identifier, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L67).

## `severity`

<a id="api-dc7e87a598cda4b5"></a>
<!-- api: P:InnoEngine.Graphs.GraphDiagnostic.severity a093b51d9c7ca36ab0f3ea85c40725f74b5319b99d08dbea8d57b322e3355162 -->

```csharp
public InnoEngine.Diagnostics.DiagnosticSeverity InnoEngine.Graphs.GraphDiagnostic.severity { get; }
```

Gets the diagnostic impact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphValidation.cs#L62).
