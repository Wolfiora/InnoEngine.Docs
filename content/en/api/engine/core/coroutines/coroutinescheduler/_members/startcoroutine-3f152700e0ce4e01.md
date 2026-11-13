---
uid: api.3f152700e0ce4e0129bb3b6c330a7efa258af42f5c4c5c06f2abfb72b87daea8
symbol: "engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Object,System.Collections.IEnumerator)"
source: xml
reviewed: 317efcfb2390befb57d39e5bab4223e3374ed88b7339ac8157d20bec67eb99de
title: "StartCoroutine"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
---

Starts a coroutine with an owner token.

**Parameter `owner`:** Owner key used by `M:Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(System.Object)`.

**Parameter `routine`:** Enumerator exclusively transferred to the scheduler after successful admission.

**Returns:** Coroutine handle.
