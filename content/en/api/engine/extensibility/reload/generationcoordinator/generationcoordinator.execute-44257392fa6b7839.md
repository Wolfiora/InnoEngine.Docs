---
uid: api.44257392fa6b78390c8eb4ea0b4efb3974b956b6cfba27813ab6ebcafb5ff8c2
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Execute\u0060\u00601(System.String,Inno.Extensibility.Reload.IGenerationPublication{\u0060\u00600},System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Reload.IGenerationChange})"
source: xml
reviewed: b919f6b1fcc1578e69f4285f85b859fe377870ba7c622f4e3ae408ced4fc21c6
title: "GenerationCoordinator.Execute"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Activates one publication and its captured domain changes, preserving all rollback and cleanup failures.

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
