---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f306eda584411587032cbb896da38d543d05b2904bd66cf2e6fea8aad18eeea3
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.WaitForSeconds.CreateWaiter
title: WaitForSeconds.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: 613f70033f06a58f14053599037ba3ac8c5d265e0a1c4a405eaaafdde5f3a1cb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
