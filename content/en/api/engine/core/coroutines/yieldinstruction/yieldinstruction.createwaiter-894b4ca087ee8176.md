---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.894b4ca087ee8176179b66e39e05b6a2f2ae2d6122c1b3422abbb846cd94d546
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.YieldInstruction.CreateWaiter
title: YieldInstruction.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: 1d4dc4ebb892a4559ba41786e8b3610d09a51b52edd79fb0e5a7c09f48b29a23
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
