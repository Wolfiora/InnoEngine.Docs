---
uid: api.56fb3f227a3de5de8aaccd6f64bc63e09abdb2a5f9ab0d2a183eafcce42393c5
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.Select(Inno.Editor.Core.EditorContext,System.String)"
source: xml
reviewed: d04a727ebda9bfe177513eaf77297dc5de18cf9f36ea89f9c6a0af3aba1d9a80
title: "Select"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Selects an asset path through the editor-wide selection state, or clears Asset selection.

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
