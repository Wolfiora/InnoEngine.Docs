---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a148ee8cb22173de2f59c84b2e60e30acd3c4a05f08749e7c89fb66e2ec5573b
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetLease`1.Dispose
title: AssetLease<TAsset>.Dispose
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: f80b92df300d7fe2d9b734ab1f596e88b198274c7b2ea79230210ddce0c1ba8f
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
