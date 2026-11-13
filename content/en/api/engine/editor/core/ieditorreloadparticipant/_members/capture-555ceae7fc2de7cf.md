---
uid: api.555ceae7fc2de7cf73f3d2a9016bbf5c7ba86648cd93b1c79059a30a3f1a297d
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.IEditorReloadParticipant.Capture(Inno.Extensibility.Modules.AssemblyReloadContext)"
source: xml
reviewed: 748ea7062b5327a5343a220aa5ee51b1b0c68476bca628d1f87a59e7b531fd70
title: "Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures one isolated transaction for the prepared assembly generation.

**Parameter `context`:** The prepared assembly reload context containing previous and candidate participant state.

**Returns:** A transaction that has captured current state but has not modified live editor objects.
