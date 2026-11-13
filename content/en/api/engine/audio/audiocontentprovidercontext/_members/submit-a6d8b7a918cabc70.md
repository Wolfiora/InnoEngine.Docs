---
uid: api.a6d8b7a918cabc70f67662a49649a8af5f563b128cb89b1b8993b048b4683ad2
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioListenerSnapshot)"
source: xml
reviewed: 5f68ffd54d786a171dc82c16d49d358b5994bef7b45cb38db81676b14b10a2a7
title: "Submit"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Submits one immutable listener snapshot for runtime selection.

**Parameter `listener`:** Current state for one stable listener identity.

**Exception `T:System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
