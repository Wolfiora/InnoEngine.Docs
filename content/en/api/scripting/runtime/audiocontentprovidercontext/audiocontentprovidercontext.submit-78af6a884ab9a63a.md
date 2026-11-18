---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.78af6a884ab9a63a113b271325dccc6bc4985ef98436f360d7e1c5bb644d8f35
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 8344b69b5f44d26fca6cd528e000568579809ebd64c32c2f6f2bedc716c4e1ba
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
