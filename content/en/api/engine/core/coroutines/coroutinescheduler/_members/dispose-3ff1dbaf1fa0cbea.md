---
uid: api.3ff1dbaf1fa0cbea07bfc29ffe0c744dab53f6795871082e0490b53f9b008016
symbol: "engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.Dispose"
source: xml
reviewed: 994ee7ef6984f00c6fa52062f274fbe2de4c7406d7f1ce46b5a3fff565f5da97
title: "Dispose"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
---

Closes admission and disposes all active and pending enumerators. Reentrant disposal retires the executing enumerator after its callback returns.

**Exception `T:System.AggregateException`:** Cleanup failed after all eligible enumerators were attempted.
