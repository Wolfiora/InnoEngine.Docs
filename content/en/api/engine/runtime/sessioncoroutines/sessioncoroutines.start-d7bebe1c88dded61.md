---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d7bebe1c88dded617aee0339670aa07c2b88353ae13564bd603679f1392ec589
symbol: engine:Inno.Runtime:M:Inno.Runtime.SessionCoroutines.Start(System.Object,System.Collections.IEnumerator)
title: SessionCoroutines.Start
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 01377587a3fb74f8b2cef58d38a870c65ac35b4c88441e0c08fb1412d1cfa22b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The object that owns this routine until completion or explicit retirement.

**Parameter `routine`:** The enumerator to advance on the session thread.

## Returns

A handle valid until completion, cancellation or retirement.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No live session execution scope is bound on this thread.
