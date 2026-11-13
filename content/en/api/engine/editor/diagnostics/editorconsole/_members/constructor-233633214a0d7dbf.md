---
uid: api.233633214a0d7dbf0e77e784e5d7830efb62e0dadcecca66df203417e72039f8
symbol: "engine:Inno.Editor.Diagnostics:M:Inno.Editor.Diagnostics.EditorConsole.#ctor(Inno.Core.Logging.LogRouter,Inno.Core.Diagnostics.DiagnosticHub,Inno.Editor.PlayMode.IEditorPlayMode)"
source: xml
reviewed: c5c076101c5a874b12df88c78ba80503c4f974da72090bc5ecb12b7a38137229
title: "Constructor"
kind: api
owners: [Inno.Editor.Diagnostics]
apiSurface: source-clr
---

Creates a Console service that observes one editor Play Mode controller.

**Parameter `logRouter`:** The host logging router whose entries are presented by this Console.

**Parameter `diagnosticHub`:** The host diagnostic hub whose current reports are presented by this Console.

**Parameter `playMode`:** The Play Mode source used to clear ordinary logs when a new simulation request begins.

**Exception `T:System.ArgumentNullException`:** Thrown when `playMode` is `null`.
