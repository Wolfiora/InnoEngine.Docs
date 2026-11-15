---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d00f76101691c81cc2e4a5355e3050d4909948c06d43bcdff90426870a7a760c
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.StopCoroutines(System.Object)
title: RuntimeSession.StopCoroutines
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: cd15d33e33d7525c81d440235711c32075ae38c00a5d3f3f18f826e7212cb5bb

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Stops every coroutine owned by a runtime object before that object is retired by an atomic reload.

## Parameters

**Parameter `owner`:** The exact owner identity supplied when its coroutines were started.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.
