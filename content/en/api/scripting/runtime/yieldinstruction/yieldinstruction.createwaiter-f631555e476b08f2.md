---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f631555e476b08f2db68951b7ee3b22139ac664526d67378470d22683fcba161
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.YieldInstruction.CreateWaiter
title: YieldInstruction.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: 1af5c4995ce8f077258de5e46bf8f1ed2fd5a58f6bd8e03ae00df90ffafb7263
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
