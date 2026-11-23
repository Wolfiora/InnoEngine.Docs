---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a67add8f7d9f3c6bccd73b3fa0449e225980883082e9988930a3c0ec81928a75
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.PrepareShutdown
title: EditorInteractionRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 0a8f191968c03fbd2beb4822f7e8bec0a39839857cc760101f65b000e3fe9fc6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.

## Remarks

This operation is idempotent. After it succeeds, later disposal cannot recapture transient teardown state such as an empty scene workspace.
