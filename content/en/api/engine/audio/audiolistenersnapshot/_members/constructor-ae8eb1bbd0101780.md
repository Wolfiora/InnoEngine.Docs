---
uid: api.ae8eb1bbd010178066a3ae3fd1becd8f3e1f7fa2830d972703dc7cd64e67e8d3
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioListenerSnapshot.#ctor(System.Guid,System.Int32,Inno.Audio.AudioListenerState,System.Boolean)"
source: xml
reviewed: ea3f85f20d759d0ba14be684456a28137e946d2b67c517eb1dd2c796e4210e01
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates an immutable listener snapshot.

**Parameter `id`:** Stable listener identity across updates.

**Parameter `priority`:** Selection priority; larger values win.

**Parameter `state`:** Current listener transform.

**Parameter `active`:** Whether the listener is eligible for selection.
