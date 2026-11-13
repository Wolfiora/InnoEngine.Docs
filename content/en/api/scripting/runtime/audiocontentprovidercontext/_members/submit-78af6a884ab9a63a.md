---
uid: api.78af6a884ab9a63a113b271325dccc6bc4985ef98436f360d7e1c5bb644d8f35
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot)"
source: xml
reviewed: 2c46fe2f4f6ca137d047d22ccf7861334a88150852ea2b10992612ed1de8b7d6
title: "Submit"
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
