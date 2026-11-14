---
uid: api.11b60ac9884facfda1a1aae8fba4e937492cd837d71f6f31b85cc3ab1a82d65b
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice)"
source: xml
reviewed: 8776df2156b2f7830939c080b8276f8f35bd6da3f49a3937c2295c8128dd9efe
title: "AudioRuntime.ReplaceDevice"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Replaces a lost or muted backend at a main-thread safety point.

## Parameters

**Parameter `replacement`:** Initialized replacement device, consumed on success and disposed if preparation fails.

## Exceptions

**Exception `T:System.AggregateException`:** Retirement failed after publication preparation; the generation gate is Faulted and the host must restart.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Old or candidate work did not drain before its deadline. Both owners remain retained and the host must restart.
