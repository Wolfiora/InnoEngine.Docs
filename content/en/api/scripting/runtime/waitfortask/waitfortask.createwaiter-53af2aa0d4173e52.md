---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.53af2aa0d4173e52097464941ff0bbc8fa719e902c2356af85927483c12fb803
symbol: scripting:Inno.Core.Coroutines:M:InnoEngine.Coroutines.WaitForTask.CreateWaiter
title: WaitForTask.CreateWaiter
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: editor-script
sourceFingerprint: e534de3fe3b33e1f0eb99e90d020dd7bebabf423683f2fcb80ec50a96c351525
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A predicate receiving elapsed scheduler seconds and frames since suspension. The scheduler polls from the next tick until the predicate returns false, the coroutine stops, or the predicate throws. Stopping releases the predicate without polling it again.
