---
uid: api.ff9948a8897e94f6f61ec4ed0df42e38cae6857d39e73452209f12cc6bd1baec
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot,System.String)"
source: xml
reviewed: f1236835785f9f1962d341417195cd60aa12459aee3f7c90b76736a4683ab7be
title: "SetLocation"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Changes the displayed source root and its isolated navigation directory.

**Parameter `targetRoot`:** The navigation root that owns the requested directory.

**Parameter `directory`:** The isolated source-relative directory; empty selects the root.

**Exception `T:System.ArgumentException`:** The directory belongs to a different source root.
