---
uid: api.7471d97183f10acd70b38505759f31ffa5fbb05ff84e885157fd47b09d9233e4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSubsystemPipeline.GetRequiredSubsystem\u0060\u00601"
source: xml
reviewed: 163dcf0616e0beed5cf98301fcc8d6eed049193d257757946cbf9e91ee283357
title: "RuntimeSubsystemPipeline.GetRequiredSubsystem"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Resolves the unique active subsystem that implements the requested contract.

## Type parameters

**Type parameter `TFeature`:** The subsystem contract or concrete subsystem type required by the composition root.

## Returns

The unique compatible subsystem owned by this pipeline.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible subsystem exists or more than one compatible subsystem is active.

**Exception `T:System.ObjectDisposedException`:** Thrown after this pipeline has been disposed.
