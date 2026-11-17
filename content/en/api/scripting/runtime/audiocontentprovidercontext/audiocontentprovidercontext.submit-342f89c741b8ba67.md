---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.342f89c741b8ba67883bd1f89c41001956aea6c22a01c867fdb4169cac412103
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioEmitterSnapshot)
title: AudioContentProviderContext.Submit
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 1271b1e8cfdafefb3593375ae02ef2c4af7b4d3907a6fc0d03b5328c7b30ef3e
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
