---
uid: api.56fb3f227a3de5de8aaccd6f64bc63e09abdb2a5f9ab0d2a183eafcce42393c5
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.Select(Inno.Editor.Core.EditorContext,System.String)"
source: xml
reviewed: a33bf3289da0ef4511ee9d8730daf22e1061fe57958e53063ca1d605ffeaa8f3
title: "AssetBrowserState.Select"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Selects an asset path through the editor-wide selection state, or clears Asset selection.

## Parameters

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
