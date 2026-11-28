---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.833987d7296374f44bca484369d52a8a22061325afc92b6706f8d70aa6e8b4bc
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.WaitForSeconds.CreateWaiter
title: WaitForSeconds.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: 1ff9cfda53f625a1d8390b833f6b657b7ea0efa4bd84d18de848c0ea8ac13d7e
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
