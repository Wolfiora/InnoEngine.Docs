---
uid: api.77cfbc4a2f60b13021e8c11684856d4a8d999b68992437586f3a5f89e04a13e5
symbol: "engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportService.StartGame(Inno.Build.GameBuildRequest)"
source: xml
reviewed: b474c4b22a3b6e226e852e5551926e0fa7eef2fdcfd12ef8b47b28358388aca3
title: "StartGame"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
---

Prepares the selected Support Pack before capturing and building the game.

**Parameter `request`:** The complete game request; no form or window state is retained.

**Exception `T:System.InvalidOperationException`:** Another export still owns the service.
