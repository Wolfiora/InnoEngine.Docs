---
uid: api.78af6a884ab9a63a113b271325dccc6bc4985ef98436f360d7e1c5bb644d8f35
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot)"
source: xml
reviewed: 78dc4f7aa066a5b8aed65af76dfd240a6a1e543c167a9d2a061fe83765bc8f8a
title: "AudioContentProviderContext.Submit"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Submits one immutable listener snapshot for runtime selection.

**Parameter `listener`:** Current state for one stable listener identity.

**Exception `T:System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
