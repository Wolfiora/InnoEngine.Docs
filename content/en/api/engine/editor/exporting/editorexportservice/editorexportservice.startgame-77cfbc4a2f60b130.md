---
uid: api.77cfbc4a2f60b13021e8c11684856d4a8d999b68992437586f3a5f89e04a13e5
symbol: "engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportService.StartGame(Inno.Build.GameBuildRequest)"
source: xml
reviewed: 1caa75e6eeb7afb3520d1db6283451e68c1b3d63bfeb67e110f0364766b43fea
title: "EditorExportService.StartGame"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
---

Prepares the selected Support Pack before capturing and building the game.

**Parameter `request`:** The complete game request; no form or window state is retained.

**Exception `T:System.InvalidOperationException`:** Another export still owns the service.
