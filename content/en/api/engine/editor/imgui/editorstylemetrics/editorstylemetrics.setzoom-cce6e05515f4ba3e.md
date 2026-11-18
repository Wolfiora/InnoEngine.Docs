---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cce6e05515f4ba3ec4a2a7189a08cbcbda5fbbc26b6cadd29c8fcd3d6e148220
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorStyleMetrics.SetZoom(System.Single)
title: EditorStyleMetrics.SetZoom
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 25b4a7da0b04010dec62cf7eae51de777c59212c115a69e9e5eed1b77b512ab5
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
