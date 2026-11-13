---
uid: api.11b60ac9884facfda1a1aae8fba4e937492cd837d71f6f31b85cc3ab1a82d65b
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice)"
source: xml
reviewed: a33168e1cba0d249f1ab77c865218d28745d152b39cc578cf4342fbf51527759
title: "ReplaceDevice"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Replaces a lost or muted backend at a main-thread safety point.

**Parameter `replacement`:** Initialized replacement device, consumed on success and disposed if preparation fails.

**Exception `T:System.AggregateException`:** Retirement failed after publication preparation; the generation gate is Faulted and the host must restart.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Old or candidate work did not drain before its deadline. Both owners remain retained and the host must restart.
