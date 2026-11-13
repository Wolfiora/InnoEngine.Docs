---
uid: api.41a8264a8557ce592ae95d85d901f12e0f86763651c56497eb69a750ce379e4b
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryAvailability.Unavailable(System.String)"
source: xml
reviewed: 8e911aef9487f5b6bed261f556187cbf003291f0c17ce5262ddc940d089d6215
title: "Unavailable"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an unavailable transition result.

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

**Returns:** An availability value that rejects the transition.

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
