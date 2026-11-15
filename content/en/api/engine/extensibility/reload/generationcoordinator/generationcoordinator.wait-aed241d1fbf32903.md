---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aed241d1fbf329033ff169f9a656872c9b0718d678fd3d7924ea4c9c29ad5bc3
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Wait(System.Threading.CancellationToken)
title: GenerationCoordinator.Wait
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 0fe2dac35d5f81f73764d8863121038533af2f311863bd4d9681865ec06a2b93

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Waits for all retirements while preserving pending monitors on cancellation or failure.

## Parameters

**Parameter `cancellationToken`:** Cancellation for the wait, not permission to resume generation changes.

## Exceptions

**Exception `T:System.OperationCanceledException`:** The caller canceled before retirement completed.
