---
uid: api.6cd78eb9fad94abbdc1386fcd07fea96c4a3f641e2b3924265371c05e73e2c77
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.Dispose"
source: xml
reviewed: 1a1954e5f7c9cf38b814f71f14c3030068178fdcfb461594bf49d687c81f06c0
title: "Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Releases the resources owned by this implementation.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Editor extensions still own live work. The interaction runtime remains retained for safe shutdown.
