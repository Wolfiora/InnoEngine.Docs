---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.342f89c741b8ba67883bd1f89c41001956aea6c22a01c867fdb4169cac412103
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioEmitterSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 71401030bc6bdb584e6959901aecd2651bafbf49bb39a6a0d38d4e0c32339820
apiScope: Runtime
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
