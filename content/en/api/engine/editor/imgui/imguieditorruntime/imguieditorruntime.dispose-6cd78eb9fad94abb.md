---
uid: api.6cd78eb9fad94abbdc1386fcd07fea96c4a3f641e2b3924265371c05e73e2c77
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.Dispose"
source: xml
reviewed: e4d9b9667351778b2c55bc9929a17d59aae80ff58e7653d05623ba2b8f915ad8
title: "ImGuiEditorRuntime.Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Releases the resources owned by this implementation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Editor extensions still own live work. The interaction runtime remains retained for safe shutdown.
