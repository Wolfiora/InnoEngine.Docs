---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2e14a08b23b21ff98f9e541958d954ba3e64f6750e770738a3e4eb10a09e12f3
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(System.String,System.Threading.CancellationToken)
title: PlayerSupportPackPlan.PrepareAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 7c9092deca5b34a5eb058a62058981091edc1b142441b45c441441330a4343bf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stagingDirectory`:** The isolated empty directory borrowed for this execution only.

**Parameter `cancellationToken`:** Cancels execution and drains owned work before returning.

## Returns

Completion when the full closure is prepared; failures propagate without publishing.
