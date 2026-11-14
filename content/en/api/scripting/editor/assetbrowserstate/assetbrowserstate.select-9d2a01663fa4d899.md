---
uid: api.9d2a01663fa4d899fc327e507586d45a1ab676245902e2522bbaff044e051941
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.Select(InnoEditor.Core.EditorContext,System.String)"
source: xml
reviewed: cee69e89562d4d0a063bc3eb29843e1cc0b12c13d2d1c4222b6a976657fb1206
title: "AssetBrowserState.Select"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Selects an asset path through the editor-wide selection state, or clears Asset selection.

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
