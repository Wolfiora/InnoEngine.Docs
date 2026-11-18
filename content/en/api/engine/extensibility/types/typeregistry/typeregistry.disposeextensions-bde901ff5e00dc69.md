---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bde901ff5e00dc691450a0bac37f3aa6725ed21d708f96d572ccfc8721abff0d
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.DisposeExtensions(System.Collections.Generic.IEnumerable{System.Object})
title: TypeRegistry<TSnapshot>.DisposeExtensions
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: a97c529f5e78bcf9496fa1937e07b8ef876117e935b18f0877a990276309e674
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `extensions`:** Instances whose ownership has ended; duplicate references are disposed once.

## Exceptions

**Exception `T:System.AggregateException`:** One or more instances failed retirement after all remaining instances were attempted.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** An instance did not drain. The registry retains the batch and faults its shared generation gate.
