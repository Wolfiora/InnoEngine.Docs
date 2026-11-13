---
uid: api.b3f880ddd4b239b2261a16852a12dd05d0d26d81ff5d71f2dd5271b8dc27b191
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioEmitterSnapshot)"
source: xml
reviewed: 4449870836db77d8ca6a8280f4c7a6adbd155b9239f9419426ee41ed93c73592
title: "AudioContentProviderContext.Submit"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Submits one immutable emitter snapshot for runtime synchronization.

**Parameter `emitter`:** Current state for one stable emitter identity.

**Exception `T:System.ArgumentException`:** The emitter is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
