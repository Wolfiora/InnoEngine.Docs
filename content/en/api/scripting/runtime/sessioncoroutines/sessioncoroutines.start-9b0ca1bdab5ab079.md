---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9b0ca1bdab5ab0791746c9a4cd07b3ec1a9f723b5baf5c72609a4a188c503196
symbol: scripting:Inno.Runtime:M:InnoEngine.Core.SessionCoroutines.Start(System.Object,System.Collections.IEnumerator)
title: SessionCoroutines.Start
kind: api
owners:
- Inno.Runtime
apiSurface: editor-script
sourceFingerprint: d3b03129e5bcceca7f824009e7556806c5c3b31d4308d444c1537f24037dbaf1
apiScope: Runtime
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
