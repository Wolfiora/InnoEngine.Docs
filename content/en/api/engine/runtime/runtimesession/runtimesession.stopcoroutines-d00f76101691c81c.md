---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d00f76101691c81cc2e4a5355e3050d4909948c06d43bcdff90426870a7a760c
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.StopCoroutines(System.Object)
title: RuntimeSession.StopCoroutines
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 4a9b478a175b6304db8019eea2f8d5369fbb5b67574ffc62de6bf2077afb177f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The exact owner identity supplied when its coroutines were started.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.
