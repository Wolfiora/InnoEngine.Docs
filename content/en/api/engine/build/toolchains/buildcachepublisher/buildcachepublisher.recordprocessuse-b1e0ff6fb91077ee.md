---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b1e0ff6fb91077eedff577c805846fce3099690ee99bdbc6139dbbabde405037
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.RecordProcessUse(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)
title: BuildCachePublisher.RecordProcessUse
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 60bfd41b35784c7651bc43e538a3262df23b45848d64ca3d0bfc1a8aed2d1663
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The completed directory within this publisher's boundary.

**Parameter `leasePath`:** The persistent producer and retirement lease outside the directory.

**Parameter `dependencies`:** Owned generations and workspaces required throughout this process-owned operation.

**Parameter `cancellationToken`:** Cancels ownership acquisition before the process claim is recorded.

## Exceptions

**Exception `T:System.IO.IOException`:** The directory escapes ownership or its registration cannot be written.

**Exception `T:System.OperationCanceledException`:** Ownership acquisition was canceled.
