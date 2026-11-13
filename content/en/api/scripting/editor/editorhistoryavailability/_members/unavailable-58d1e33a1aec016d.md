---
uid: api.58d1e33a1aec016dabf4fc084c1c7588261687c0da2690ad060c42f51085ac05
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(System.String)"
source: xml
reviewed: 1d1acd4ac1133d7718b49defa1f63d80cfff374e124f555bdb038ce7a2b8cc4e
title: "Unavailable"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an unavailable transition result.

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

**Returns:** An availability value that rejects the transition.

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
