---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.44257392fa6b78390c8eb4ea0b4efb3974b956b6cfba27813ab6ebcafb5ff8c2
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Execute``1(System.String,Inno.Extensibility.Reload.IGenerationPublication{``0},System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Reload.IGenerationChange})
title: GenerationCoordinator.Execute
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 3962a4b35c20529c72994244311257696b6f0a7ff11d190de939573e8e3bb180
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TProbe`:** The publication's weak unload monitor.

## Parameters

**Parameter `operation`:** A stable diagnostic name for the generation operation.

**Parameter `publication`:** The prepared candidate publication.

**Parameter `changes`:** Captured domain changes in deterministic dependency order.

## Returns

The retirement monitor; admission remains blocked until all monitors pass verification.

## Exceptions

**Exception `T:System.AggregateException`:** An irreversible cleanup or rollback stage failed and the gate is Faulted.

**Exception `T:System.InvalidOperationException`:** Another generation or retirement is pending.
