---
uid: api.a6d8b7a918cabc70f67662a49649a8af5f563b128cb89b1b8993b048b4683ad2
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioListenerSnapshot)"
source: xml
reviewed: 5e0103cd6585fae55aadccb4ffd4deb13d7b56806b39d94c41d6f464ef46ddd7
title: "AudioContentProviderContext.Submit"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Submits one immutable listener snapshot for runtime selection.

## Parameters

**Parameter `listener`:** Current state for one stable listener identity.

## Exceptions

**Exception `T:System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
