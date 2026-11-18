---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2d95ea23f341230d3a6c00f87a998f13b9c2f95a3381103f616101775957f3ed
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Commit(System.Action{Inno.Assets.AssetPath})
title: AssetSampleImportTransaction.Commit
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: d5f9e36c75445936e9cbf83908087e0e9f9084a96edc50359199c1879b399b8a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `beforePublish`:** Optional owner-thread finalization, such as recording neutral History data. Failure leaves the transaction open for Rollback and no Changed notification is published.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Validation is unfinished, the transaction is finished, or the caller is not its owner thread.

**Exception `T:System.OperationCanceledException`:** The import or its validation was canceled before publication.
