---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2e14a08b23b21ff98f9e541958d954ba3e64f6750e770738a3e4eb10a09e12f3
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(System.String,System.Threading.CancellationToken)
title: PlayerSupportPackPlan.PrepareAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: 0b8aa70568f782d3a8e9f092e247beda92651b246383295327be9f0555dd6332
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
