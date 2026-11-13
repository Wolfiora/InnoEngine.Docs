---
uid: api.6cbc7521cb7fa1479bdfb6ce6c358b98987be438ef49081fa9b0f594acbb302d
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 2e946f1db120bc6b19db807d5581130140f5f189306dfcfbe5cb0a1210af1005
title: "AssetBrowserState.GetSelectedPath"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
