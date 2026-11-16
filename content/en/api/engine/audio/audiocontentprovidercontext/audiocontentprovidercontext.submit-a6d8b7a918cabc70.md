---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a6d8b7a918cabc70f67662a49649a8af5f563b128cb89b1b8993b048b4683ad2
symbol: engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioListenerSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 90154288966c050a0dd34db7524337b788cb94996cabb1589ae0c689cc1e2995
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `listener`:** Current state for one stable listener identity.

## Exceptions

**Exception `T:System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
