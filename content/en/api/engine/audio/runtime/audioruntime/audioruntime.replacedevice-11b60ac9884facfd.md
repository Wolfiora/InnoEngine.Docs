---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.11b60ac9884facfda1a1aae8fba4e937492cd837d71f6f31b85cc3ab1a82d65b
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice)
title: AudioRuntime.ReplaceDevice
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
reviewed: 922008a9f830b9d5033b736c54f4967b363169f0d7f98f31bff5e54931b09c4b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `replacement`:** Initialized replacement device, consumed on success and disposed if preparation fails.

## Exceptions

**Exception `T:System.AggregateException`:** Retirement failed after publication preparation; the generation gate is Faulted and the host must restart.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Old or candidate work did not drain before its deadline. Both owners remain retained and the host must restart.
