---
uid: api.e2edbabb7012e030ba7514efde2aebaa3564147c1c6a36049a3669651d3a9247
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: b87a6f37b2f4e55256f207af8363257941f1dda566e28dbedde808ac62fa0d8f
title: "GetSelectedPath"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
