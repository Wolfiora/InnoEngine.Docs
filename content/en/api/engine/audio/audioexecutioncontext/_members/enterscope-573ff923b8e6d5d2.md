---
uid: api.573ff923b8e6d5d2ce022f12f9513471d89915518a43b38d921492d9b472d0e9
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioExecutionContext.EnterScope(Inno.Audio.IAudioService)"
source: xml
reviewed: 5b76f419666871df11c13d26f9264392d050cddf31f2dd65d363c94b58390d4f
title: "EnterScope"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Binds an audio service until the returned strict last-in-first-out scope is disposed.

**Parameter `audio`:** Host-owned audio service exposed to script-facing operations.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `audio` is `null`.
