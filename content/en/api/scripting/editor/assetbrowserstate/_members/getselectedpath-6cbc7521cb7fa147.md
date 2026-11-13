---
uid: api.6cbc7521cb7fa1479bdfb6ce6c358b98987be438ef49081fa9b0f594acbb302d
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 6be712bd92a660ddefe59029ef48407ce4efbf1422ae88fdb268f379ac22cedd
title: "GetSelectedPath"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
