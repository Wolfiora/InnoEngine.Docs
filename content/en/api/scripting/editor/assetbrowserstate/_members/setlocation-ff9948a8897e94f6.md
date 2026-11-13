---
uid: api.ff9948a8897e94f6f61ec4ed0df42e38cae6857d39e73452209f12cc6bd1baec
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot,System.String)"
source: xml
reviewed: 221c3e12ec810f10661f36bfd772c4f6249c69f0cfaa10345b5cbd9b1355f028
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
