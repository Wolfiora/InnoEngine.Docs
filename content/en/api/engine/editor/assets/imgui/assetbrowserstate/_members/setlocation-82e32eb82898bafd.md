---
uid: api.82e32eb82898bafd821298816025ae3a11ed6f15dead5201be97c25f43571b26
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetLocation(Inno.Editor.Assets.ImGui.AssetBrowserRoot,System.String)"
source: xml
reviewed: 3d2190da87bc2551f4209e89cdd5ff5483f58b3493e61cd6590d51fc63874f97
title: "SetLocation"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Changes the displayed source root and its isolated navigation directory.

**Parameter `targetRoot`:** The navigation root that owns the requested directory.

**Parameter `directory`:** The isolated source-relative directory; empty selects the root.

**Exception `T:System.ArgumentException`:** The directory belongs to a different source root.
