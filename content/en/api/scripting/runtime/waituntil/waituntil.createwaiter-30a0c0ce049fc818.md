---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.30a0c0ce049fc818c4ee777a92032d127489f3266cb6103f12957ecff47746c2
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.WaitUntil.CreateWaiter
title: WaitUntil.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: a7864c04f468f8f791cb5d76db5702066490b62f7e1e1fc7f2d5460e3b07347a
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
