---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ffa784b653f1407ca73bd79c57b269e87484b2d5e5fed9e6ad4118d388f82c03
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUISession.Enter
title: EditorUISession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 83d3c8a9b53753455fa92d168c7735453817a951f333ecfd8b62717d97e392e9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

An owner-thread scope that must be released in reverse activation order.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The session has retired.

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread.
