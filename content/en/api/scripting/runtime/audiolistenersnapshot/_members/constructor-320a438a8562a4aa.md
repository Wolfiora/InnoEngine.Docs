---
uid: api.320a438a8562a4aa8518ace6e8aeecd554e88ad06fd5c6fa30645e04158ebbf2
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioListenerSnapshot.#ctor(System.Guid,System.Int32,InnoEngine.Audio.AudioListenerState,System.Boolean)"
source: xml
reviewed: 1a578476cf5b0b13d3ce3344b6296e582f5c7323491e8e418db3c9dcc7285454
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable listener snapshot.

**Parameter `id`:** Stable listener identity across updates.

**Parameter `priority`:** Selection priority; larger values win.

**Parameter `state`:** Current listener transform.

**Parameter `active`:** Whether the listener is eligible for selection.
