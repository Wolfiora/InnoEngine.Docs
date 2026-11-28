---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6be5b8065f036c19fba1d2843a46562493caac1d44db89d7d2d89c39ce174bf4
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.WaitWhile.CreateWaiter
title: WaitWhile.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: c8df56a3b37e97c8a693b9001e1bf1732dc8a130e21cf40bd2977e21628d859d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
