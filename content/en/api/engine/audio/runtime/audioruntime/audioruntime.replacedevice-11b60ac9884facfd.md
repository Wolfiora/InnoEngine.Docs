---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.11b60ac9884facfda1a1aae8fba4e937492cd837d71f6f31b85cc3ab1a82d65b
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice)
title: AudioRuntime.ReplaceDevice
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
sourceFingerprint: a086c2d6b7f94ca736e211d3dec898102b699fddf98481f67f5170d697eaf4f0
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
