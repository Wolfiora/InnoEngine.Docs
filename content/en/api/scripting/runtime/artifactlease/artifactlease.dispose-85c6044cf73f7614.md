---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.85c6044cf73f7614eca7d6ba759171c1f15291555a5aa50155d25891b7453805
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.Dispose
title: ArtifactLease.Dispose
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 23bd9144c9828850e1f60eed7da0444668a4529565754ef3681cd5af62eb891b
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds. New reads stop when release begins; already opened streams retain their independent provider pins.
