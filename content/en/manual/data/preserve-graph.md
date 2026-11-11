---
title: Preserve an editable graph across extension changes
description: Store neutral nodes, ports and values while resolving current definitions without deleting Missing content.
uid: manual.data.preserve-graph
kind: how-to
owners:
  - Inno.Core.Graphs
contracts:
  - project.inno-core-graphs#document-and-definition-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Graphs
---
# Preserve an editable graph across extension changes

Use `GraphDocument` to store editable node and edge records independently of the extension objects that interpret them. Stable string IDs, positions and serialized bytes can survive a definition becoming unavailable; a CLR type, runtime delegate or plugin instance cannot serve as that neutral document state.

This is a general node/port model. It does not provide a graph editor widget, shader compiler or automatic runtime execution.

## Create neutral records

The host supplies an active `SerializationRegistry` and a generation-scoped definition resolver. The example below creates one node and validates it; `math.float` is an illustrative definition ID that the caller must actually provide. If absent, validation preserves the node and reports a Missing warning.

```csharp
using Inno.Core.Graphs;
using Inno.Core.Serialization;

static GraphValidationResult CreateAndValidate(
    SerializationRegistry serialization,
    IGraphNodeDefinitionResolver definitions
) {
    var document = new GraphDocument();
    var node = new GraphNodeRecord(new GraphNodeId("constant-1"), "math.float");
    node.position = new GraphPosition(120f, 80f);
    node.SetValue("value", GraphSerializedValue.From(0.5f, serialization));
    document.AddNode(node);
    return GraphValidator.Validate(document, definitions);
}
```

Choose stable node, edge, port, property and definition IDs. Do not use display names, process hash codes or transient object identities as saved identifiers. IDs identify records; the document's lookup index does not replace Core Identity's live-object registration.

`AddNode` retains the supplied mutable node. Its read-only collection view reflects later domain edits; it is not a frozen runtime snapshot. `RemoveNode` deliberately removes its connected edges, so it is inappropriate as an automatic response to a temporarily missing definition.

## Validate against the active definitions

`GraphNodeDefinition.GetPorts` can derive current ports from the neutral node's values. Validation checks port direction, value compatibility, single/multiple capacity, required inputs, endpoint presence and directed cycles. Equal type IDs are accepted; optional `IGraphTypeConversion` supplies directed compatibility for different IDs. Cycles are rejected unless explicitly allowed.

| Condition | Meaning |
| --- | --- |
| Definition unavailable | `GRAPH_MISSING_NODE` warning; the node and its connections remain editable. |
| Edge refers to an absent physical node | Error. The saved topology has an invalid endpoint. |
| Both definitions resolve but a named port is absent | Error. The current endpoint contract does not match. |
| Duplicate ports or a failing port resolver | Error diagnostic from port resolution. |
| `isValid` is true | No error diagnostic was found. Warnings may still exist; this does not certify an executable graph. |

Validation does not mutate the document. Definition lookup and custom conversion remain caller-provided boundaries; not every arbitrary callback failure is converted into a diagnostic. Keep them finite, generation-owned and consistent for the operation.

## Publish a separate candidate

Keep live `GraphNodeDefinition` instances and resolvers in the extension generation that owns them. When replacing a registry, prepare and validate the new candidate before switching consumers. If preparation fails, keep the previous usable resolver. Once an unavailable definition returns, revalidate the preserved document to restore its interpretation.

Use `Clone` for an independently mutable neutral copy, or `ReplaceContents` to prepare a complete deep copy before replacing an existing document. Replacing a document with itself is rejected. Collection-view objects remain stable, but their contents follow mutations. The caller must serialize edits, validation and publication; these APIs do not establish a cross-thread immutable snapshot.

## Encode values and documents

`GraphSerializedValue` copies its nonempty input bytes. `From<T>` and `Deserialize<T>` use the explicitly supplied serializer; `ToArray` and `Clone` return independent payload copies. `From<T>` and `Deserialize<T>` are host-only methods excluded from the declared script projection.

`GraphDocumentCodec.Encode` and `Decode` already persist the current neutral document through the shared serialization pipeline. Node/edge order is preserved, while property and metadata keys are written in ordinal order. Decoding creates a detached mutable document; it does not validate current definition availability or confer execution readiness.

The asset owner still controls file format ownership, writes, catalog registration and publication. There is no legacy schema reader, former-ID alias or automatic migration promised by this model. Follow the [Graph reference](../../api/projects/inno-core-graphs.md) for exact codec and validation contracts.
