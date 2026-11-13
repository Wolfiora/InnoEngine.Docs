---
uid: api.5983e674d8517f96718833d59d8c967c8003c4bc5d2cc13db6b6881205fa7405
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: e0ce7fce8179a608bd5a75ac791f08e24eba02ce26776c8bb84ca407feb5f96b
title: "EditorInteractionRuntime.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an interaction runtime for an existing passive editor context.

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` or `logs` is `null`.
