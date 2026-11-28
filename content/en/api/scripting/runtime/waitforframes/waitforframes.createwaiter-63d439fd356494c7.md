---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.63d439fd356494c7b4325251dad5048d3be2e9aa38bd2a43045971a408fd0406
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.WaitForFrames.CreateWaiter
title: WaitForFrames.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: e10248dc5da6cfae0ea717ca8ad2fa752c0707848d01e02b411e5b61237f4b69
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
