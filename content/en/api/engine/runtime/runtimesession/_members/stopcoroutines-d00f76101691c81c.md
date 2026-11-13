---
uid: api.d00f76101691c81cc2e4a5355e3050d4909948c06d43bcdff90426870a7a760c
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.StopCoroutines(System.Object)"
source: xml
reviewed: cd15d33e33d7525c81d440235711c32075ae38c00a5d3f3f18f826e7212cb5bb
title: "StopCoroutines"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Stops every coroutine owned by a runtime object before that object is retired by an atomic reload.

**Parameter `owner`:** The exact owner identity supplied when its coroutines were started.

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.
