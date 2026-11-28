---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9cf78428dfa4f00d26f5a9c1364b501571d18be1b6d7d5af190b5177804f138f
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.WaitWhile.CreateWaiter
title: WaitWhile.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: 7e202de4772cf0655cea97935235127a266b6f5582e47fb58a6f81d206428d6d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
