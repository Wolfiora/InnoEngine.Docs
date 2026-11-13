---
uid: api.342f89c741b8ba67883bd1f89c41001956aea6c22a01c867fdb4169cac412103
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioEmitterSnapshot)"
source: xml
reviewed: 2701f1084ee03d7d7108f1ab8e68ccff717f5098ed2447be1d731ead38247113
title: "AudioContentProviderContext.Submit"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Submits one immutable emitter snapshot for runtime synchronization.

**Parameter `emitter`:** Current state for one stable emitter identity.

**Exception `T:System.ArgumentException`:** The emitter is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
