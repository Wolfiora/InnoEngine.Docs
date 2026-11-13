---
uid: api.e2edbabb7012e030ba7514efde2aebaa3564147c1c6a36049a3669651d3a9247
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: ba3b199ec6e4168dd7e3aaca5b96bb33b1e101fb1cc6849a14e3d91c8153e382
title: "AssetBrowserState.GetSelectedPath"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
