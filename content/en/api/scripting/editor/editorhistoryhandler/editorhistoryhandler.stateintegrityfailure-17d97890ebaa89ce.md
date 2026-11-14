---
uid: api.17d97890ebaa89cec13ad9c099d9ad3fd3f339cc1a4f02cde5e9c8b34f769f3e
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.StateIntegrityFailure(System.String)"
source: xml
reviewed: 3294dfff20cb0c9ef9eac66b50d9a0a734d44f70e11a3ff11befaf41ee468795
title: "EditorHistoryHandler.StateIntegrityFailure"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a failed result for a transition whose compensation also failed.

## Parameters

**Parameter `message`:** The diagnostic containing both the transition and compensation failures.

## Returns

A failure that faults the owning history.
