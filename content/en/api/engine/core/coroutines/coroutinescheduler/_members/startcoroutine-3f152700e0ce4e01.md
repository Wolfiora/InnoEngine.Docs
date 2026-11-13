---
uid: api.3f152700e0ce4e0129bb3b6c330a7efa258af42f5c4c5c06f2abfb72b87daea8
symbol: "engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Object,System.Collections.IEnumerator)"
source: xml
reviewed: 9ac1652b106d0442fbead398864a618be65940aecc9ec35cc40f943e69159c41
title: "StartCoroutine"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
---

Starts a coroutine with an owner token.

**Parameter `owner`:** Owner key used by `M:Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(System.Object)`.

**Parameter `routine`:** Enumerator exclusively transferred to the scheduler after successful admission.

**Returns:** Coroutine handle.
