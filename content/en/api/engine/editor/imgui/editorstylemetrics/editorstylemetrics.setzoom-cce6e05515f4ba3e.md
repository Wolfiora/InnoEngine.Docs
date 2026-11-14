---
uid: api.cce6e05515f4ba3ec4a2a7189a08cbcbda5fbbc26b6cadd29c8fcd3d6e148220
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorStyleMetrics.SetZoom(System.Single)"
source: xml
reviewed: 806b5c0a145350186dfa8aa06b9eccab032311b338d3fc84097380ebb56f7c76
title: "EditorStyleMetrics.SetZoom"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Requests a bounded zoom without changing metrics partway through an owned native frame.

## Parameters

**Parameter `value`:** The requested UI zoom multiplier.

## Returns

`true` when the requested zoom changed; owned drawing applies it at the next frame preparation.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
