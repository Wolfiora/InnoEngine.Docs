---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3ffc47c4f510d9aadb207d6d5092936a3d6c76bf1c02e29a80e1a19d04265b85
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.WaitUntil.CreateWaiter
title: WaitUntil.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: 72da3d2a509dabe11117052a59b2713dc2a87c89a4fb9917018e3daad06cca15
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
