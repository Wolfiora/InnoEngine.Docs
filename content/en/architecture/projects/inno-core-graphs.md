---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-core-graphs
symbol: project:Inno.Core.Graphs
title: Inno.Core.Graphs
kind: project
owners:
- Inno.Core.Graphs
sourceFingerprint: 4da32a258c826d2ab4d38f7412e4584a1d5eb5aa88102c9ea438ed59d2b31408
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Neutral editable graph documents, generation-scoped definitions, topology validation and current-format serialization.
outdated: false
---
# Inno.Core.Graphs

This project separates persistent node/edge/value records from the live extension definitions that interpret them. It depends on shared Core collections, diagnostics and serialization, and does not own a scene, material compiler, graph widget or rendering backend.

Start with [preserving an editable graph](../../manual/data/preserve-graph.md) to create neutral records, validate them and restore interpretation when a definition returns.

## Document and definition contract

Node, edge and port IDs are stable strings. Values and metadata contain copied serialization bytes instead of CLR types, runtime delegates or extension instances. Node lookup uses a maintained ID index. Collection views are read-only and stable, but reflect edits to the mutable document; a read-only view is not an immutable publication.

Adding a node retains its mutable record. Removing it removes connected edges. `Clone` and `ReplaceContents` prepare deep neutral copies; self-replacement is rejected. The host serializes concurrent editing, validation and publication.

Resolvers and definitions belong to the active extension generation. Missing definitions produce warnings without deleting saved content. Physically absent endpoints, incompatible direction/types, over-capacity connections and missing required inputs are errors. Dynamic ports are resolved for current node data. Cycles require explicit allowance. No-error validation is not executable-graph certification, and custom resolver/conversion failures are not universally swallowed.

`GraphDocumentCodec` encodes and decodes the current neutral format using an explicit SerializationRegistry. Dictionary keys are ordinally ordered; node/edge order is retained. Decoding does not resolve current definitions. Asset file ownership, publication and any higher-level format rules belong to the asset consumer; no compatibility reader or former-ID alias is promised here.

The declared Runtime script namespace is `InnoEngine.Graphs`. Registry-taking value conversion methods are explicitly excluded, and `GraphDocumentCodec` is not in the export list. This reference is the host CLR inventory, not a substitute for actual projected declarations.

## API reference

Browse the [exact types and member contracts](../../api/engine/core/graphs/index.md) in the selected CLR surface. Each declaration links to its captured source and preserves its shared constraints.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
