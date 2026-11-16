---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.78af6a884ab9a63a113b271325dccc6bc4985ef98436f360d7e1c5bb644d8f35
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 41fc7a422cc9bd1f29e565f46fee0208b6ecf09cb2f9281fd8291c66ce9b3f22
apiScope: Runtime
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
