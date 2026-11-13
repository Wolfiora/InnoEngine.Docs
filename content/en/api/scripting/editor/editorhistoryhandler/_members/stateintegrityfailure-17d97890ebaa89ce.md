---
uid: api.17d97890ebaa89cec13ad9c099d9ad3fd3f339cc1a4f02cde5e9c8b34f769f3e
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.StateIntegrityFailure(System.String)"
source: xml
reviewed: d9a12bf5857542c5c679ee0d85a6509f79ca7ada866e7a8498e088209552f9ff
title: "StateIntegrityFailure"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a failed result for a transition whose compensation also failed.

**Parameter `message`:** The diagnostic containing both the transition and compensation failures.

**Returns:** A failure that faults the owning history.
