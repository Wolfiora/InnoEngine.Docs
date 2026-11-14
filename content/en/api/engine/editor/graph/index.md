---
uid: api.directory.engine.editor.graph
title: "Graph"
kind: landing
owners: []
---

# Graph

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [ImGui](imgui/index.md) | Neutral graph geometry, pointer intent and borrowed UI drawing independent of shader or panel semantics. |

## Types

| Type | Purpose |
| --- | --- |
| [GraphCanvasState](graphcanvasstate/index.md) | Stores transient pan, zoom, selection and connection interaction state without ImGui dependencies. |
| [GraphClipboardData](graphclipboarddata/index.md) | Contains a neutral copied node fragment suitable for graph clipboard operations. |
| [GraphDocumentController](graphdocumentcontroller/index.md) | Applies neutral graph edits atomically and records every data mutation in reload-safe Editor History. |
| [GraphEditorModule](grapheditormodule/index.md) | Owns active neutral graph document sessions resolved by reload-safe Editor History. |

