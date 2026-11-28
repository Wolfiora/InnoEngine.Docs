---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cbf7d1aeb9bf1c2013db0005fb4dd7853f5417b5ddf52584306d4dd373ea706c
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.WaitForFrames.CreateWaiter
title: WaitForFrames.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
sourceFingerprint: 548ae3a3a517e0a7da65d4116712fb7430b6e0ca8074be049b4fd306696000e8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
