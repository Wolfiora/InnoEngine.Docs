---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2e14a08b23b21ff98f9e541958d954ba3e64f6750e770738a3e4eb10a09e12f3
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(System.String,System.Threading.CancellationToken)
title: PlayerSupportPackPlan.PrepareAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: e396b01db408e74cefd7e33d5c798e1d8052d2fa36d01af30913c3e3b1775f66
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
