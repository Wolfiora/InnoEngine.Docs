---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b3f880ddd4b239b2261a16852a12dd05d0d26d81ff5d71f2dd5271b8dc27b191
symbol: engine:Inno.Audio:M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioEmitterSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 82002d658dcda3f9bd057ea2f30aee893387389827c715ff2944ed73f2b8881e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `emitter`:** Current state for one stable emitter identity.

## Exceptions

**Exception `T:System.ArgumentException`:** The emitter is uninitialized or its identity duplicates a submission in this contribution.

**Exception `T:System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Exception `T:System.ObjectDisposedException`:** This provider invocation has ended.
