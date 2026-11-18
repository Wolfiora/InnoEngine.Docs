---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a67add8f7d9f3c6bccd73b3fa0449e225980883082e9988930a3c0ec81928a75
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown
title: EditorInteractionRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: ee2d3de73d04ba61ee8e8ef64f60a2f68c0d00263ecec5987737cfbf5db67517
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This operation is idempotent. After it succeeds, later disposal cannot recapture transient teardown state such as an empty scene workspace.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
