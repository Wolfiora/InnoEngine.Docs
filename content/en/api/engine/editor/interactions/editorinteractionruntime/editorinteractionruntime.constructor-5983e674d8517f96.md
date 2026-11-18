---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5983e674d8517f96718833d59d8c967c8003c4bc5d2cc13db6b6881205fa7405
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.#ctor(Inno.Editor.Core.EditorContext,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter)
title: EditorInteractionRuntime.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 5a5c49264a52e3eab37963c72df0325ba46114a3482cef3766b9e26176af2423
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The passive editor context shared with the presentation backend.

**Parameter `types`:** The type catalog that owns editor extension generations.

**Parameter `logs`:** The host-owned logging router used by editor infrastructure.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` or `logs` is `null`.
