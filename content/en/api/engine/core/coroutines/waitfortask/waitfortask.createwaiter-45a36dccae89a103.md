---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.45a36dccae89a103ea12c49c53f12e8c6ca9fc355660ad489fb83ae3b6c2ccfa
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.WaitForTask.CreateWaiter
title: WaitForTask.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: 06a2bf3c4f6f383d018bef202385a100377963983ab90c689f58b82cd986925a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
