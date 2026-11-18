---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bd88e01a720fe2bb528fd838a9fec98888634334d7cdf1fa8a6a7a06a6c6e7ba
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean)
title: EditorStyleMetrics.SetCompactMode
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 464e1b7b7cddfa6990fe48fd05c3ae12d528735838f6531be919f8606c333714
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** `true` for compact density.

## Returns

`true` when the requested density changed; owned drawing applies it at the next frame preparation.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
