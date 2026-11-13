---
uid: api.directory.engine.core.graphs
title: "Graphs"
kind: landing
owners: []
---

# Graphs

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [GraphDiagnostic](graphdiagnostic/index.md) | Reports one graph validation problem using stable document identifiers. |
| [GraphDocument](graphdocument/index.md) | Owns neutral graph records and graph-level canvas metadata. |
| [GraphDocumentCodec](graphdocumentcodec/index.md) | Persists neutral graph documents through the common Inno serialization pipeline. |
| [GraphEdgeId](graphedgeid/index.md) | Identifies an edge within one graph document using a stable serialized value. |
| [GraphEdgeRecord](graphedgerecord/index.md) | Stores one typed connection between two graph endpoints. |
| [GraphEndpoint](graphendpoint/index.md) | Identifies one endpoint of a graph edge. |
| [GraphNodeDefinition](graphnodedefinition/index.md) | Describes node presentation and resolves ports without entering graph persistence. |
| [GraphNodeId](graphnodeid/index.md) | Identifies a node within one graph document using a stable serialized value. |
| [GraphNodeRecord](graphnoderecord/index.md) | Stores one node without retaining a CLR type or runtime extension instance. |
| [GraphPortCapacity](graphportcapacity/index.md) | Declares how many edges may connect to a graph port. |
| [GraphPortDefinition](graphportdefinition/index.md) | Describes one dynamically or statically resolved node port. |
| [GraphPortDirection](graphportdirection/index.md) | Declares the direction in which values flow through a graph port. |
| [GraphPortId](graphportid/index.md) | Identifies a port within its owning node definition. |
| [GraphPosition](graphposition/index.md) | Stores a graph-space position independently from any editor UI framework. |
| [GraphSerializedValue](graphserializedvalue/index.md) | Stores one graph property as backend-neutral Inno serialization bytes. |
| [GraphValidationResult](graphvalidationresult/index.md) | Contains deterministic graph validation diagnostics. |
| [GraphValidator](graphvalidator/index.md) | Validates neutral graph topology against generation-scoped node definitions. |
| [IGraphNodeDefinitionResolver](igraphnodedefinitionresolver/index.md) | Resolves generation-scoped node definitions by stable identifier. |
| [IGraphTypeConversion](igraphtypeconversion/index.md) | Determines whether one graph value type can be converted to another. |

