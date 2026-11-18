---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.981d5339f255d8f60d5da65e30c6a4282d477487963fbe8bae7dab2dcbadccc9
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorStyleMetrics.SetZoom(System.Single)
title: EditorStyleMetrics.SetZoom
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: df316a7e1cd28cbd4cc6bd1aab781e0859b3d0a0ab2eed90ba2567f8170d7bb2
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The requested UI zoom multiplier.

## Returns

`true` when the requested zoom changed; owned drawing applies it at the next frame preparation.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
